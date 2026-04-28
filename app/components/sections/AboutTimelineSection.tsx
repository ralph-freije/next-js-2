"use client";

import { useState } from "react";

const timelineItems = [
  {
    year: "1906",
    image: "/images/job4.jpg",
    title: "The First Step",
    text: "Our story began with a simple idea: make opportunities easier to discover and more accessible for everyone.",
  },
  {
    year: "1926",
    image: "/images/job1.jpg",
    title: "Building Trust",
    text: "We focused on building a reliable experience where people could explore jobs with clarity and confidence.",
  },
  {
    year: "1950",
    image: "/images/job2.jpg",
    title: "Growing the Vision",
    text: "The platform evolved with better tools, stronger connections, and a clearer path between candidates and companies.",
  },
  {
    year: "1985",
    image: "/images/job3.png",
    title: "A Smarter Experience",
    text: "We introduced a more organized way to search, filter, and understand job opportunities before applying.",
  },
  {
    year: "2021",
    image: "/images/job4.jpg",
    title: "Digital Transformation",
    text: "The experience became faster, cleaner, and fully responsive for modern users across different devices.",
  },
  {
    year: "2026",
    image: "/images/promo.jpg",
    title: "The Future of Hiring",
    text: "Today, we continue creating a simple and modern job platform that helps people move forward with confidence.",
  },
];

export default function AboutTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = timelineItems[activeIndex];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="rounded-[28px] bg-[#f7f3ed] p-5 md:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[44%_56%]">
            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="h-[260px] w-full object-cover grayscale transition duration-500 md:h-[340px]"
              />
            </div>

            <div className="rounded-[22px] bg-white/70 p-6 md:p-10">
              <span className="text-[36px] font-bold leading-none text-black md:text-[52px]">
                {activeItem.year}
              </span>

              <h2 className="mt-5 text-[26px] font-bold text-black md:text-[36px]">
                {activeItem.title}
              </h2>

              <p className="mt-4 max-w-xl text-[14px] leading-8 text-[#4b5563] md:text-[15px]">
                {activeItem.text}
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto pb-2">
            <div className="flex min-w-max items-center justify-center gap-6 md:gap-8">
              {timelineItems.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.year}
                    onClick={() => setActiveIndex(index)}
                    className={`relative cursor-pointer text-sm font-medium transition ${
                      isActive ? "text-black" : "text-[#8b8b8b] hover:text-black"
                    }`}
                  >
                    {item.year}
                    <span
                      className={`absolute left-1/2 top-[-10px] h-[2px] -translate-x-1/2 rounded-full bg-[#17c58b] transition-all duration-300 ${
                        isActive ? "w-8" : "w-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}