import React from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/resize/services/decoration/HN (2).jpg";

const Services = () => {
  return (
    <div className="bg-gray-900 h-full min-h-screen">
      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4 lg:mx-20 mx-10 py-10">
        <Link
          to="/services/decoration"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Decoration
            </h2>
          </div>
        </Link>
        <Link
          to="/services/catering"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Catering
            </h2>
          </div>
        </Link>
        <Link
          to="/services/photography"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Photography
            </h2>
          </div>
        </Link>
        <Link
          to="/services/lighting"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Lighting
            </h2>
          </div>
        </Link>
        <Link
          to="/services/led-system"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-xl font-banner text-center text-amber-500">
              LED System
            </h2>
          </div>
        </Link>
        <Link
          to="/services/sound-dj"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Sound & DJ
            </h2>
          </div>
        </Link>
        <Link
          to="/services/appetizer"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Appetizer
            </h2>
          </div>
        </Link>
        <Link
          to="/services/logistic-support"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-3xl text-xl font-banner text-center text-amber-500">
              Logistic Support
            </h2>
          </div>
        </Link>
        <Link
          to="/services/entertainment"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Entertainment
            </h2>
          </div>
        </Link>
        <Link
          to="/services/kids-play-zone"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-xl font-banner text-center text-amber-500">
              Kids Play Zone
            </h2>
          </div>
        </Link>
        <Link
          to="/services/vence-arrangement"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-2xl text-xl font-banner text-center text-amber-500">
              Vence Arrangement
            </h2>
          </div>
        </Link>
        <Link
          to="/services/studio-rent"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Studio Rent
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
