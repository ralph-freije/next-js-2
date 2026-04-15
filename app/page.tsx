"use client";

import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Icon1 from "./components/icons/Icon1";
import Logo from "./components/icons/Logo";
import ChartIcon from "./components/icons/ChartIcon";
import ShieldIcon from "./components/icons/ShieldIcon";
import CreateAccountIcons from "./components/icons/CreateAccountIcons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const locations = ["Beirut", "Dubai", "London", "Remote"];

  return (
    <main className={`${poppins.className} bg-[#f3f3f3] overflow-x-hidden`}>
      <section className="w-full">
        <div className="max-w-[1440px] mx-auto md:grid md:grid-cols-[54.5%_45.5%]">
          <div className="flex flex-col bg-[#f3f3f3] w-full">
            <div className="mx-auto flex w-full max-w-[780px] flex-1 flex-col px-6 pb-12 pt-7 md:px-10 md:pb-16 md:pt-9 lg:px-12">
              <div className="flex items-center justify-between">
                <Link href="/" className="shrink-0">
                  <Logo />
                </Link>

                <nav className="hidden items-center gap-[46px] text-[14px] font-medium text-[#1f2937] md:flex">
                  <a href="#" className="transition hover:text-black">Home</a>
                  <a href="#" className="transition hover:text-black">Job</a>
                  <a href="#" className="transition hover:text-black">About Us</a>
                  <a href="#" className="transition hover:text-black">Contact</a>
                </nav>

                <button
                  onClick={() => setOpen(true)}
                  className="rounded-lg bg-[#17c58b] px-3 py-2 text-lg leading-none text-white md:hidden"
                >
                  ☰
                </button>
              </div>

              <div className="flex flex-col justify-center pt-12 md:pt-20 text-center md:text-left">
                <div className="mx-auto w-full max-w-[520px] md:mx-0">
                  <h1 className="text-[36px] md:text-[46px] font-bold leading-[1.2] text-black">
                    Search, Find, & Apply
                  </h1>

                  <p className="mt-5 text-[14px] md:text-[15px] leading-[1.8] text-[#6b7280] max-w-[460px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
                  </p>

                  <div className="mt-8 rounded-[18px] bg-[#eeeeee] p-[6px] max-w-[520px]">
                    <div className="flex items-center bg-white rounded-[16px] px-2 py-2 gap-2">

                      <div className="flex items-center gap-2 bg-[#f3f3f3] px-4 h-[44px] rounded-[12px] flex-1">
                        <span className="text-[14px] text-[#8b93a7]">🔍</span>
                        <input
                          type="text"
                          placeholder="Job tittle or Keyword"
                          className="w-full bg-transparent text-[14px] font-medium text-[#6b7280] outline-none placeholder:text-[#9ca3af]"
                        />
                      </div>

                      <div className="hidden h-[24px] w-px bg-[#e5e7eb] sm:block" />

                      <div
                        className="relative flex items-center gap-2 bg-[#f3f3f3] px-4 h-[48px] rounded-[14px] flex-1 cursor-pointer"
                        onClick={() => setOpenDropdown(!openDropdown)}
                      >
                        <span className="text-[16px] text-[#9ca3af]">📍</span>

                        <span className={`text-[14px] font-medium ${location ? "text-[#374151]" : "text-[#9ca3af]"}`}>
                          {location || "Select location"}
                        </span>

                        <span className="ml-auto text-[12px] text-[#9ca3af]">
                          {openDropdown ? "▲" : "▼"}
                        </span>

                        {openDropdown && (
                          <div className="absolute left-0 top-[110%] w-full bg-white rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-2 z-50">
                            {locations.map((loc) => (
                              <div
                                key={loc}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLocation(loc);
                                  setOpenDropdown(false);
                                }}
                                className="px-4 py-2 rounded-[10px] text-[14px] text-[#374151] hover:bg-[#f3f3f3] transition cursor-pointer"
                              >
                                {loc}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <button className="h-[44px] rounded-[12px] bg-[#17c58b] px-6 text-[13px] font-medium text-white">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute top-0 left-0 w-screen max-w-none h-full bg-[#17c58b] rounded-bl-[72px]"></div>

            <div className="absolute right-10 top-7 z-20 flex items-center gap-6">
              <button className="cursor-pointer text-[14px] font-medium text-white">
                Sign In
              </button>

              <button className="flex items-center gap-2 rounded-[18px] bg-white px-6 py-[14px] text-[14px] font-medium text-black shadow-[0_6px_16px_rgba(0,0,0,0.10)]">
                <CreateAccountIcons />
                <span>Create Account</span>
              </button>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute left-[21%] top-[18%] rotate-[10deg] rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
                <Icon1 className="w-8 h-8" />
              </div>

              <div className="absolute right-[13%] top-[38%] -rotate-[10deg] rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
                <ChartIcon className="w-8 h-8" />
              </div>

              <div className="absolute bottom-[24%] left-[28%] rotate-[6deg] rounded-[24px] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
                <ShieldIcon className="w-8 h-8" />
              </div>
            </div>
          </div>

          {open && (
            <div className="fixed inset-0 z-[9999] bg-black/40" onClick={() => setOpen(false)}>
              <div
                className="absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-white p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setOpen(false)} className="self-end text-xl">✕</button>

                <a href="#" className="text-[15px] font-medium text-[#374151]">Home</a>
                <a href="#" className="text-[15px] font-medium text-[#374151]">Job</a>
                <a href="#" className="text-[15px] font-medium text-[#374151]">About Us</a>
                <a href="#" className="text-[15px] font-medium text-[#374151]">Contact</a>

                <button className="mt-3 text-left text-[15px] font-medium text-[#374151]">
                  Sign In
                </button>

                <button className="flex items-center gap-2 bg-[#17c58b] text-white px-4 py-2 rounded-lg">
                  <CreateAccountIcons />
                  <span>Create Account</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}