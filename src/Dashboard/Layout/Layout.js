import React from "react";
import css from "./layout.module.css";
import SideNavigation from "../SideNavigation/SideNavigation";
import Context from "../../Providers/Context";
import TopNavigation from "../TopNavigation/TopNavigation";
import Overlay from "../../Providers/Overlay";

const style = {
  container: "bg-center bg-cover h-screen overflow-hidden w-full lg:p-4 bg-mac",
  content: "h-screen overflow-hidden relative lg:rounded-2xl",
  mainContainer:
    "flex flex-col h-screen overflow-hidden pl-0 w-full lg:space-y-4 lg:w-99",
  main: "h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 md:rounded-xl",
};

const Layout = ({ children }) => {
  return (
    <Context>
      <div className={`${style.container} dark:bg-macDark`}>
        <div className={`${style.content} ${css.layout}`}>
          <div className="flex items-start">
            <Overlay />
            <SideNavigation mobilePosition="right" />
            <div className={style.mainContainer}>
              <TopNavigation />
              <main className={`${style.main} ${css.main}`}>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </Context>
  );
};

export default Layout;
