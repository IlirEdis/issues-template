"use client";

import { createContext, useState } from "react";

export const AppContext = createContext({});

export default function AppContextProvider({ children }: any) {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <AppContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </AppContext.Provider>
  );
}
