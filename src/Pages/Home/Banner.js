import React from "react";
import banner1 from "../../Assets/images/banner_couple.jpg";
import bg from "../../Assets/logo/banner.jpg";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex p-32">
        <div className="">
          <img
            src={banner1}
            alt=""
            className="border-4 border-white rounded-tl-[100px]"
          />
        </div>
        <div>
          <h2>Perfect Weddings Made Easy!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm
            tempor incididunt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
