import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <div className="max-w-6xl mx-auto container py-5">
      <div className="flex items-center justify-evenly gap-10">
        <div className=" flex flex-col items-center justify-center border shadow-md border-solid ">
          <Image
            src={"/stuffed_animals.jpg"}
            alt="extra"
            width={80}
            height={80}
            loading="eager"
            className="w-full h-30"
          />
          <p className="text-sm font-semibold">Stuffed Animals</p>
        </div>
        <div className=" flex flex-col items-center justify-center border shadow-md border-solid ">
          <Image
            src={"/vehicles.jpg"}
            alt="extra"
            width={80}
            height={80}
            loading="eager"
            className="w-full"
          />
          <p className="text-sm font-semibold">Vehicles</p>
        </div>
        <div className=" flex flex-col items-center justify-center border shadow-md border-solid ">
          <Image
            src={"/bulding_block.jpg"}
            alt="extra"
            width={80}
            height={80}
            loading="eager"
            className="w-full"
          />
          <p className="text-sm font-semibold">Building Toys</p>
        </div>
        <div className=" flex flex-col items-center justify-center border shadow-md border-solid ">
          <Image
            src={"/art_craft.jpg"}
            alt="extra"
            width={80}
            height={80}
            loading="eager"
            className="w-full"
          />
          <p className="text-sm font-semibold">Art & Crafts</p>
        </div>
        <div className=" flex flex-col items-center justify-center border shadow-md border-solid ">
          <Image
            src={"/puzzle.jpg"}
            alt="extra"
            width={80}
            height={80}
            loading="eager"
            className="w-full"
          />
          <p className="text-sm font-semibold">Puzzle & Games</p>
        </div>
        <div className=" flex flex-col items-center justify-center border shadow-md border-solid ">
          <Image
            src={"/stem_toy.jpg"}
            alt="extra"
            width={80}
            height={80}
            loading="eager"
            className="w-full"
          />
          <p className="text-sm font-semibold">STEM Toys</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
