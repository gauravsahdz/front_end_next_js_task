"use client";
import React, { ReactNode, createContext, useState } from "react";
import LoadingBar from "react-top-loading-bar";

interface LoaderContextProps {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextProps>({
  isLoading: false,
  setLoading: () => {},
});

export const LoaderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };
  return (
    <LoaderContext.Provider value={{ isLoading, setLoading }}>
      {children}
      <LoadingBar progress={isLoading ? 100 : 0} height={3} color="#007bff" />
    </LoaderContext.Provider>
  );
};
