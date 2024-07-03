import React from "react";
import Burn from "./icons/Burn";
import History from "./icons/History";
import Donate from "./icons/Donate";
import Storage from "./icons/Storage";

const Menu = () => {
  return (
    <div className=" rounded-t-[35px] bg-white w-100 pt-[22px] pb-[43px] px-[40px] flex justify-between items-center">
      <div className="flex flex-col items-center gap-y-2">
        <Burn />
        <p className=" font-normal text-[15px]/[22px] text-donate-menu-active">Burn</p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <History />
        <p className=" font-normal text-[15px]/[22px] text-donate-text-gray">History</p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <Donate />
        <p className=" font-normal text-[15px]/[22px] text-donate-text-gray">Donate</p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <Storage />
        <p className=" font-normal text-[15px]/[22px] text-donate-text-gray">Storage</p>
      </div>
    </div>
  );
};

export default Menu;
