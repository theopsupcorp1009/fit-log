"use client";

import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({
  todayPlan: [],
  setTodayPlan: () => {},
  saveForLater: [],
  setSaveForLater: () => {},
  activeTab: '',
  setActiveTab: ()=>{}
});

const ContextProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("today");

  useEffect(()=>{
    const todayPlanFromLocal = localStorage.getItem("todayPlan");
    const saveForLaterFromLocal = localStorage.getItem("saveForLater");

    if(todayPlanFromLocal){
      setTodayPlan(JSON.parse(todayPlanFromLocal));
    }

    if(saveForLaterFromLocal){
      setSaveForLater(JSON.parse(saveForLaterFromLocal));
    }

    setLoaded(true);
  }, [])

  useEffect(()=>{
    if(!loaded) return;

    localStorage.setItem("todayPlan", JSON.stringify(todayPlan));
  }, [todayPlan, loaded]);

  useEffect(()=>{
    if(!loaded) return;

    localStorage.setItem("saveForLater", JSON.stringify(saveForLater));
  }, [saveForLater, loaded]);

  const sharedStates = {
    todayPlan,
    setTodayPlan,
    saveForLater,
    setSaveForLater,
    activeTab,
    setActiveTab
  };

  return <Context.Provider value={sharedStates}>{children}</Context.Provider>;
};

export default ContextProvider;
