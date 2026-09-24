"use client"

import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { Context } from "@/Context/Context";

const Navbar = () => {

  const {todayPlan, saveForLater} = useContext(Context);

  return (
    <div className="border-b border-[#222630]">
      <nav className="container mx-auto  flex justify-between items-center py-5">
        <div className="flex gap-2 justify-center items-center">
          <Image src={Logo} width={25} alt="Logo" />
          <h2 className="text-[18px] font-[900]">FITLOG</h2>
        </div>

        <ul className="text-[12px] grid grid-cols-2 gap-4 items-center font-inter">
          <li className="font-semibold text-[#C2F800] bg-[#1A2312] rounded-3xl px-3 py-1">
            <Link href="/">Workouts</Link>
          </li>
          <li className="font-medium text-[#9CA3AF]">
            <Link href="/myplan">My Plan</Link>
          </li>
        </ul>

        <div className="font-inter grid grid-cols-2 gap-4">
          <div className="flex gap-1 items-center justify-center">
            <Link href="/myplan" className="text-[#D1D5DB] text-[12px] font-medium">
              Plan
            </Link>
            <p className="bg-[#C2F800] rounded-full px-1.5 text-[#000000] text-[11px] font-bold">{todayPlan.length}</p>
          </div>

          <div className="flex gap-1 items-center justify-center">
            <Link href="/myplan" className="text-[#9CA3AF] text-[12px] font-medium">
              Saved
            </Link>
            <p className="border border-[#2D313B] rounded-full px-1.5 text-[#D1D5DB] text-[11px] font-medium">{saveForLater.length}</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
