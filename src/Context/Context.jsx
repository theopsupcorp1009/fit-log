"use client";

import React, { createContext, useState } from "react";

export const Context = createContext({
  todayPlan: [],
  setTodayPlan: () => {},
  saveForLater: [],
  setSaveForLater: () => {},
});

const ContextProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);

  const sharedStates = {
    todayPlan,
    setTodayPlan,
    saveForLater,
    setSaveForLater,
  };

  return <Context.Provider value={sharedStates}>{children}</Context.Provider>;
};

export default ContextProvider;
