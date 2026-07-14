import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";

import { motion } from "framer-motion";

import {
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";

const getYouTubeId = (url) => {
  const match = url.match(
    /^.*(youtu.be\/|v\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  );

  return match && match[2].length === 11
    ? match[2]
    : null;
};

const getThumbnail = (id) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

const VideoSlider = () => {
  const [videos, setVideos] = useState([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [activeVideo, setActiveVideo] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const autoRef = useRef();

  const defaultVideos = [
    {
      id: 1,
      youtube_url:
        "https://www.youtube.com/watch?v=pF00ODRvHS4",
      title: "Become an POSP",
      description: "Join us as a Point of Sales Person and earn attractive commissions",
    },

    {
      id: 2,
      youtube_url:
        "https://www.youtube.com/watch?v=otBbIxW49kI",
      title: "Typography in Insurance",
      description:
        "Understanding insurance terms",
    },

    {
      id: 3,
      youtube_url:
        "https://www.youtube.com/watch?v=uLN0c2moqps",
      title: "Personal Accidental Insurance",
      description:
        "Protect yourself from unforeseen accidents",
    },
  ];

  useEffect(() => {
    const formatted =
      defaultVideos.map((v) => ({
        ...v,
        videoId: getYouTubeId(
          v.youtube_url
        ),
        thumbnail: getThumbnail(
          getYouTubeId(v.youtube_url)
        ),
      }));

    setVideos(formatted);

    setLoading(false);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev + 1) % videos.length
    );
  }, [videos.length]);

  const prev = useCallback(() => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + videos.length) %
        videos.length
    );
  }, [videos.length]);

  useEffect(() => {
    autoRef.current = setInterval(
      next,
      4000
    );

    return () =>
      clearInterval(autoRef.current);
  }, [next]);

  if (loading) {
    return (
      <div className="h-[500px] flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  const getStyle = (i) => {

    const offset =
      i - currentIndex;

    if (offset === 0)
      return {
        scale: 1,
        rotateY: 0,
        x: 0,
        opacity: 1,
        zIndex: 10,
      };

    if (
      offset === -1 ||
      offset ===
        videos.length - 1
    )
      return {
        scale: .8,
        rotateY: 40,
        x: -180,
        opacity: .5,
        zIndex: 5,
      };

    if (
      offset === 1 ||
      offset ===
        -(videos.length - 1)
    )
      return {
        scale: .8,
        rotateY: -40,
        x: 180,
        opacity: .5,
        zIndex: 5,
      };

    return {
      scale: .5,
      opacity: 0,
      x: 0,
      zIndex: 1,
    };
  };

  return (
    <>
      <div className="relative h-[550px] flex items-center justify-center overflow-hidden perspective-[1500px]">

        {videos.map((video, i) => {

          const style =
            getStyle(i);

          return (

            <motion.div
              key={video.id}
              animate={{
                scale: style.scale,
                rotateY:
                  style.rotateY,
                x: style.x,
                opacity:
                  style.opacity,
              }}
              transition={{
                duration: .5,
              }}
              style={{
                zIndex:
                  style.zIndex,
              }}
              onClick={() =>
                setActiveVideo(
                  video.videoId
                )
              }
              className="absolute w-[80%] sm:w-[450px] lg:w-[550px] cursor-pointer"
            >

              <div className="rounded-3xl overflow-hidden shadow-2xl relative">

                <img
                  src={
                    video.thumbnail
                  }
                  alt={
                    video.title
                  }
                  className="w-full h-[340px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-5 left-5 text-white">

                  <h3 className="font-bold text-xl">

                    {video.title}

                  </h3>

                  <p>

                    {
                      video.description
                    }

                  </p>

                </div>

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">

                    <FaPlay className="text-blue-600 text-2xl" />

                  </div>

                </div>

              </div>

            </motion.div>

          );
        })}

        <button
  onClick={prev}
  className="
    absolute 
    left-4 md:left-8
    top-1/2 -translate-y-1/2
    z-30
    w-11 h-11 md:w-14 md:h-14
    rounded-full
    bg-white/20
    backdrop-blur-md
    border border-white/30
    text-white
    shadow-xl
    flex items-center justify-center
    transition-all duration-300
    hover:scale-110
    hover:bg-white
    hover:text-black
  "
>
  <FaChevronLeft className="text-lg md:text-xl" />
</button>

<button
  onClick={next}
  className="
    absolute
    right-4 md:right-8
    top-1/2 -translate-y-1/2
    z-30
    w-11 h-11 md:w-14 md:h-14
    rounded-full
    bg-white/20
    backdrop-blur-md
    border border-white/30
    text-white
    shadow-xl
    flex items-center justify-center
    transition-all duration-300
    hover:scale-110
    hover:bg-white
    hover:text-black
  "
>
  <FaChevronRight className="text-lg md:text-xl" />
</button>
      </div>

      {activeVideo && (
        <div
          onClick={() =>
            setActiveVideo(null)
          }
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
        >

          <div
            className="w-full max-w-5xl"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="text-white text-3xl mb-4"
              onClick={() =>
                setActiveVideo(
                  null
                )
              }
            >
              <FaTimes />
            </button>

            <div className="aspect-video">

              <iframe
                className="w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                allowFullScreen
                title="video"
              />

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default VideoSlider;