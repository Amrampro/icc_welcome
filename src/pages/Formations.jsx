import React from "react";
import Backbtn from "../components/Backbtn";
import Footer from "../components/Footer";

const Formations = () => {
  return (
    <div>
      <Backbtn />
      <iframe
        className="w-full h-screen mt-16"
        src="https://forms.gle/yBiJqdwFMT9g7TC39"
        title="Formations PCNC"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        <Footer />
    </div>
  );
};

export default Formations;
