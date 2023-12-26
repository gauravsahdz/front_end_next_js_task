"use client";
import Alert from "@/components/Alert";
import React, { ReactNode, createContext, useState } from "react";

interface AlertContextProps {
  show: boolean;
  showAlert: (
    show: boolean,
    type: "success" | "error",
    message: string,
    key: number
  ) => void;
}

export const AlertContext = createContext<AlertContextProps>({
  show: false,
  showAlert: () => {},
});

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(0);

  const showAlert = (
    show: boolean,
    type: "success" | "error",
    message: string,
    key: number
  ) => {
    setShow(show);
    setType(type);
    setMessage(message);
    setKey(key);
  };
  return (
    <AlertContext.Provider
      value={{
        show,
        showAlert,
      }}
    >
      {children}
      <Alert
        type={type as "success" | "error"}
        message={message}
        show={show}
        key={key}
      />
    </AlertContext.Provider>
  );
};
