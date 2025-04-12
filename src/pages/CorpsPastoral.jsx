import React from "react";
import Backbtn from "../components/Backbtn";
import Footer from "../components/Footer";
import { images } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { corpsPastoralData } from "../assets/others/corpsPastoralData";
import { Link } from "react-router-dom";

const CorpsPastoral = () => {
  return (
    <div>
      <div
        className="w-full text-white text-center flex flex-col items-center justify-center p-20 mb-10"
        style={{
          background:
            "linear-gradient(45deg, rgb(0, 195, 255) 0%, rgba(142, 156, 196, 1) 50%, rgb(128, 128, 128) 100%)",
        }}
      >
        <Backbtn />
        <h1 className="text-5xl sm:text-6xl md:text-[60px] inline-block font-semibold pt-20">
          Corps<span style={{ color: "#460396" }}> pastoral</span> de notre
          église
        </h1>
        <p className="text-2xl flex items-center justify-center gap-2 mt-8">
          <span>Les piliers placés devant nous par Dieu</span>
        </p>
      </div>
      <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:items-center md:text-left">
        {corpsPastoralData.map((item, index) => (
          <div
            key={index}
            className="bg-white max-w-sm rounded overflow-hidden shadow-lg h-full"
          >
            <div
              className="bg-gray-200 text-gray-700 overflow-hidden"
              style={{ maxHeight: "400px", width: "100%" }}
            >
              <img src={item.image} alt="" />
            </div>
            <div className="p-8">
              <h1 className="text-[22px]">
                {item.title} {item.name}
              </h1>
              <i>
                <h2 className="text-[18px]" style={{ color: "#460396" }}>
                  {item.post}
                </h2>
              </i>
              <h3 className="text-[16px]">
                Profession : {item.life_occupation}
              </h3>
            </div>
            <div className="text-center mb-8">
              <Link
                to={`/corp-pastoral/${item.id}`}
                className="bg-blue-500 text-white px-8 py-3 rounded mt-8 text-center"
              >
                Plus d'infos <FaArrowRight className="inline-block" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CorpsPastoral;
