import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="grid grid-cols-4 gap-4 mx-20 py-10">
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
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
            <h2 className="text-4xl font-banner text-center text-amber-500">
              Catering
            </h2>
          </div>
        </Link>
        {/* <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link>
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link>
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link>
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link>
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link>
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link>
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link>
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link>
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link>
        <Link
          to="/services/decoration"
          className="card card-compact bg-base-100 shadow-xl"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-banner text-center">Decoration</h2>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Services;
