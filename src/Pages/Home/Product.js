import React from "react";
import bg from "../../Assets/logo/blue-banner.jpg";
import logo from "../../Assets/logo/Design_element.png";
import chair from "../../Assets/images/chair.jpg";
import walls from "../../Assets/images/weddingwalls.jpg";
import cater from "../../Assets/images/catering.jpg";
import metal from "../../Assets/images/metal_circles-2.jpg";

const Product = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="mt-60"
    >
      <div className="lg:mx-32 lg:flex lg:items-center mt-20 block mx-8 py-10">
        <div className="lg:w-2/4 w-full mr-10">
          <img
            src={logo}
            alt=""
            className="mx-auto mt-6 hover:scale-110 transition ease-linear duration-200"
          />
          <h2 className="lg:text-6xl text-3xl text-center font-banner mt-6">
            Includes Various Product Categories
          </h2>
          <p className="text-xl text-center font-line my-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
            tempor incididunt
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border-white border-4">
            <img src={chair} alt="" className="" />
            <p className="text-center text-xl py-3 font-banner">Chairs</p>
          </div>
          <div className="bg-white border-white border-4">
            <img src={walls} alt="" className="" />
            <p className="text-center text-xl py-3 font-banner">
              Wedding Walls
            </p>
          </div>
          <div className="bg-white border-white border-4">
            <img src={cater} alt="" className="" />
            <p className="text-center text-xl py-3 font-banner">Catering</p>
          </div>
          <div className="bg-white border-white border-4">
            <img src={metal} alt="" className="" />
            <p className="text-center text-xl py-3 font-banner">
              Metal Circles & Flowers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
