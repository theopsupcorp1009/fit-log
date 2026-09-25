import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="container mx-auto text-center py-45 space-y-3">
      <h1 className="text-[#C2F800] text-3xl font-bold">404 Page Not Found</h1>

      <p className="font-inter font-semibold text-2xl text-[#9CA3AF]">The page you are looking for does not exist or may have been moved.</p>

      <button className="btn bg-[#C2F800] text-[#000000] font-inter font-bold">
        <Link href="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default notFound;
