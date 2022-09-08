import React from "react";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import Footer from "./Footer";
import Product from "./Product";
// import Brand from "./Brand";
// import Program from "./Program";
// import Reservations from "./Reservations";
// import Together from "./Together";

const Home = () => {
  return (
    <div className="z-0 bg-gray-900">
      <Banner />
      <AboutSection />
      <Product />
      {/* <Program />
      <Together />
      <Reservations />
      <Brand /> */}

      <Footer />
    </div>
  );
};

export default Home;
