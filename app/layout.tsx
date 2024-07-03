import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="min-h-screen w-screen bg-donate-bg pt-[55px] relative overflow-x-hidden">
          <div className="w-full px-[19px] h-[calc(100vh+150px)]">
            {/* <Header /> */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
