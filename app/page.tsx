"use client";

import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Icon1 from "./components/icons/Icon1";
import Logo from "./components/icons/Logo";
import ChartIcon from "./components/icons/ChartIcon";
import ShieldIcon from "./components/icons/ShieldIcon";
import CreateAccountIcons from "./components/icons/CreateAccountIcons";
import HowItWorks from "./components/sections/HowItworks";
import PromoSection from "./components/sections/PromoSection";
import PopularCategories from "./components/sections/PopularCategories";
import RecentlyAddedJobs from "./components/sections/RecentlyAddedJobs";
import FeedbackSection from "./components/sections/FeedbackSection";
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
                  <a href="#" className="transition hover:text-black hover:underline">Home</a>
                  <a href="#" className="transition hover:text-black hover:underline">Job</a>
                  <a href="#" className="transition hover:text-black hover:underline">About Us</a>
                  <a href="#" className="transition hover:text-black hover:underline">Contact</a>
                </nav>

                <button
                  onClick={() => setOpen(true)}
                  className="rounded-lg bg-[#17c58b] px-3 py-2 text-lg leading-none text-white md:hidden"
                >
                  ☰
                </button>
              </div>

              <div className="flex flex-col mt-15 justify-center pt-12 md:pt-20 text-center md:text-left">
                <div className="mx-auto w-full max-w-[720px] md:mx-0">
                  <h1 className="text-[36px] md:text-[46px] font-bold leading-[1.2] text-black">
                    Search, Find, & Apply
                  </h1>

                  <p className="mt-5 text-[14px] md:text-[15px] leading-[1.8] max-w-[460px] black-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
                  </p>

                  <div className="w-full mt-10 bg-white rounded-[18px] p-3">

                    <div className="hidden md:flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-[#f3f3f3] px-4 h-[48px] rounded-[12px] flex-1">
                        <span className="text-[14px] text-black">🔍</span>
                        <input
                          type="text"
                          placeholder="Job title or Keyword"
                          className=" text-black w-full bg-transparent text-[14px] font-medium outline-none placeholder:text-black"
                        />
                      </div>

                      <div
                        className="relative flex items-center gap-2 bg-[#f3f3f3] px-4 h-[48px] rounded-[12px] flex-1 cursor-pointer"
                        onClick={() => setOpenDropdown(!openDropdown)}
                      >
                        <span className="text-[14px] text-[#8b93a7]">📍</span>

                        <span className={`text-[14px] font-medium ${location ? "text-black" : "text-black"}`}>
                          {location || "Location"}
                        </span>

                        <span className="ml-auto text-[12px] text-[#9ca3af]">
                          {openDropdown ? "▲" : "▼"}
                        </span>

                        {openDropdown && (
                          <div className="absolute left-0 top-[110%] w-full bg-white rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] p-2 z-50">
                            {locations.map((loc) => (
                              <div
                                key={loc}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLocation(loc);
                                  setOpenDropdown(false);
                                }}
                                className="px-4 py-2 rounded-[10px] text-[14px] text-[#374151] hover:bg-[#f3f3f3]"
                              >
                                {loc}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <button className="cursor-pointer h-[48px] px-6 rounded-[12px] bg-[#17c58b] text-white text-[14px] font-medium">
                        Search
                      </button>
                    </div>
                    <div className="flex flex-col gap-3 md:hidden">

                      <div className="flex items-center gap-2 bg-[#f3f3f3] px-4 h-[48px] rounded-[12px]">
                        <span className="text-[14px] text-black">🔍</span>
                        <input
                          type="text"
                          placeholder="Job title or Keyword"
                          className="w-full bg-transparent text-[14px] font-medium text-black outline-none placeholder:text-black"
                        />
                      </div>

                      <div
                        className="relative flex items-center gap-2 bg-[#f3f3f3] px-4 h-[48px] rounded-[12px]"
                        onClick={() => setOpenDropdown(!openDropdown)}
                      >
                        <span className="text-[14px] text-[#8b93a7]">📍</span>
                        <span className="text-[14px] text-black">Location</span>
                      </div>

                      <button className="cursor-pointer w-full h-[48px] rounded-[12px] bg-[#17c58b] text-white text-[14px] font-medium">
                        Search
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full md:block">
            <div className="absolute top-0 left-0 w-full h-full bg-[#17c58b] md:w-screen md:max-w-none rounded-none md:rounded-bl-[72px]"></div>

            <div className="hidden md:flex absolute right-10 top-7 z-20 items-center gap-6">
              <button className="cursor-pointer text-[14px] font-medium text-white">
                Sign In
              </button>

              <button className="cursor-pointer hover:bg-[#f3f3f3]  flex items-center gap-2 rounded-[18px] bg-white px-6 py-[14px] text-[14px] font-medium text-black shadow-[0_6px_16px_rgba(0,0,0,0.10)]">
                <CreateAccountIcons className="w-6 h-6 text-[#17c58b]" />
                <span>Create Account</span>
              </button>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute left-[18%] top-[20%] rotate-[-5deg] rounded-[14px] bg-white p-4 shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
                <Icon1 className="w-12 h-12" />
              </div>

              <div className="absolute right-[12%] top-[42%] -rotate-[-8deg] rounded-[14px] bg-white p-4 shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
                <ChartIcon className="w-12 h-12" />
              </div>

              <div className="absolute bottom-[18%] left-[13%] rotate-[-8deg] rounded-[14px] bg-white p-4 shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
                <ShieldIcon className="w-12 h-12" />
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
                  <CreateAccountIcons className="w-6 h-6" />
                  <span>Create Account</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <HowItWorks />
      <PromoSection />
      <PopularCategories />
<RecentlyAddedJobs />
<FeedbackSection />
    </main>
  );
}