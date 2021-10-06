import React from "react";
import { useToggle } from "./Context";

const Overlay = () => {
  const { open } = useToggle();

  return (
    <div
      className={
        open
          ? "bg-black fixed h-screen opacity-40 top-0 w-screen z-30 lg:hidden"
          : ""
      }
    ></div>
  );
};

export default Overlay;
