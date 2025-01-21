import React from "react";
import Backbtn from "../components/Backbtn";
import { images } from "../assets/assets";

const Cellules = () => {
  return (
    <div
      className="min-h-screen mb-8 bg-cover bg-center bg-no-repeat h-screen text-white text-center flex flex-col items-center justify-center p-2"
      style={{ backgroundImage: `url(${images.cdm})` }}
    >
      <Backbtn />
      <div>
        <img
          className="w-40 h-40 p-4"
          style={{background: "rgba(249, 208, 59, .5)", borderRadius: "100px" }}
          src={images.icc}
          alt=""
        />
      </div>
      <p style={{ marginLeft: "-50%" }}>Rejoins les</p>
      <h1 className="text-5xl sm:text-6xl md:text-[60px] inline-block font-semibold">
        <span style={{ color: "#F9D03B" }}>Cellules</span> de maison
      </h1>
      <p className="text-2xl mt-8">
        Les <b>cellules de maison</b> sont des cellules de l'église{" "}
        <span style={{ color: "#F9D03B" }}>Impact Centre Chrétien</span>
      </p>
      <p className="text-2xl mt-8">
        Les membres des cellules se reunnissent tous les{" "}
        <b>Jeudis 19h00 - 20h15</b> dans les maisons hôtes
      </p>
      <p className="text-2xl mt-8">
        Recherchez et rejoignez une cellule de maison près de chez vous !
      </p>
      <a className="bg-blue-500 px-8 py-3 rounded mt-8" href="/cdm">
        Rejoindre ici
      </a>
    </div>
  );
};

export default Cellules;
