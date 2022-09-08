import React from "react";
import logo from "../../Assets/logo/15-year-exp.png";
import img1 from "../../Assets/images/sec5_couples.jpg";
import img2 from "../../Assets/images/sec5_ring.jpg";
import img3 from "../../Assets/images/sec5_wine.jpg";

const Program = () => {
  return (
    <div>
      <div className="w-3/4 mx-auto mt-20">
        <img
          src={logo}
          alt=""
          className="mx-auto  hover:scale-110 transition ease-linear duration-200"
        />
        <h2 className="text-3xl lg:text-5xl font-banner text-center mt-6 w-full lg:w-11/12 mx-auto text-amber-500">
          The Unrivaled Scenery, Unforgettable Wedding Program
        </h2>
        <div className="grid grid-cols-5 lg:gap-8 gap-4 my-16">
          <div className=" col-span-3">
            <img
              src={img1}
              alt=""
              className="border-4 shadow-2xl border-white rounded-tl-[50px] rounded-bl-[50px] hover:scale-110 transition ease-linear duration-200"
            />
          </div>
          <div className="grid col-span-2 grid-rows-5 lg:gap-8 gap-4">
            <img
              src={img2}
              alt=""
              className="row-span-3 shadow-2xl h-full border-4 border-white rounded-tr-[50px] hover:scale-110 transition ease-linear duration-200"
            />
            <img
              src={img3}
              alt=""
              className="row-span-2 shadow-2xl h-full border-4 border-white rounded-br-[50px] hover:scale-110 transition ease-linear duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
