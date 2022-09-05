import React from "react";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import Product from "./Product";
import Program from "./Program";
import Reservations from "./Reservations";
import Together from "./Together";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <Product />
      <Program />
      <Together />
      <Reservations />
    </div>
  );
};

export default Home;
