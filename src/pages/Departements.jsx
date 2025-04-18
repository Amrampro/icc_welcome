import React, { useState } from "react";
import { images } from "../assets/assets";
import Footer from "../components/Footer";
import Backbtn from "../components/Backbtn";
import { ChevronDown } from "lucide-react";
import { departementsData } from "../assets/others/departementsData";

const Departements = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{ minHeight: "100vh",backgroundImage: "linear-gradient(to right, #B06BE9, #6B6AE8)" }}
    >
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
            <span style={{ color: "rgba(249, 208, 59, 1)" }}>
              Départements{" "}
            </span>{" "}
            de l'église ICC Charleroi
          </h1>
        </div>
      </div>
      <div className="faq max-w-3xl mx-auto py-12 px-4">
        {departementsData.map((dep, index) => (
          <div
            key={index}
            className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{dep.id} 🏅 {dep.name}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-200 ${
                openIndex === index ? "py-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">
                👑 <b>Responsable : </b> {dep.lead}
              </p>
              <p className="text-gray-600">
                ✅ <b>Description : </b> {dep.description}
              </p>
              <p className="text-gray-600">
                🔗 <b>Rejoindre : </b>
              </p>
              <img
                src={dep.qrcode}
                alt={dep.qrcode}
                style={{ width: "50%" }}
              />
            </div>
          </div>
        ))}
        <p className="text-center mt-8 text-gray-600 text-sm">
          Pour toute question, contacter le MDS.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Departements;
