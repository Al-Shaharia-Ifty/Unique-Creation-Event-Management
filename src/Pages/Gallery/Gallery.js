import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="bg-gray-900 h-full min-h-screen">
      <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4 lg:mx-20 mx-10 py-10">
        <Link
          to="/gallery/stage"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Stage
            </h2>
          </div>
        </Link>
        <Link
          to="/gallery/photo-booth"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl md:text-2xl text-xl font-banner text-center text-amber-500">
              Photo Booth
            </h2>
          </div>
        </Link>
        <Link
          to="/gallery/head-table"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Head Table
            </h2>
          </div>
        </Link>
        <Link
          to="/gallery/walkway"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Walkway
            </h2>
          </div>
        </Link>
        <Link
          to="/gallery/tent"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Tent
            </h2>
          </div>
        </Link>
        <Link
          to="/gallery/entry-gate"
          className="card card-compact border-2 shadow-xl bg-gray-900"
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="lg:text-4xl text-2xl font-banner text-center text-amber-500">
              Entry Gate
            </h2>
          </div>
        </Link>
        <Link
          to="/gallery/photography"
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
      </div>
    </div>
  );
};

export default Gallery;
