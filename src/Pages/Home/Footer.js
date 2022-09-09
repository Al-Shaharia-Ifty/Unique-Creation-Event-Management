import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-900 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="text-white font-banner my-5">
          <div className="flex justify-center text-orange-500 text-3xl">
            <FiPhoneCall />
          </div>
          <h2 className="mt-2 flex justify-center text-xl">(+65) 6653 8060</h2>
        </div>
        <div className="text-white font-banner my-5">
          <div className="flex justify-center text-orange-500 text-3xl">
            <FiMail />
          </div>
          <h2 className="mt-2 flex justify-center text-xl">
            support@gadgetland.com.bd
          </h2>
        </div>
        <div className="text-white font-banner my-5">
          <div className="flex justify-center text-orange-500 text-3xl">
            <GoLocation />
          </div>
          <h2 className="mt-2 flex justify-center text-xl">
            One Neil Road #0202, Singapur 088804
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-12 pb-8">
        <div>
          <h2 className="text-amber-500 font-banner text-xl flex justify-start">
            About
          </h2>
          <p className="text-white font-line flex justify-start">Out Story</p>
          <p className="text-white font-line flex justify-start">Our Team</p>
          <p className="text-white font-line flex justify-start">
            Out Customer
          </p>
        </div>
        <div>
          <h2 className="text-amber-500 font-banner text-xl flex justify-start">
            Company
          </h2>
          <p className="text-white font-line flex justify-start">
            Online Order
          </p>
          <p className="text-white font-line flex justify-start">
            Corporate Deals
          </p>
          <p className="text-white font-line flex justify-start">RMA</p>
        </div>
        <div>
          <h2 className="text-amber-500 font-banner text-xl flex justify-start">
            Services
          </h2>
          <p className="text-white font-line flex justify-start">PC</p>
          <p className="text-white font-line flex justify-start">Laptop</p>
          <p className="text-white font-line flex justify-start">
            PC and Laptop Services
          </p>
        </div>
        <div>
          <h2 className="text-amber-500 font-banner text-xl flex justify-start">
            Showroom & Service Center
          </h2>
          <p className="text-white font-line flex justify-start">
            Open 10 AM - 8 PM
          </p>
          <p className="text-white font-line flex justify-start">
            Address & Directions
          </p>
          <p className="text-white font-line flex justify-start">
            Membership & Certifications
          </p>
        </div>
      </div>
      <div className="bg-gray-900 p-5 flex justify-center ">
        <div className="text-3xl text-blue-900 px-5">
          <BsFacebook />
        </div>
        <div className="text-3xl text-red-500 px-5">
          <BsYoutube />
        </div>
        <div className="text-3xl text-blue-500 px-5">
          <BsTwitter />
        </div>
        <div className="text-3xl text-amber-500 font-banner px-5">
          <BsLinkedin />
        </div>
      </div>
      <div className="bg-gray-900 flex justify-center ">
        <p>
          <small className="text-white font-line">
            Copyright &#169; {currentYear} Gadget Land. All rights reserved.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
