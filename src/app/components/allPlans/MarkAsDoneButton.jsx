"user client";

import { Context } from "@/Context/Context";
import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const MarkAsDoneButton = ({ data }) => {
  const { todayPlan, setTodayPlan } = useContext(Context);

  const handleMarkAsDone = () => {
    toast.success("Workout marked as done!");
    const currentTodayPlan = todayPlan.filter((plan) => plan.id !== data.id);
    setTodayPlan(currentTodayPlan);
  };

  return (
    <div>
      <button
        onClick={handleMarkAsDone}
        className="btn whitespace-nowrap rounded-4xl font-inter font-semibold text-[12px] bg-[#CCFF00] text-black hover:bg-[#e0ff64]"
      >
        <FaCheck />
        Mark as Done
      </button>
    </div>
  );
};

export default MarkAsDoneButton;
