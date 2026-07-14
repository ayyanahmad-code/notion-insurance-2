// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/layout/Navbar';
// import Footer from '../components/layout/Footer';

// const Layout = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">
//         <Outlet />  {/* This renders the matched child route */}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;



import Navbar from "../components/layout/Navbar";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default Layout;