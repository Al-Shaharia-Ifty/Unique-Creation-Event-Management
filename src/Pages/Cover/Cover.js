import React from "react";
import { Link } from "react-router-dom";
import holdi from "../../Assets/resize/program_we_cover/haldi_night/HN (1).jpg";
import wedd from "../../Assets/resize/program_we_cover/wedding/WD (1).jpg";
import rece from "../../Assets/resize/program_we_cover/reception/Rcp (1).jpg";
import anni from "../../Assets/resize/program_we_cover/anniversary/1 (1).jpg";
import birth from "../../Assets/resize/program_we_cover/birthday/BDAY (14).jpg";

const Cover = () => {
  return (
    <div className="bg-gray-900 h-full min-h-screen">
      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4 lg:mx-20 mx-10 py-10">
        <Link
          to="/program-we-cover/haldi-night"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src={holdi} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Haldi Night
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/mehedi-night"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-xl font-banner text-center text-amber-500">
              Mehedi-Night
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/wedding"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src={wedd} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Wedding
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/reception"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src={rece} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Reception
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/anniversary"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src={anni} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Anniversary
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/corporate"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Corporate
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/birthday"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src={birth} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              birthday
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/baby-shower"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-xl font-banner text-center text-amber-500">
              Baby Shower
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/sunnate-khatna"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-3xl text-xl font-banner text-center text-amber-500">
              Sunnate Khatna
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/home-decor"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Home Decor
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/occasional-parties"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-3xl text-2xl font-banner text-center text-amber-500">
              Occasional Parties
            </h2>
          </div>
        </Link>
        <Link
          to="/program-we-cover/govt-project"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Govt Project
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cover;
