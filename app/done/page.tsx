"use client";

import ClipBoard from "@/components/icons/ClipBoard";
import Image from "next/image";
import React from "react";

const Done = () => {
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
          }}
        >
          <ClipBoard />
        </div>
      </div>
    </div>
  );
};

export default Done;
