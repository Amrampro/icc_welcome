import React from "react";
import { images } from "../../assets/assets";
import { cellulesData } from "../../assets/others/cdm";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import Footer from "../../components/Footer";
import Backbtn from "../../components/Backbtn";

const CellulesList = () => {
  return (
    <div>
        <Backbtn />
      <div>
        <div
          style={{ background: "rgba(31, 31, 31, .6)" }}
          className="container text-white mx-auto flex gap-4 items-center p-8 m-8 md:px-20 lg:px-32 bg-black rounded"
        >
          <img
            className="p-2"
            src={images.icc}
            alt=""
            style={{
              background: "rgba(249, 208, 59, .5)",
              borderRadius: "100px",
              width: "100px",
              height: "100px",
            }}
          />
          <h1 className="text-3xl sm:text-4xl md:text-[52px] inline-block max-w-3xl font-semibold">
            <span style={{ color: "rgba(249, 208, 59, 1)" }}>Cellules </span> de
            maison
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:items-center md:text-left">
        {cellulesData.map((item, index) => (
          <div
            key={index}
            className="bg-white max-w-sm rounded overflow-hidden shadow-lg h-full"
          >
            <div
              className="bg-white max-w-sm rounded overflow-hidden shadow-lg h-360 bg-cover bg-center bg-no-repeat flex items-center text-center justify-center text-white"
              style={{
                height: "160px",
                backgroundImage: `url(${images.cellulepicture})`,
              }}
            >
              <h1 className="text-[42px] font-semibold">{item.quater}</h1>
            </div>
            <div className="text-[20px]">
              <div className="p-4 grid grid-cols-2">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <span>{item.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{item.day}</span>
                </p>
              </div>
              <div className="p-4 grid grid-cols-2">
                <p className="flex items-center gap-2">
                  <FaClock />
                  <span>{item.hour}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FcManager />
                  <span>{item.responsable}</span>
                </p>
              </div>
              <div className="p-8 text-white">
                <a
                  href="#"
                  className="flex text-center items-center justify-center gap-2 bg-blue-500 px-8 py-3 rounded"
                >
                  <FaPhoneAlt />
                  <span>{item.tel}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CellulesList;
