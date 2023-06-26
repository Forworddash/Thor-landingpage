import React from "react";
import "../tailwind.css";

const Support = ({ text, title }) => {
  return (
    <div className="flex flex-col justify-center h-screen" id='support'>
      <h1 className="font-heading text-2xl font-bold">{title}</h1>
      <p>{text}</p>
      <div className="flex items-center lg:flex-row mx-auto justify-center my-12 flex-col">
        {/* product picture */}
        <div className="md:basis-1/3 basis-full md:mx-12 mx-0">
          <img
            className="rounded-lg drop-shadow-lg"
            src="https://www.meat-online.co.za/wp-content/uploads/2016/07/0444-BEEF-BILTONG-500g-e1471957916456.jpg"
            alt="Product"
          />
        </div>
        {/* selection && buy button */}
        <div className="lg:basis-1/3">
          <div className="flex items-center mt-4 space-x-4 justify-center text-black">
            <div className="order-2">
              <select className="ml-4">
                <option value="1">1 Pack</option>
                <option value="2">2 Pack</option>
                <option value="3">3 Pack</option>
              </select>
            </div>
            <div className="drop-shadow-lg order-3">
              <button className="bg-darkPink text-white rounded px-4 py-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
