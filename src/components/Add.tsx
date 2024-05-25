"use client";
import React, { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="">
        <div className=""></div>
        <div className="">
          Only <span className="text-orange-500">4 items</span> left! {"Don't"}{" "}
          miss it
        </div>
      </div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-[#f35c7a] text-[#f35c7a] py-2 px-4 hover:bg-[#f35c7a] hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-pink-200">
        Add to Cart
      </button>
    </div>
  );
};

export default Add;
