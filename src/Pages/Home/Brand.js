import React from "react";
import img1 from "../../Assets/logo/logo_craft.png";
import img2 from "../../Assets/logo/logo_hyperbest.png";
import img3 from "../../Assets/logo/logo_haus.png";
import img4 from "../../Assets/logo/logo_hype.png";
import img5 from "../../Assets/logo/logo_minimum.png";
import img6 from "../../Assets/logo/logo_power.png";
import img7 from "../../Assets/logo/logo_LOGO.png";
import img8 from "../../Assets/logo/logo_logoipsum.png";

const Brand = () => {
  return (
    <div className="mt-[-163px] mb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:mx-20 mx-4">
        <div className="border lg:p-10 p-6 flex justify-center bg-white rounded-tl-[50px] ">
          <img src={img1} alt="" className="" />
        </div>
        <div className="border lg:p-10 p-6 flex justify-center bg-white rounded-tr-[50px] lg:rounded-tr-[0px]">
          <img src={img2} alt="" />
        </div>
        <div className="border lg:p-10 p-6 flex justify-center bg-white">
          <img src={img3} alt="" />
        </div>
        <div className="border lg:p-10 p-6 flex justify-center bg-white lg:rounded-tr-[50px]">
          <img src={img4} alt="" />
        </div>
        <div className="border lg:p-10 p-6 flex justify-center bg-white lg:rounded-bl-[50px]">
          <img src={img5} alt="" />
        </div>
        <div className="border lg:p-10 p-6 flex justify-center bg-white">
          <img src={img6} alt="" />
        </div>
        <div className="border lg:p-10 p-6 flex justify-center bg-white rounded-bl-[50px] lg:rounded-bl-[0px]">
          <img src={img7} alt="" />
        </div>
        <div className="border lg:p-10 p-6 flex justify-center bg-white rounded-br-[50px]">
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
