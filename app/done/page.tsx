"use client";

import React, { useState } from "react";
import Image from "next/image";

import ClipBoard from "@/components/icons/ClipBoard";

const Done = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col mt-[120px] items-center px-4">
      <Image src={"/assets/dust.png"} width={181} height={101} alt="dust" />
      <div className="description mt-10 flex flex-col gap-y-3 items-center">
        <h2 className="m-0 font-bold text-[36px]/[25px] text-[#111111]">It&#39;s Done</h2>
        <p className="font-medium text-base/[25px] text-[#c3c3c3]">Here is the transaction hash: </p>
      </div>
      <div className="mt-[18px] bg-white rounded-[9px] py-[14px] ps-6 pe-8 w-full flex justify-between">
        <p className="font-medium text-[14px]/[25px] text-[#111111]">Ssd1398fd128RD</p>
        <div
          onClick={(e) => {
            navigator.clipboard.writeText("Ssd1398fd128RD");
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 1000);
          }}
          className="relative"
        >
          <ClipBoard />
          <div
            className={`absolute right-0 -top-full bg-donate-text-dark text-white p-1 text-xs rounded-md w-[130px] ${
              show ? "" : " hidden"
            }`}
          >
            Copied to clipboard
          </div>
        </div>
      </div>
      <div className="mt-[46px] w-full">
        <div className="font-bold text-[12px]/[25px] text-[#111111]">
          Psst...Would you like to donate to Toncinerator?
        </div>
        <div className="mt-2">
          <button
            className={`w-full py-[14px] text-center bg-donate-blue font-semibold text-base text-white rounded-[9px]`}
          >
            Yes!
          </button>
        </div>
        <div className="mt-4">
          <button
            className={`w-full py-[14px] text-center text-donate-blue font-semibold text-base bg-white rounded-[9px] border border-[#0098EA]`}
          >
            Maybe Later...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Done;
