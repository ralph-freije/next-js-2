"use client";

import { FileText } from "lucide-react";
import CreateAccountIcons from "../icons/CreateAccountIcons";
import ClipboardSearchIcon from "../icons/ClipboardSearchIcon";
import UploadIcons from "../icons/UploadIcons";

export default function HowItWorks() {
  const steps = [
    {
      icon: <CreateAccountIcons className="w-6 h-6 text-[#17c58b]" />,
      title: "Register",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: <FileText className="w-6 h-6 text-[#17c58b]" />,
      title: "Create a Resume",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: <ClipboardSearchIcon className="w-6 h-6 text-[#17c58b]" />,
      title: "Find Job",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
    {
      icon: <UploadIcons className="w-6 h-6 text-[#17c58b]" />,
      title: "Apply Job",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-[750px]">
            <h2 className="text-xl md:text-2xl font-semibold text-black">
              How it works
            </h2>

            <p className="mt-3 text-sm text-[#6b7280] leading-relaxed max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
            </p>
          </div>

          <button className="w-[170px] h-12 hidden cursor-pointer md:block border border-[#17c58b] text-[#17c58b] px-5 py-2 rounded-[10px] text-sm font-medium hover:bg-[#17c58b] hover:text-white transition">
            Learn More
          </button>
        </div>

        <div className="cursor-pointer hover:bg-[#f3f3f3] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white hover:bg-[#f3f3f3] rounded-[16px] p-4 h-[180px] flex flex-col justify-start shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition"
            >
              <div className="w-12 h-12 flex items-start justify-start">
                <div className="scale-125">{step.icon}</div>
              </div>

           <h3 className="-mt-2 text-lg font-semibold text-black">
  {step.title}
</h3>

<p className="mt-1 text-xs text-[#9ca3af] leading-snug max-w-[180px] line-clamp-7">
  {step.desc}
</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <button className="cursor-pointer border border-[#17c58b] text-[#17c58b] px-6 py-2 rounded-[10px] text-sm font-medium hover:bg-[#17c58b] hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}