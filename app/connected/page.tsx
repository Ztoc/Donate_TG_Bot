"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

import Menu from "@/components/Menu";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Connected() {
  const [assets, setAssets] = useState(null);
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
          <button className="w-[150px] py-4 text-center bg-[#111111] font-semibold text-[13px]/[15px] text-white rounded-[14px]">
            Connected
          </button>
        </div>
      </div>
      <div className="assets-wrapper bg-white rounded-[14px] py-[22px] px-[30px] mt-4">
        <div className="title flex items-center gap-x-3">
          <Image src={"/assets/asset.svg"} alt="assets" width={18} height={15} />
          <div className={`${montserrat.className} font-bold text-[19px]/[15px] text-donate-menu-active`}>
            Your assets
          </div>
        </div>
        {assets ? (
          <>
            <div className="jettons-wrapper mt-5 flex flex-col">
              <div
                className={`title-wrapper ${montserrat.className} text-donate-menu-active font-bold text-[15px]/[15px]`}
              >
                {" "}
                Jettons:
              </div>
              <div className="jetton-items mt-[15px] flex flex-col gap-y-2">
                <div className="ton-item bg-donate-card-bg w-full rounded-[44px] ps-5 pe-3 py-4 flex justify-between">
                  <div className="flex gap-x-2 items-center">
                    <Image src={"/assets/ton.svg"} alt="ton" width={29} height={29} />
                    <div className="flex flex-col gap-y-[3px]">
                      <div
                        className={`${montserrat.className} font-semibold text-donate-menu-active text-[11px]/[13px]`}
                      >
                        Ton
                      </div>
                      <div
                        className={`${montserrat.className} font-normal text-donate-menu-active/40 text-[11px]/[13px]`}
                      >
                        Jetton
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="flex flex-col gap-y-[3px] items-end">
                      <div
                        className={`${montserrat.className} font-semibold text-donate-menu-active text-[11px]/[13px]`}
                      >
                        25
                      </div>
                      <div
                        className={`${montserrat.className} font-normal text-donate-menu-active/40 text-[11px]/[13px]`}
                      >
                        323$
                      </div>
                    </div>
                    <Image src={"/assets/arrowleft.svg"} alt="left" width={21.5} height={21.5} />
                  </div>
                </div>
                <div className="ton-item bg-donate-card-bg w-full rounded-[44px] ps-5 pe-3 py-4 flex justify-between">
                  <div className="flex gap-x-2 items-center">
                    <Image src={"/assets/not.svg"} alt="ton" width={29} height={29} />
                    <div className="flex flex-col gap-y-[3px]">
                      <div
                        className={`${montserrat.className} font-semibold text-donate-menu-active text-[11px]/[13px]`}
                      >
                        Not
                      </div>
                      <div
                        className={`${montserrat.className} font-normal text-donate-menu-active/40 text-[11px]/[13px]`}
                      >
                        Jetton
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <div className="flex flex-col gap-y-[3px] items-end">
                      <div
                        className={`${montserrat.className} font-semibold text-donate-menu-active text-[11px]/[13px]`}
                      >
                        11200
                      </div>
                      <div
                        className={`${montserrat.className} font-normal text-donate-menu-active/40 text-[11px]/[13px]`}
                      >
                        383$
                      </div>
                    </div>
                    <Image src={"/assets/arrowleft.svg"} alt="left" width={21.5} height={21.5} />
                  </div>
                </div>
              </div>
            </div>
            <div className="collectables mt-[13px]">
              <div
                className={`title-wrapper ${montserrat.className} text-donate-menu-active font-bold text-[15px]/[15px]`}
              >
                {" "}
                Collectables:
              </div>
              <div className="collectable-content flex justify-between mt-4 gap-x-2">
                <div className="collect-item flex flex-col pb-2 rounded-[19.6px] gap-y-2 items-center bg-donate-card-bg">
                  <div className="w-[140px] h-[140px] flex flex-col justify-center items-center bg-radial">
                    <div className="bg-white py-2 px-3 flex gap-x-1 rounded-lg items-center">
                      <div className="font-semibold text-sm text-donate-text-dark">10,000</div>
                      <Image src={"/assets/ton.jpg"} width={12} height={12} alt="collect" className="-mt-1" />
                    </div>
                  </div>
                  <div>
                    <div className={`${montserrat.className} font-semibold text-donate-menu-active text-[9px]/[8px]`}>
                      10,000 NOT VOUCHER
                    </div>
                    <div
                      className={`${montserrat.className} font-normal text-donate-menu-active/40 text-[9px]/[8px] text-center mt-[4px]`}
                    >
                      NFT
                    </div>
                  </div>
                </div>
                <div className="collect-item flex flex-col pb-2 rounded-[19.6px] gap-y-2 items-center bg-donate-card-bg">
                  <div className="w-[140px] h-[140px] flex flex-col justify-center items-center bg-radial">
                    <div className="bg-white py-2 px-3 flex gap-x-1 rounded-lg items-center">
                      <div className="font-semibold text-sm text-donate-text-dark">10,000</div>
                      <Image src={"/assets/ton.jpg"} width={12} height={12} alt="collect" className="-mt-1" />
                    </div>
                  </div>
                  <div className={`${montserrat.className} font-semibold text-donate-menu-active text-[9px]/[8px]`}>
                    10,000 NOT VOUCHER
                  </div>
                  <div
                    className={`${montserrat.className} font-normal text-donate-menu-active/40 text-[9px]/[8px] text-center mt-[4px]`}
                  >
                    NFT
                  </div>
                </div>
              </div>
            </div>
            <div className="lp-jettons mt-[15px]">
              <div
                className={`title-wrapper ${montserrat.className} text-donate-menu-active font-bold text-[15px]/[15px]`}
              >
                {" "}
                LP Jettons:
              </div>
              <div className="ton-item bg-donate-card-bg w-full rounded-[44px] ps-5 pe-3 py-4 flex justify-between mt-[15px]">
                <div className="flex gap-x-2 items-center">
                  <Image src={"/assets/web3.svg"} alt="ton" width={26} height={26} />
                  <div className="flex flex-col gap-y-[3px]">
                    <div className={`${montserrat.className} font-semibold text-donate-menu-active text-[11px]/[13px]`}>
                      Web3
                    </div>
                    <div
                      className={`${montserrat.className} font-normal text-donate-menu-active/40 text-[11px]/[13px]`}
                    >
                      LP Jetton
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <div className="flex flex-col gap-y-[3px] items-end">
                    <div className={`${montserrat.className} font-semibold text-donate-menu-active text-[11px]/[13px]`}>
                      110
                    </div>
                    <div
                      className={`${montserrat.className} font-normal text-donate-menu-active/40 text-[11px]/[13px]`}
                    >
                      32$
                    </div>
                  </div>
                  <Image src={"/assets/arrowleft.svg"} alt="left" width={21.5} height={21.5} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className=" h-[calc(100vh-170px)] w-full flex flex-col justify-center items-center text-center bg-white px-[50px] font-bold text-[19px]/[23px] text-donate-text-gray">
            no assets were found in your wallet
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <Menu />
      </div>
    </>
  );
}
