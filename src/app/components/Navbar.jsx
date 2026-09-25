"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { Context } from "@/Context/Context";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { todayPlan, saveForLater } = useContext(Context);

  const [clicked, setClicked] = useState("workouts");
  const [sideMenu, setSideMenu] = useState(false);
  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <div className="border-b border-[#222630]">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center py-5 md:md:px-10 lg:px-0">
          <Link
            className="ml-5 sm:ml-2 md:ml-0 lg:ml-0 flex gap-2 justify-center items-center"
            href="/"
          >
            <Image
              src={Logo}
              alt="Logo"
              className="w-4 sm:w-4.5 md:w-6 lg:w-6"
            />
            <h2 className="text-12px] md:text-[18px] lg:text-[18px] font-[900]">
              FITLOG
            </h2>
          </Link>

          <ul className="hidden md:block lg:block text-[12px] md:grid lg:flex grid-cols-2 gap-4 items-center font-inter">
            <li onClick={() => setClicked("workouts")}>
              <Link
                className={`px-3 py-1 font-semibold hover:bg-[#15171D] rounded-3xl ${
                  clicked === "workouts"
                    ? "text-[#C2F800] bg-[#1A2312]"
                    : "text-[#9CA3AF]"
                }`}
                href="/"
              >
                Workouts
              </Link>
            </li>
            <li onClick={() => setClicked("myplan")}>
              <Link
                className={`px-3 py-1 font-semibold hover:bg-[#15171D] rounded-3xl ${
                  clicked === "myplan"
                    ? "text-[#C2F800] bg-[#1A2312]"
                    : "text-[#9CA3AF]"
                }`}
                href="/myplan"
              >
                My Plan
              </Link>
            </li>
          </ul>

          <div className="font-inter grid grid-cols-3 gap-2 items-center md:grid-cols-2 lg:grid-cols-2 sm:-mr-8 md:-mr-0 lg:-mr-0">
            <div className="flex gap-1 items-center justify-center sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-2 lg:py-1 rounded-[8px] hover:bg-[#15171D] cursor-pointer">
              <Link
                href="/myplan"
                className="text-[#D1D5DB] text-[12px] font-medium"
              >
                Plan
              </Link>
              <p className="bg-[#C2F800] rounded-full px-1.5 text-[#000000] text-[11px] font-bold">
                {todayPlan.length}
              </p>
            </div>

            <div className="flex gap-1 items-center justify-center sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-2 lg:py-1 rounded-[8px] hover:bg-[#15171D] cursor-pointer">
              <Link
                href="/myplan"
                className="text-[#9CA3AF] text-[12px] font-medium"
              >
                Saved
              </Link>
              <p className="border border-[#2D313B] rounded-full px-1.5 text-[#D1D5DB] text-[11px] font-medium">
                {saveForLater.length}
              </p>
            </div>
            <div className="relative md:hidden lg:hidden px-2 cursor-pointer">
              <GiHamburgerMenu
                onClick={handleSideMenu}
                className="text-2xl text-[#C2F800]"
              />
            </div>
          </div>
        </nav>

        {sideMenu && (
          <div className="absolute top-17 right-2 sm:right-16 bg-[#0e0e0f] rounded-2xl md:hidden lg:hidden">
            <ul className="text-[12px] text-right font-inter p-3 space-y-3">
              <li onClick={() => setClicked("workouts")}>
                <Link
                  className={`px-3 py-1 font-semibold hover:bg-[#15171D] rounded-3xl ${
                    clicked === "workouts"
                      ? "text-[#C2F800] bg-[#1A2312]"
                      : "text-[#9CA3AF]"
                  }`}
                  href="/"
                >
                  Workouts
                </Link>
              </li>
              <li onClick={() => setClicked("myplan")}>
                <Link
                  className={`px-3 py-1 font-semibold hover:bg-[#15171D] rounded-3xl ${
                    clicked === "myplan"
                      ? "text-[#C2F800] bg-[#1A2312]"
                      : "text-[#9CA3AF]"
                  }`}
                  href="/myplan"
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
