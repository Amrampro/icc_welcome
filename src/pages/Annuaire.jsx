import React from "react";
import Backbtn from "../components/Backbtn";
import { images } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";

const Annuaire = () => {
  return (
    <div
      className="w-full h-screen text-white text-center flex flex-col items-center justify-center p-2"
      style={{
        background:
          "linear-gradient(45deg, rgb(0, 195, 255) 0%, rgba(142, 156, 196, 1) 50%, rgb(128, 128, 128) 100%)",
      }}
    >
      <Backbtn />
      <img
        className="w-40 h-40"
        style={{ borderRadius: "100px" }}
        src={images.logo}
        alt=""
      />
      <h1 className="text-5xl sm:text-6xl md:text-[60px] inline-block font-semibold pt-20">
        Annuaire des <span style={{color: "#460396"}}>professions</span> de l'église
      </h1>
      <p className="text-2xl flex items-center justify-center gap-2 mt-8">
        <FaArrowRight />
        <span>
          Trouvez un ou plusieurs professionnels au sein de votre église locale
          et entrez directement en contact avec eux
        </span>
      </p>
      <p className="text-2xl flex items-center justify-center gap-2 mt-8">
        <FaArrowRight />
        <span>
          Inscrivez-vous sur la plateforme pour être visible de tous
        </span>
      </p>
      <a className="bg-blue-500 px-8 py-3 rounded mt-8" href="">Commencer ici</a>
    </div>
  );
};

export default Annuaire;
