import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="header flex justify-between px-2 items-center mb-[22px]">
      <div className="flex gap-x-4 items-center">
        <Image src={"/assets/X.svg"} alt="close" width={14.6} height={14.6}></Image>
        <div className={`font-semibold text-base/[14.58px] text-donate-text-dark`}>Toncinerator</div>
      </div>
      <Image src={"/assets/threeDots.svg"} alt="option" width={3.64} height={16.4} className="cursor-pointer" />
    </div>
  );
};

export default Header;
