import React from "react";

import { Playfair_Display } from "next/font/google"; // Example stylish font
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const Header = () => {
  return (
    <header className='relative  bg-[url("/banner1.jpg")] bg-cover bg-no-repeat min-h-[50vh] bg-center h-120'>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex justify-center items-center max-w-md mx-auto mt-10 text-white">
            <Image 
            src={'/g122.png'}
            alt="extra"
            width={650}
            height={650}
            loading="eager"
            className="w-full"
            />
          </div>
        </div>
        <div className=""></div>
      </div>
    </header>
  );
};

export default Header;
