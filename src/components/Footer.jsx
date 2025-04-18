import React from "react";
import { images } from "../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bottom-0 mt-6 left-0 w-full z-10 bg-gray-800">
      <div className="container mx-auto flex gap-8 items-center py-4 px-6 md:px-20 lg:px-32">
        <p className="text-white">
          © Impact Centre Chrétien - Charleroi {currentYear} <span className="mx-2">•</span> Tous droits réservés 
        </p>
      </div>
    </div>
  );
};

export default Footer;
