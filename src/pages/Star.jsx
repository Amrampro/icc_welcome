import React from "react";
import Backbtn from "../components/Backbtn";

const Star = () => {
  return (
    <div>
      <Backbtn />
      <iframe
        className="w-full h-screen mt-16"
        src="https://impactcentrechretien.elvanto.eu/form/c6f34254-cce7-4b4b-995c-f07eb6a0e124/"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Star;
