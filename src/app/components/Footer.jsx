import Image from "next/image";
import React from "react";
import Logo from "../../assets/footerlogo.png";

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <div className="items-center border-t border-[#222630] mt-15 py-10">
      <div className="container mx-auto flex justify-between ">
        <div className="flex gap-3 items-center">
        <Image src={Logo} width={20} height={15} alt="Logo"/>
        <h2 className="text-[14px] font-bold">FITLOG</h2>
      </div>

        <p className="font-inter text-[#6B7280] text-[12px]">© {year} FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </div>
  );
};

export default Footer;
