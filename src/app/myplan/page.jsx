"use client";

import React, { useEffect, useState } from "react";
import { Context } from "@/Context/Context";
import { useContext } from "react";
import TodayPlanCard from "../components/shared/TodayPlanCard";
import SavedForLaterCard from "../components/shared/SavedForLaterCard";
import EmptyCard from "../components/shared/EmptyCard";

const page = () => {
  const { todayPlan, saveForLater } = useContext(Context);
  const [activeTab, setActiveTab] = useState("today");
  const [todayPlanLoading, setTodayPlanLoading] = useState(true);
  const [saveforLaterLoading, setSaveForLaterLoading] = useState(true);

  useEffect(() => {
    if (todayPlan.length > 0) {
      const timer = setTimeout(() => {
        setTodayPlanLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setTodayPlanLoading(false);
    }
  }, [todayPlan]);

  useEffect(() => {
    if (saveForLater.length > 0) {
      const timer = setTimeout(() => {
        setSaveForLaterLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setSaveForLaterLoading(false);
    }
  }, [saveForLater]);

  const currentPlan = activeTab === "today" ? todayPlan : saveForLater;
  const totalExercises = currentPlan.length;
  const totalDuration = currentPlan.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );
  const totalCaloriesBurned = currentPlan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  const [todaySortBy, setTodaySortBy] = useState("duration");
  const [savedSortBy, setSavedSortBy] = useState("duration");

  const sortMyPlan = (plans, sortBy) => {
    const sortedPlans = [...plans];

    if (sortBy === "duration") {
      sortedPlans.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedPlans.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedPlans.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlans;
  };

  const sortedTodayPlan = sortMyPlan(todayPlan, todaySortBy);
  const sortedSaveForLater = sortMyPlan(saveForLater, savedSortBy);

  return (
    <div className="mx-auto w-full max-w-[1400px] mt-3 md:mt-15 lg:mt-15">
      <div className="mx-5 md:mx-0 lg:mx-0">
        <div className="space-y-2">
          <h2 className="text-[30px] font-bold">MY PLAN</h2>
          <p className="font-inter text-[14px] text-[#8A92A0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mt-3 md:mt-6 lg:mt-6 grid grid-cols-1 gap-2 md:gap-0 lg:gap-0 items-center justify-center md:grid-cols-3 lg:grid-cols-3 md:py-6 md:px-6 lg:py-6 lg:px-6 md:bg-[#13161D] lg:bg-[#13161D] md:border-2 md:border-[#232732] md:rounded-2xl lg:border-2 lg:border-[#232732] lg:rounded-2xl">
        <div className="bg-[#13161D] px-3 py-4 md:px-0 md:py-0 lg:px-0 lg:py-0  rounded-2xl md:bg-none lg:bg-none">
            <p className="font-inter text-[12px] text-[#8A92A0]">Exercises</p>
            <span className="font-bold text-[24px] md:text-[36px] lg:text-[36px] text-[#CCFF00]">
              {totalExercises}
            </span>
          </div>
          <div className="bg-[#13161D] rounded-2xl px-3 py-4 md:px-0 md:py-0 lg:px-0 lg:py-0 md:bg-none lg:bg-none md:border-l md:pl-8 md:border-[#232732] lg:border-l lg:pl-8 lg:border-[#232732]">
            <p className="font-inter text-[12px] text-[#8A92A0]">Minutes</p>
            <span className="font-bold text-[24px] md:text-[36px] lg:text-[36px]">{totalDuration}</span>
          </div>
          <div className="bg-[#13161D] rounded-2xl px-3 py-4 md:px-0 md:py-0 lg:px-0 lg:py-0 md:bg-none lg:bg-none md:border-l md:pl-8 md:border-[#232732] lg:border-l lg:pl-8 lg:border-[#232732]">
            <p className="font-inter text-[12px] text-[#8A92A0]">Calories</p>
            <span className="font-bold text-[24px] md:text-[36px] lg:text-[36px]]">{totalCaloriesBurned}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-0 lg:gap-0 md:flex-row lg:flex-row md:justify-between lg:justify-between md:items-center lg:items-center mt-4 md:mt-8 lg:mt-8">
          <div className="flex items-center font-inter md:w-60 lg:w-60 rounded-[12px] text-[12px] bg-[#1B1F27] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`w-1/2 px-3 py-2 text-[#8A92A0] rounded-[12px] cursor-pointer hover:bg-[#15171d77] ${
                activeTab === "today" &&
                "border-2 border-[#2B303D] bg-[#000000] text-[#CCFF00] font-semibold"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`w-1/2 px-3 py-2 text-[#8A92A0] rounded-[12px] cursor-pointer hover:bg-[#15171d77] ${
                activeTab === "saved" &&
                "border-2 border-[#2B303D] bg-[#000000] text-[#CCFF00] font-semibold"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex gap-3 justify-center md:justify-between lg:justify-between items-center border-2 border-[#2B303D] rounded-2xl md:border-none lg:border-none p-3 md:p-0 lg:p-0">
            <p className="font-inter text-[12px] text-[#8A92A0] shrink-0">
              Sort By
            </p>
            <select
              value={activeTab === "today" ? todaySortBy : savedSortBy}
              onChange={(e) => {
                if (activeTab === "today") {
                  setTodaySortBy(e.target.value);
                } else {
                  setSavedSortBy(e.target.value);
                }
              }}
              className="cursor-pointer select select-ghost bg-[#13161D] border-[#232732] rounded-[9px] font-inter text-[12px] hover:bg-[#15171d77]"
            >
              <option value={"duration"}>Duration</option>
              <option value="calories">Calories</option>
              <option value={"rating"}>Rating</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          {activeTab === "today" ? (
            todayPlanLoading ? (
              <h2 className="font-inter text-center text-[18px] md:text-[24px] lg:text-[24px] text-[#CCFF00] font-bold flex justify-center items-center px-0 py-25 md:p-25 lg:p-25">
                Loading workouts…
              </h2>
            ) : sortedTodayPlan.length > 0 ? (
              <div className="grid gap-4">
                {sortedTodayPlan.map((plan) => (
                  <TodayPlanCard
                    activeTab={activeTab}
                    key={plan.id}
                    data={plan}
                  />
                ))}
              </div>
            ) : (
              <EmptyCard />
            )
          ) : saveforLaterLoading ? (
            <h2 className="font-inter text-center text-[18px] md:text-[24px] lg:text-[24px] text-[#CCFF00] font-bold flex justify-center items-center px-0 py-25 md:p-25 lg:p-25">
              Loading workouts…
            </h2>
          ) : sortedSaveForLater.length > 0 ? (
            <div className="grid gap-4">
              {sortedSaveForLater.map((saved) => (
                <SavedForLaterCard
                  activeTab={activeTab}
                  key={saved.id}
                  data={saved}
                />
              ))}
            </div>
          ) : (
            <EmptyCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
