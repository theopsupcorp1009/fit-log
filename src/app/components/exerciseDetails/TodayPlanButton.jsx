"use client";

import { Context } from "@/Context/Context";
import React, { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

const TodayPlanButton = ({ data }) => {
  const { todayPlan, setTodayPlan } = useContext(Context);


  const handleTodayPlan = () => {
    const added = todayPlan.some((plan) => plan.id === data.id);
    if (added) {
      toast.error("Already Added");
      return;
    }
    setTodayPlan([...todayPlan, data]);
    toast.success("Added to today's plan");
  };

  return (
    <div onClick={()=>{
      todayPlan.length>=5 && toast.warning("Maxium plans added for today")
    }}>
      <button
        onClick={handleTodayPlan}
        disabled={todayPlan.length>=5}
        className="btn rounded-[10px] font-semibold bg-[#CCFF00] text-[#000000] hover:bg-[#e0ff64] disabled:opacity-50"
      >
        <LuCalendarPlus2 /> Add to today's plan
      </button>
    </div>
  );
};

export default TodayPlanButton;
