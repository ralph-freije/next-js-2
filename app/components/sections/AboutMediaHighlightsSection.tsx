"use client";

import { useState } from "react";

const mediaItems = [
  {
    name: "FEMINA",
    quote: "JobNQw creates a practical and simple bridge between candidates and companies.",
  },
  {
    name: "Marie Claire",
    quote: "A clean digital experience designed around clarity, accessibility, and speed.",
  },
  {
    name: "Encore!",
    quote: "The platform makes job discovery feel organized, modern, and easy to follow.",
  },
  {
    name: "LE TEMPS",
    quote: "A thoughtful hiring experience that puts people and opportunity at the center.",
  },
  {
    name: "ELLE",
    quote: "Simple design, strong usability, and a focused approach to career discovery.",
  },
];

export default function AboutMediaHighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = mediaItems[activeIndex];

  return (
    <section className="w-full bg-white py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="rounded-[28px] bg-[#f7f3ed] px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="text-[24px] font-semibold text-black md:text-[34px]">
            Curated Highlights from the Media
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[18px] font-medium leading-8 text-black md:text-[24px]">
            “{activeItem.quote}”
          </p>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
            {mediaItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.name}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-[14px] px-4 py-4 text-center text-sm font-bold uppercase tracking-wide transition ${
                    isActive
                      ? "bg-white text-black shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
                      : "text-[#9b948d] hover:bg-white/70 hover:text-black"
                  }`}
                >
                  {item.name}
                  <span
                    className={`mx-auto mt-3 block h-[2px] rounded-full bg-[#17c58b] transition-all duration-300 ${
                      isActive ? "w-8" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}