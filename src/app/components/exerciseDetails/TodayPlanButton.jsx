import React from 'react';
import { LuCalendarPlus2 } from "react-icons/lu";

const TodayPlanButton = ({data}) => {
    return (
        <div>
            <button className="btn rounded-[10px] font-semibold bg-[#CCFF00] text-[#000000]"><LuCalendarPlus2/> Add to today's plan</button>
        </div>
    );
};

export default TodayPlanButton;