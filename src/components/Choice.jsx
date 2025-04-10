import React, { useState } from "react";
import { projectData } from "../assets/assets";

const Choice = () => {
  // const [items, setItems] = useState(projectData);

  return (
    <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:items-center md:text-left">
      {projectData.map((item, index) => (
        <div key={index} className="bg-white max-w-sm rounded overflow-hidden shadow-lg h-full">
          <div className="bg-gray-200 text-gray-700 overflow-hidden">
            <img src={item.image} alt="" />
          </div>
          <div className="p-8">
            <h1 className="text-[22px]">{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div className="text-center mb-8">
            <a
              href={item.link}
              className="bg-blue-500 text-white px-8 py-3 rounded mt-8 text-center"
            >
              Aller vers ce service
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Choice;
