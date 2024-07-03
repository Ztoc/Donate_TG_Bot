import React from "react";
import Image from "next/image";

const Confirming = () => {
  return (
    <div className="flex flex-col gap-y-[26px] items-center justify-center mt-[265px]">
      <Image src={"/assets/confirming.svg"} width={76} height={76} alt="loading..." />
      <div className="font-medium text-[26px]/[36px] text-black text-center ">
        Transaction <br />
        is confirming...
      </div>
    </div>
  );
};

export default Confirming;
