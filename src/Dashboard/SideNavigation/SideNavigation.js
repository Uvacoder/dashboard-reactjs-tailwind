import React from "react";
import { useToggle } from "../../Providers/Context";
import SideHeader from "./SideHeader";
import SideItems from "./SideItems";
import DarkMode from "./DarkMode";
import css from "../Layout/layout.module.css";

const style = {
  default:
    "bg-gray-900 h-screen overflow-y-auto top-0 lg:block lg:relative lg:w-64 lg:z-auto lg:bg-transparent",
  container: "lg:pb-5 pb-32 flex flex-col",
  close: "hidden",
  open: "absolute w-8/12 z-40 sm:w-5/12",
  mobilePosition: {
    left: "left-0",
    right: "right-0",
  },
};

const SideNavigation = ({ mobilePosition }) => {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${open ? style.open : style.close} ${
        style.mobilePosition[mobilePosition]
      } ${css.sidenavScrollbar}`}
    >
      <div className={style.container}>
        <SideHeader />
        <SideItems />
      </div>
      <DarkMode />
    </aside>
  );
};

export default SideNavigation;
