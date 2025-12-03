"use client";

import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isInstantLoading, setIsInstantLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isInstantLoading, setIsInstantLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
