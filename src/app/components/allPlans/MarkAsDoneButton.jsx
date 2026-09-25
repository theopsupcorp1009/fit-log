"user client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const MarkAsDoneButton = () => {
  const [marked, setMarked] = useState(false);

 const handleMarkAsDone = () => {
  if (marked) {
    setMarked(false);
    toast.info("Workout marked as not done");
  } else {
    setMarked(true);
    toast.success("Workout marked as done!");
  }
};

  return (
    <div>
      <button
        onClick={handleMarkAsDone}
        className={`btn whitespace-nowrap rounded-4xl font-inter font-semibold text-[12px]
        ${
          marked
            ? "bg-transparent border-[#374151] text-[#D1D5DB] hover:bg-[#9cb3f720]"
            : "bg-[#CCFF00] text-black hover:bg-[#e0ff64]"
        }
      `}
      >
        <FaCheck />
        {marked ? "Completed" : " Mark as Done"}
      </button>
    </div>
  );
};

export default MarkAsDoneButton;
