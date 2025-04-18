import React from "react";
import Backbtn from "../components/Backbtn";
import Footer from "../components/Footer";
import { planningData } from "../assets/others/planningData";

function Planning() {
  return (
    <div style={{ minHeight: "100vh",backgroundImage: "linear-gradient(to right, #B06BE9, #6B6AE8)" }}>
        <Backbtn />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-purple-700 mb-16">
            Programme Hebdomadaire
          </h1>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500"></div>

            {planningData.map((item, index) => (
              <div
                key={index}
                className={`mb-16 flex justify-${
                  index % 2 === 0 ? "start" : "end"
                } relative`}
              >
                {/* Timeline Card */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    {/* Date Badge */}
                    <div
                      className={`absolute ${
                        index % 2 === 0
                          ? "right-0 translate-x-1/2"
                          : "left-0 -translate-x-1/2"
                      } top-0 z-10`}
                    >
                      <div className="bg-purple-600 text-white text-sm rounded-full py-2 px-4 shadow-md">
                        {item.date}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-purple-700 mb-2 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                    <button className="mt-4 text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200">
                      {item.time}
                    </button>
                  </div>

                  {/* Timeline Dot */}
                  {/* <div
                  className={`absolute ${
                    index % 2 === 0
                      ? "right-0 translate-x-1/2"
                      : "left-0 -translate-x-1/2"
                  } top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-md`}
                ></div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Planning;
