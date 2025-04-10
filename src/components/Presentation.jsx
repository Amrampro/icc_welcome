import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { images } from "../assets/assets";
import "../assets/styles/Presentation.css";

const Presentation = () => {
  const allItems = [
    {
      name: "Item 1",
      des: "Lorem Ipsum isudhsui fiusdfyiusdf sdfuisydifysd fisduyfis df",
      background: images.hall1,
    },
    {
      name: "Item 2",
      des: "Lorem Ipsum isudhsui fiusdfyiusdf sdfuisydifysd fisduyfis df",
      background: images.hall2,
    },
    {
      name: "Item 3",
      des: "Lorem Ipsum isudhsui fiusdfyiusdf sdfuisydifysd fisduyfis df",
      background: images.hall3,
    },
  ];

  const [items, setItems] = useState(allItems);

  const handlenext = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handleprev = () => {
    setItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, prevItems.length - 1),
    ]);
  };

  return (
    <div>
      <div className="container">
        <div className="slide">
          {items.map((item, index) => (
            <div
              className="item"
              key={index}
              style={{ backgroundImage: `url(${item.background})` }}
            >
              <div className="content">
                <h2 className="name">{item.name}</h2>
                <p className="description">{item.des}</p>
                <button>Let's go</button>
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <button onClick={handleprev} className="prev">
            <FaArrowLeftLong />
          </button>
          <button onClick={handlenext} className="next">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
