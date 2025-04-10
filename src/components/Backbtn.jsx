import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Backbtn = () => {
  return (
    <div>
      <a
        href="/"
        className="absolute top-2 right-2 text-white text-center p-2 rounded"
        style={{ backgroundColor: "red", fontWeight: "bold" }}
      >
        <p className="flex text-1xl items-center">
          <IoIosCloseCircle className="text-4xl" /> <span>Fermer</span>
        </p>
      </a>
    </div>
  );
};

export default Backbtn;
