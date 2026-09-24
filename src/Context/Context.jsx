"use client";

import React, { createContext, useState } from "react";

export const Context = createContext({
  todayPlan: [],
  setTodayPlan: () => {},
  saveForLater: [],
  setSaveForLater: () => {},
  totalExercise: 0,
  setTotalExercise: ()=>{},
  totalDuration: 0,
  setTotalDuration: ()=>{},
  totalCaloriesBurned: 0,
  setTotalCaloriesBurned: ()=>{}

});

const ContextProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);
  const [totalExercise, setTotalExercise] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(0);

  const sharedStates = {
    todayPlan,
    setTodayPlan,
    saveForLater,
    setSaveForLater,
    totalExercise,
    setTotalExercise,
    totalDuration,
    setTotalDuration,
    totalCaloriesBurned,
    setTotalCaloriesBurned
  };

  return <Context.Provider value={sharedStates}>{children}</Context.Provider>;
};

export default ContextProvider;
