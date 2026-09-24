"use client"

import { Context } from '@/Context/Context';
import React, { useContext } from 'react';
import { IoMdClose } from "react-icons/io";

const RemoveButton = ({activeTab, data}) => {

    const {todayPlan, setTodayPlan, saveForLater, setSaveForLater} = useContext(Context);

    const handleRemoveData = () => {
        if(activeTab === "today"){
            const currentTodayPlan = todayPlan.filter(plan=>plan.id!==data.id);
            setTodayPlan(currentTodayPlan);
        }else{
            const currentSaved = saveForLater.filter(saved=>saved.id!==data.id);
            setSaveForLater(currentSaved);
        }
    }

    return (
        <div>
            <IoMdClose onClick={handleRemoveData} className="w-[28px] h-[28px] text-[#6B7280] cursor-pointer" />
        </div>
    );
};

export default RemoveButton;