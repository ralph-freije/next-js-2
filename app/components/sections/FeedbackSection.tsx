"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeedbackSection() {
  const feedbacks = [
    {
      text: "Lorem ipsum dolor sit amet...",
      name: "Brown Garcia",
      role: "Full Stack Developer in XReact Tech",
      image: "/images/default.jpg",
    },
    {
      text: "Second feedback example...",
      name: "Sarah Johnson",
      role: "UI Designer at Pixel Studio",
      image: "/images/default2.jpg",
    },
    {
      text: "Third feedback...",
      name: "Michael Lee",
      role: "Backend Engineer at DevCore",
      image: "/images/default2.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  const current = feedbacks[index];

  return (
    <section className="w-full bg-gray-100 pt-16 pb-60 md:pt-10 md:pb-70">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              People's Feedback about JobNow!
            </h2>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.
            </p>

            <p className="mt-6 text-sm text-black leading-relaxed max-w-md mx-auto md:mx-0">
              "{current.text}"
            </p>

            <div className="mt-8 flex justify-center md:hidden">
              <div className="w-72 h-72 rounded-xl overflow-hidden relative">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#17c58b]/20"></div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-black">
                {current.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {current.role}
              </p>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-3 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer md:hover:bg-[#17c58b]"
              >
                <ArrowLeft className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-[#17c58b] md:bg-gray-300 flex items-center justify-center cursor-pointer md:hover:bg-[#17c58b]"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex md:w-1/2 justify-end items-center mt-6">
            <div className="w-80 h-80 rounded-xl overflow-hidden relative">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#17c58b]/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}