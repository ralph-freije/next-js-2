"use client";

import { FileText } from "lucide-react";
import CreateAccountIcons from "../icons/CreateAccountIcons";
import ClipboardSearchIcon from "../icons/ClipboardSearchIcon";
import UploadIcons from "../icons/UploadIcons";

export default function HowItWorks() {
  const steps = [
    {
      icon: <CreateAccountIcons className="w-[43px] h-[43px] text-[#17c58b]" />,
      title: "Register",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: <FileText className="w-[43px] h-[43px] text-[#17c58b]" />,
      title: "Create a Resume",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: <ClipboardSearchIcon className="w-[43px] h-[43px] text-[#17c58b]" />,
      title: "Find Job",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: <UploadIcons className="w-[43px] h-[43px] text-[#17c58b]" />,
      title: "Apply Job",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfb] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              How it works
            </h2>

            <p className="mt-3 text-sm text-[#6b7280] leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
            </p>
          </div>

          <button className="w-44 h-12 hidden cursor-pointer md:block border border-[#17c58b] text-[#17c58b] px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#17c58b] hover:text-white transition">
            Learn More
          </button>
        </div>

        <div className="cursor-pointer grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white hover:bg-[#f3f3f3] rounded-xl p-4 h-44 flex flex-col justify-start shadow-md hover:shadow-lg  transition"
            >
              <div className="w-12 h-12 flex items-start justify-start">
                <div className="scale-110">{step.icon}</div>
              </div>

              <h3 className="mt-2 text-lg font-semibold text-black">
                {step.title}
              </h3>

              <p className="mt-1 text-xs text-[#9ca3af] leading-snug max-w-xs line-clamp-6">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <button className="cursor-pointer border border-[#17c58b] text-[#17c58b] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#17c58b] hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}