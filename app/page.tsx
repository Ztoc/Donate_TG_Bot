"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";

import Menu from "@/components/Menu";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="user-wrapper w-full flex justify-between items-center">
        <div className="flex gap-x-[13px] items-center">
          <Image alt="avatar" src={"/assets/avatar.png"} width={48} height={48} className="rounded-full" />
          <div className="flex flex-col gap-y-[7px]">
            <h2 className=" font-semibold text-[15px]/[14.58px] text-donate-text-dark m-0">Welcome</h2>
            <p className="font-normal text-xs/[15px] text-donate-text-dark">@Xcaesar</p>
          </div>
        </div>
        <div>
          <button
            className="w-[150px] py-4 text-center bg-donate-blue font-semibold text-[13px]/[15px] text-white rounded-[14px]"
            onClick={(e) => router.push("/connected")}
          >
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="balance-wrapper flex justify-between mt-[17px]">
        <div className="relative w-[155px] h-12 flex justify-center flex-col bg-white ps-[60px] gap-y-1 rounded-[14px]">
          <div className="descriptin font-normal text-donate-text-gray text-[11px]/[15px]">Coal Balance:</div>
          <div className="font-semibold text-base/[15px] text-donate-text-dark">2340</div>
          <div className="absolute left-0 top-0">
            <Image src={"/assets/coal.png"} alt="coal" width={46} height={49} />
          </div>
        </div>

        <div className="relative w-[155px] h-12 flex justify-center flex-col bg-white ps-[60px] gap-y-1 rounded-[14px]">
          <div className="descriptin font-normal text-donate-text-gray text-[11px]/[15px]">ASH Balance:</div>
          <div className="font-semibold text-base/[15px] text-donate-text-dark">600</div>
          <div className="absolute left-0 top-0">
            <Image src={"/assets/ash.png"} alt="coal" width={46} height={49} />
          </div>
        </div>
      </div>
      <div className="main-image bg-white pt-7 pb-5 px-[22px] flex flex-col gap-y-7 items-center mt-[13px] rounded-[14px]">
        <Image src={"/assets/mask.png"} alt="mask-image" width={165} height={346} />
        <button
          className={`w-full py-[14px] text-center bg-donate-blue font-semibold text-base text-white rounded-[14px] ${montserrat.className}`}
        >
          Select Jetton
        </button>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <Menu />
      </div>
    </>
  );
}
