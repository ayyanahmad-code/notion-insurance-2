// import HomePage from './pages/HomePage';
// import Layout from './components/Layout';

// function App() {
//   return (
//     <Layout>
//       <HomePage />
//     </Layout>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

import Home from "./pages/HomePage";
import About from "./pages/About";
import Insurance from "./pages/Insurance";
import Partners from "./pages/Partners";
import Claim from "./pages/Claim";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Posp from "./pages/Posp";
import CarInsurance from "./pages/Home/Insurance/CarInsurance";
import BikeInsurance from "./pages/Home/Insurance/BikeInsurance";
import CommercialInsurance from "./pages/Home/Insurance/CommercialInsurance";
import InsuranceResultLayout from "./components/Insurance/InsuranceResultLayout";
import InsuranceCard from "./components/Insurance/InsuranceCard";
import ProposalPage from "./pages/Home/Insurance/ProposalPage";
import PaymentPage from "./pages/Home/Insurance/PaymentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route
          path="insurances"
          element={<Insurance />}
        />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="our-partners"
          element={<Partners />}
        />

        <Route
          path="claim"
          element={<Claim />}
        />

        <Route
          path="contact-us"
          element={<Contact />}
        />

        <Route
          path="login"
          element={<Login />}
        />

        <Route
          path="become-posp"
          element={<Posp />}
        />
        <Route
          path="car-insurance"
          element={<CarInsurance />}
        />
        <Route
          path="bike-insurance"
          element={<BikeInsurance />}
        />
        <Route
          path="commercial-insurance"
          element={<CommercialInsurance />}
        />
        <Route
          path="insurance-result"
          element={<InsuranceResultLayout />}
        />
        <Route
          path="insurance-card"
          element={<InsuranceCard />}
        />
        <Route
        path="/proposal"
        element={<ProposalPage/>}
        />
        <Route
      path="/payment"
      element={<PaymentPage/>}
      />

      </Route>
    </Routes>
  );
}

export default App;