import React, { useState } from "react";
import { images } from "../assets/assets";
import "../assets/styles/Header.css";
import Navbar from "./Navbar";
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };
  const closePopover = () => {
    setIsOpen(false);
  };

  return (
    // Old header component
    <div
      className="min-h-screen mb-8 bg-cover bg-center bg-no-repeat flex items-center w-full overflow-hidden mb-14"
      style={{ backgroundImage: `url(${images.landing})` }}
      id="Header"
    >
      {/* <Navbar /> */}
      <div className="container text-center mx-auto py-4 px-6md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Bienvenu(e) à Impact Centre Chrétien -{" "}
          <span className="text-green" style={{ color: "#DA3D35" }}>
            Charleroi
          </span>
        </h2>
        <p className="text-3xl">
          <i>Le centre de refuge et centre de témoignages</i>
        </p>
        <div className="space-x-6 mt-16">
          <a
            href="#project"
            onClick={togglePopover}
            className="border border-white bg-blue-500 px-8 py-3 rounded hover:bg-white hover:text-black flex items-center gap-2"
          >
            <FaRegPlayCircle /> <span>Vidéo de présentation</span>
          </a>

          {/* <a href="#contact" className="bg-blue-500 px-8 py-3 rounded">
            Contact Us
          </a> */}
        </div>
        <div className="items-center justify-center flex pointer-events-none">
          <img src={images.swipeup} alt="" />
        </div>
      </div>
      <div>
        <div
          id="my-popover"
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex z-50 justify-center items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button
            onClick={closePopover}
            className="absolute top-2 left-2 text-white text-center p-2 rounded"
            style={{ backgroundColor: "red", fontWeight: "bold" }}
          >
            <p className="flex text-1xl items-center">
              <IoIosCloseCircle className="text-4xl" /> <span>Fermer</span>
            </p>
          </button>
          <iframe
            className="w-full h-screen"
            src="https://www.youtube.com/embed/8Yranv37Cuc?si=9hmOX59tz557CUCL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Header;
