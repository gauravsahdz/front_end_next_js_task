import React, { useEffect } from "react";

type AlertProps = {
  type: "success" | "error";
  message: string;
  show: boolean;
};

const Alert = ({ type, message, show }: AlertProps) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(
        '[data-dismissible="alert"]'
      ) as HTMLElement;
      // alert.style.opacity = "0"; //
    }, 3000);
  }, []);

  return (
    <div
      className={
        show
          ? `font-regular absolute bottom-5 right-2 rounded-lg p-4 text-base leading-5 text-white ${
              type === "success" ? "bg-green-500" : "bg-red-500"
            } opacity-100`
          : `font-regular absolute bottom-5 right-2 rounded-lg p-4 text-base leading-5 text-white ${
              type === "success" ? "bg-green-500" : "bg-red-500"
            } opacity-0`
      }
      data-dismissible="alert"
      style={{ position: "fixed" }} // added style
    >
      <div className="mr-12">{message}</div>
      <div
        className="absolute top-2.5 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
        data-dismissible-target="alert"
      >
        <button
          role="button"
          className="w-max rounded-lg p-1"
          onClick={() => {
            document.querySelector(
              '[data-dismissible="alert"]'
            ) as HTMLElement;
            // alert.style.opacity = "0";
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Alert;
