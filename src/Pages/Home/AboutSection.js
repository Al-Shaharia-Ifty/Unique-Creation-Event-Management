import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../Assets/images/better_togather.jpg";
import img2 from "../../Assets/images/roses.jpg";
import logo from "../../Assets/logo/body_bird-e1658928262504.png";

const AboutSection = () => {
  return (
    <div className="lg:mx-32 lg:flex lg:items-center my-20 block mx-8">
      <div className="lg:w-2/4 w-full">
        <p className="text-pink-500 text-xl">About Us</p>
        <h2 className="text-6xl font-banner mt-5">
          What We do, We do With Passion
        </h2>
        <p className="mt-5 font-line text-xl">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
          tempor incididunt
        </p>
        <Link
          to="/about"
          className="rounded-full btn btn-outline mt-5 hover:bg-pink-500"
        >
          Learn More
        </Link>
      </div>
      <div className="h-56 lg:w-2/4 w-full relative">
        <img
          src={logo}
          alt=""
          className="hover:scale-110 transition ease-linear  duration-200"
        />
        <img
          src={img1}
          alt=""
          className="border-4 border-white rounded-tr-[50px] absolute top-0 right-0 w-3/4 z-0 hover:scale-110 transition ease-linear  duration-200"
        />
        <img
          src={img2}
          alt=""
          className="border-4 border-white rounded-tl-[50px] rounded-br-[50px] absolute bottom-[-200px] left-0 z-0 hover:scale-110 transition ease-linear  duration-200"
        />
      </div>
    </div>
  );
};

export default AboutSection;
