import React from "react";
import bg from "../../Assets/logo/lines_section4.jpg";
import ent from "../../Assets/logo/sec6_guitar.png";
import din from "../../Assets/logo/dinning.png";
import dec from "../../Assets/logo/decor.png";
import swa from "../../Assets/logo/swaggifting.png";

const Together = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="lg:mt-20 py-20 lg:mx-20 lg:flex block px-10">
        <div className="lg:w-1/2 w-full grid grid-cols-2 h">
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
        <div></div>
      </div>
    </div>
  );
};

export default Together;
