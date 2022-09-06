import React from "react";
import banner1 from "../../Assets/images/banner_couple.jpg";
import bg from "../../Assets/logo/back_sec1.jpg";
import bg1 from "../../Assets/logo/banner_overlay.png";
import bannerRing from "../../Assets/logo/Banner_ring.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          background: `url(${bg1})`,
          backgroundSize: "cover",
        }}
        className="hero"
      >
        <div className="hero-content flex-col lg:flex-row w-full">
          <img
            src={banner1}
            alt=""
            className="border-4 border-white rounded-tl-[100px] rounded-br-[100px] hover:scale-110 transition ease-linear  duration-200 shadow-2xl lg:my-28 lg:ml-20 lg:w-[670px] mt-20 lg:mr-20 "
          />
          <div className="">
            <img
              src={bannerRing}
              alt=""
              className="mt-10 hover:scale-110 transition ease-linear duration-200"
            />
            <h2 className="lg:text-6xl text-4xl mt-6 font-banner">
              Perfect Weddings Made Easy!
            </h2>
            <p className="text-xl mt-6 font-line lg:w-3/4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
              tempor incididunt
            </p>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
