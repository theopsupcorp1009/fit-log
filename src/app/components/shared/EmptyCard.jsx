import Link from 'next/link';
import React from 'react';

const EmptyCard = () => {
    return (
        <div className="grid justify-center items-center text-center p-25 border-2 border-[#111317] rounded-[8px] mt-8 space-y-5">
        <div className="max-w-[280px] space-y-2">
          <h2 className="font-bold text-[20px]">NOTHING HERE YET</h2>
          <p className="font-inter w-50 md:w-auto lg:w-auto text-[12px] text-[#A1A1AA]">
            Browse the library and add a lift to get today moving.
          </p>
        </div>
        <button className="btn font-inter font-semibold text-[#000000] text-[12px] bg-[#CCFF00] rounded-3xl w-40 mx-auto hover:bg-[#e0ff64]">
          <Link href="/">Go to workouts</Link>
        </button>
      </div>
    );
};

export default EmptyCard;