"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[55%_45%]">

        <div className="bg-[#f3f3f3] flex flex-col px-6 md:px-14 py-6 md:py-8 relative">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center shrink-0">
              <Link href="/">
  <Image src="/images/logo.png" alt="Logo" width={120} height={40} className="cursor-pointer" />
</Link>
            </div>

            <nav className="hidden md:flex items-center gap-10 text-sm text-gray-700 whitespace-nowrap mx-8">
              <a href="#">Home</a>
              <a href="#">Job</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden bg-[#10b981] text-white px-3 py-2 rounded-lg text-lg leading-none"
            >
              ☰
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-10 md:mt-0">
            <h2 className="text-3xl md:text-[58px] font-bold leading-[1.05] mb-5 max-w-xs md:max-w-none">
              Search, Find, & Apply
            </h2>

            <p className="text-gray-600 text-sm md:text-[15px] max-w-[520px] mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
            </p>

            <div className="bg-white rounded-2xl shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center p-2 w-full max-w-xs sm:max-w-[520px] gap-2 sm:gap-0">
              <div className="flex items-center gap-2 px-4 h-11 flex-1 min-w-0">
                <span className="text-gray-500 text-sm">🔍</span>
                <input
                  type="text"
                  placeholder="Job tittle or Keyword"
                  className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-200" />

              <div className="flex items-center gap-2 px-4 h-11 flex-1 min-w-0">
                <span className="text-gray-500 text-sm">📍</span>
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
                />
                <span className="text-gray-400 text-xs">▾</span>
              </div>

              <button className="cursor-pointer bg-[#10b981] text-white text-sm font-medium px-6 h-11 rounded-xl whitespace-nowrap">
                Search
              </button>
            </div>
          </div>

          {open && (
            <div
              className="fixed inset-0 z-[9999] bg-black/40"
              onClick={() => setOpen(false)}
            >
              <div
                className="absolute top-0 right-0 h-full w-64 bg-white p-6 flex flex-col gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setOpen(false)} className="self-end text-xl cursor-pointer">
                  ✕
                </button>
                <a href="#" className="text-gray-700">Home</a>
                <a href="#" className="text-gray-700">Job</a>
                <a href="#" className="text-gray-700">About Us</a>
                <a href="#" className="text-gray-700">Contact</a>
                <button className="cursor-pointer mt-4 text-left text-gray-700">Sign In</button>
                <button className="cursor-pointer bg-[#10b981] text-white px-4 py-2 rounded-lg">
                  Create Account
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#10b981] relative z-0 min-h-[320px] md:min-h-full rounded-tl-[60px] md:rounded-tl-none md:rounded-bl-[60px]">
          <div className="hidden md:flex items-center gap-5 absolute top-8 right-14 z-50">
            <button className="text-sm text-white whitespace-nowrap cursor-pointer">
              Sign In
            </button>
            <button className="bg-white px-5 py-2.5 rounded-xl text-sm shadow-sm whitespace-nowrap flex items-center gap-2 text-black cursor-pointer">
              Create Account
            </button>
          </div>

          <div className="absolute top-[18%] left-[14%] rotate-12 bg-white p-4 rounded-2xl shadow-lg z-10">
            <Image src="/images/icon1.png" alt="" width={30} height={30} />
          </div>

          <div className="absolute top-[36%] right-[12%] -rotate-12 bg-white p-4 rounded-2xl shadow-lg z-10">
            <Image src="/images/icon2.png" alt="" width={30} height={30} />
          </div>

          <div className="absolute bottom-[24%] left-[22%] rotate-6 bg-white p-4 rounded-2xl shadow-lg z-10">
            <Image src="/images/icon3.png" alt="" width={30} height={30} />
          </div>
        </div>

      </section>
    </main>
  );
}