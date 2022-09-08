import React from "react";
import bg from "../../Assets/logo/blue-banner.jpg";
import logo from "../../Assets/logo/Design_element.png";
import baowa from "../../Assets/Enlisted hall/Baowa.jpg";
import eon from "../../Assets/Enlisted hall/eon.jpg";
import tokyo from "../../Assets/Enlisted hall/tokyo.jpg";
import mal from "../../Assets/Enlisted hall/mal.jpg";
import kunjo from "../../Assets/Enlisted hall/kunjo.jpg";

const Product = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="mt-60"
    >
      <div className="lg:w-2/4 w-full mx-auto py-10">
        <img
          src={logo}
          alt=""
          className="mx-auto mt-6 hover:scale-110 transition ease-linear duration-200"
        />
        <h2 className="lg:text-6xl text-3xl text-center font-banner mt-6">
          Enlisted Halls
        </h2>
      </div>
      <div className="lg:mx-20 mx-10 pb-20">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
          <div className="bg-white border-white border-4 shadow-2xl">
            <img src={baowa} alt="" className="w-full" />
            <p className="text-center text-xl py-3 font-banner">
              Baowa Convention Hall
            </p>
          </div>
          <div className="bg-white border-white border-4 shadow-2xl">
            <img src={eon} alt="" className="w-full" />
            <p className="text-center text-xl py-3 font-banner">
              Eon Convention Hall
            </p>
          </div>
          <div className="bg-white border-white border-4 shadow-2xl">
            <img src={tokyo} alt="" className="w-full" />
            <p className="text-center text-xl py-3 font-banner">
              Tokyo Convention Hall
            </p>
          </div>
          <div className="bg-white border-white border-4 shadow-2xl">
            <img src={mal} alt="" className="w-full" />
            <p className="text-center text-xl py-3 font-banner">
              Sena Malancha
            </p>
          </div>
          <div className="bg-white border-white border-4 shadow-2xl">
            <img src={kunjo} alt="" className="w-full" />
            <p className="text-center text-xl py-3 font-banner">Sena Kunjo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
