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

  return (
    <main className={`${poppins.className} min-h-screen bg-[#f3f3f3]`}>
      <section className="mx-auto min-h-screen max-w-[1440px] md:grid md:grid-cols-[54.5%_45.5%]">
        <div className="flex min-h-screen flex-col bg-[#f3f3f3]">
          <div className="mx-auto flex w-full max-w-[780px] flex-1 flex-col px-6 pb-10 pt-7 md:px-10 md:pb-12 md:pt-9 lg:px-12">
            <div className="flex items-center justify-between">
              <Link href="/" className="shrink-0">
                <Logo />
              </Link>

              <nav className="hidden items-center gap-[46px] text-[14px] font-medium text-[#1f2937] md:flex">
                <a href="#" className="transition hover:text-black">
                  Home
                </a>
                <a href="#" className="transition hover:text-black">
                  Job
                </a>
                <a href="#" className="transition hover:text-black">
                  About Us
                </a>
                <a href="#" className="transition hover:text-black">
                  Contact
                </a>
              </nav>

              <button
                onClick={() => setOpen(true)}
                className="rounded-lg bg-[#17c58b] px-3 py-2 text-lg leading-none text-white md:hidden"
              >
                ☰
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center pt-12 text-center md:pt-0 md:text-left">
              <div className="mx-auto w-full max-w-[610px] md:mx-0">
                <h1 className="max-w-[520px] text-[34px] md:text-[42px] font-bold leading-[1.2] text-black">
                  Search, Find, & Apply
                </h1>

                <p className="mt-7 max-w-[575px] text-[15px] font-normal leading-[1.9] text-black md:text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
                </p>

                <div className="mt-8 rounded-[18px] bg-[#eeeeee] p-[6px]">
                  <div className="flex items-center bg-white rounded-[16px] px-2 py-2 gap-2">
                    <div className="flex items-center gap-2 bg-[#f3f3f3] px-4 h-[44px] rounded-[12px] flex-1">
                      <span className="text-[14px] text-[#8b93a7]">🔍</span>
                      <input
                        type="text"
                        placeholder="Job tittle or Keyword"
                        className="w-full bg-transparent text-[14px] font-medium text-[#6b7280] outline-none placeholder:text-[#9ca3af]"
                      />
                    </div>

                    <div className="hidden h-[26px] w-px bg-[#e5e7eb] sm:block" />

                    <div className="flex items-center gap-2 bg-[#f3f3f3] px-4 h-[44px] rounded-[12px] flex-1">
                      <span className="text-[14px] text-[#8b93a7]">📍</span>
                      <input
                        type="text"
                        placeholder="Location"
                        className="w-full bg-transparent text-[14px] font-medium text-[#6b7280] outline-none placeholder:text-[#9ca3af]"
                      />
                      <span className="text-[11px] text-[#9ca3af]">▾</span>
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

        <div className="relative hidden min-h-screen overflow-hidden rounded-bl-[72px] bg-[#17c58b] md:block">
          <div className="absolute right-10 top-7 z-20 flex items-center gap-6">
            <button className="cursor-pointer text-[14px] font-medium text-white transition hover:opacity-90">
              Sign In
            </button>

            <button className="flex cursor-pointer items-center gap-2 rounded-[18px] bg-white px-6 py-[14px] text-[14px] font-medium text-black shadow-[0_6px_16px_rgba(0,0,0,0.10)] transition hover:translate-y-[-1px]">
              <CreateAccountIcons />
              <span>Create Account</span>
            </button>
          </div>

          <div className="absolute left-[21%] top-[18%] rotate-[10deg] rounded-[20px] bg-white p-4 shadow-[0_10px_22px_rgba(0,0,0,0.10)]">
            <Icon1 />
          </div>

          <div className="absolute right-[13%] top-[38%] -rotate-[10deg] rounded-[20px] bg-white p-4 shadow-[0_10px_22px_rgba(0,0,0,0.10)]">
            <ChartIcon />
          </div>

          <div className="absolute bottom-[24%] left-[28%] rotate-[6deg] rounded-[20px] bg-white p-4 shadow-[0_10px_22px_rgba(0,0,0,0.10)]">
            <ShieldIcon />
          </div>
        </div>

        {open && (
          <div
            className="fixed inset-0 z-[9999] bg-black/40"
            onClick={() => setOpen(false)}
          >
            <div
              className="absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="self-end text-xl"
              >
                ✕
              </button>

              <a href="#" className="text-[15px] font-medium text-[#374151]">
                Home
              </a>
              <a href="#" className="text-[15px] font-medium text-[#374151]">
                Job
              </a>
              <a href="#" className="text-[15px] font-medium text-[#374151]">
                About Us
              </a>
              <a href="#" className="text-[15px] font-medium text-[#374151]">
                Contact
              </a>

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
      </section>
    </main>
  );
}