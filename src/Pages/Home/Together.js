import React from "react";
import ent from "../../Assets/logo/sec6_guitar.png";
import din from "../../Assets/logo/dinning.png";
import dec from "../../Assets/logo/decor.png";
import swa from "../../Assets/logo/swaggifting.png";
import logo from "../../Assets/logo/Design_element.png";

const Together = () => {
  return (
    <div className="bg-white">
      <div className="lg:mt-20 py-20 lg:mx-20 lg:flex block px-10">
        <div className="lg:w-1/2 w-full grid grid-cols-2">
          <div className="border-2 text-center ">
            <img
              src={ent}
              alt=""
              className="mx-auto hover:scale-110 transition ease-linear duration-200 m-5"
            />
            <h1 className="m-5 font-banner text-xl">Entertainment</h1>
          </div>
          <div className="border-2 text-center ">
            <img
              src={din}
              alt=""
              className="mx-auto hover:scale-110 transition ease-linear duration-200 m-5"
            />
            <h1 className="m-5 font-banner text-xl">Dining</h1>
          </div>
          <div className="border-2 text-center ">
            <img
              src={dec}
              alt=""
              className="mx-auto hover:scale-110 transition ease-linear duration-200 m-5"
            />
            <h1 className="m-5 font-banner text-xl">Decor</h1>
          </div>
          <div className="border-2 text-center ">
            <img
              src={swa}
              alt=""
              className="mx-auto hover:scale-110 transition ease-linear duration-200 m-5"
            />
            <h1 className="m-5 font-banner text-xl">Swag & Gifting</h1>
          </div>
        </div>
        <div className="lg:w-1/2 w-full px-10">
          <img
            src={logo}
            className="mx-auto lg:mt-5 mt-10 hover:scale-110 transition ease-linear duration-200"
            alt=""
          />
          <h2 className="mt-5 lg:text-5xl text-3xl font-banner text-center">
            Let's Plan Your Next Event Together
          </h2>
          <p className="text-xl font-line text-center mt-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
            tempor incididunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Together;
