import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const navlinks = <>
    <li className="hover:text-pink-600"><Link href={'/'}>Home</Link></li>
    <li className="hover:text-pink-600"><Link href={'/shop'}>Shop</Link></li>
    <li className="hover:text-pink-600"><Link href={'/agegroup'}>Age Groups</Link></li>
    <li className="hover:text-pink-600"><Link href={'/categories'}>Categories</Link></li>
    <li className="hover:text-pink-600"><Link href={'/brands'}>Brands</Link></li>
    <li className="hover:text-pink-600"><Link href={'/deals'}>Deals</Link></li>
    <li className="hover:text-pink-600"><Link href={'/about'}>About</Link></li>
    </>
  return (
    <nav className="py-4">
      <div className="flex justify-between items-center container mx-auto max-w-6xl">
        <div className="flex items-center">
          <Image
            src="/toy.png"
            alt="logo"
            width={120}
            height={120}
            className="w-full h-15"
            loading="eager"
          />
        </div>
        <div className="flex justify-between w-110">
          <Input placeholder="Search for toys, brands, or age..." />
          <div className="p-2 rounded-full bg-pink-600">
            <Search size={18} />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="flex flex-col justify-center items-center text-[16px] font-semibold hover:text-pink-600 cursor-pointer">
            <span>
              <UserRound size={35} />
            </span>
            Account
          </p>
          <p className="flex flex-col justify-center items-center text-[16px] font-semibold hover:text-pink-600 cursor-pointer">
            <span>
              <Heart size={35} />
            </span>
            Wishlist
          </p>
          <p className="flex flex-col justify-center items-center text-[16px] font-semibold hover:text-pink-600 cursor-pointer">
            <span>
              <ShoppingCart size={35} />
            </span>
            Card
          </p>
        </div>
      </div>
      <ul className="flex justify-center items-center gap-5 text-lg font-bold">
        {navlinks}
      </ul>
    </nav>
  );
};

export default Navbar;
