import React from "react";
import {
  FaCarSide,
  FaMotorcycle,
  FaTruck,
  FaHandHoldingHeart,
  FaPiggyBank,
  FaUserShield,
  FaUsers,
  FaWalking,
} from "react-icons/fa";

const insuranceData = [
  {
    title: "Motor Insurance",
    items: [
      { icon: <FaCarSide />, name: "Car Insurance" },
      { icon: <FaMotorcycle />, name: "2 Wheeler Insurance" },
      { icon: <FaTruck />, name: "Commercial Vehicle" },
    ],
  },
  {
    title: "Life Insurance",
    items: [
      { icon: <FaHandHoldingHeart />, name: "Term Insurance" },
      { icon: <FaPiggyBank />, name: "Endowment Plan" },
    ],
  },
  {
    title: "Health Insurance",
    items: [
      { icon: <FaUserShield />, name: "Individual Health Insurance" },
      { icon: <FaUsers />, name: "Family Health Insurance" },
      { icon: <FaWalking />, name: "Senior Citizen Plan" },
    ],
  },
];

const InsuranceType = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-blue-600 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Our Insurance Solutions
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choose Insurance By Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
                {card.title}
              </h3>

              <div
                className={`grid ${
                  card.items.length === 2 ? "grid-cols-2" : "grid-cols-3"
                } gap-4`}
              >
                {card.items.map((item, i) => (
                  <div
                    key={i}
                    className="group flex flex-col items-center text-center px-3 py-4 border-r last:border-r-0 border-gray-200"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-3 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>

                    <p className="text-[16px] font-medium text-gray-700 leading-snug">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceType;