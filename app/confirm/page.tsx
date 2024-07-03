import React from "react";
import Image from "next/image";

import Menu from "@/components/Menu";

const Confirm = () => {
  return (
    <>
      <div className="mt-[30px] pt-[19px] pb-[30px] px-[28px] bg-white rounded-[12px] flex flex-col gap-y-9 items-center">
        <div className="flex gap-x-2 items-center">
          <Image src={"/assets/punk.png"} width={30} height={30} alt="Punk" />
          <div className={`font-semibold text-[21px]/[15px] text-donate-menu-active`}>Punk</div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-medium text-base/[15px] text-donate-menu-active">Amount</div>
          <div className="bg-[#f1f1f1] py-5 px-8 flex items-center justify-between rounded-[15px]">
            <input
              type="text"
              className="font-medium text-donate-menu-active text-base/[15px] bg-transparent outline-none border-none"
              defaultValue={23}
            />
            <div className=" text-donate-red font-bold text-[16px]/[15px]">MAX</div>
          </div>
        </div>
      </div>
      <div className="burn-button mt-5 w-full">
        <button className="py-4 text-center font-bold text-base text-white bg-donate-red rounded-[14px] flex items-center w-full justify-center gap-x-2">
          Burn, Baby, Burn...{" "}
          <div className="w-5 h-5">
            {" "}
            <Image src={"/assets/burn-red.svg"} alt="burn" width={21} height={21} />
          </div>
        </button>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <Menu />
      </div>
    </>
  );
};

export default Confirm;
