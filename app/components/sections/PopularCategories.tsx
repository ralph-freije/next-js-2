"use client";

import { Briefcase, LineChart, Landmark, Timer } from "lucide-react";
import { useRef, useState } from "react";

export default function PopularCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

const categories = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Design and Development",
    jobs: "350 Job Vacancy",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Accounting and Finance",
    jobs: "280 Job Vacancy",
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "Bank Institution",
    jobs: "190 Job Vacancy",
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: "Product Management",
    jobs: "220 Job Vacancy",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Marketing & Sales",
    jobs: "310 Job Vacancy",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Customer Support",
    jobs: "150 Job Vacancy",
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: "Human Resources",
    jobs: "120 Job Vacancy",
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: "IT & Networking",
    jobs: "260 Job Vacancy",
  },
];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-12">

        <div className="text-center max-w-[600px] mx-auto">
   <h2 className="text-xl md:text-2xl font-semibold text-black">
            Popular Job Categories
          </h2>

          <p className="mt-3 text-sm  text-[#6b7280] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="mt-10 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-5 min-w-max px-1">

            {categories.map((cat, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`min-w-[220px] rounded-[14px] p-5 transition cursor-pointer select-none ${
                  activeIndex === i
                    ? "bg-[#17c58b] text-white"
                    : "bg-white hover:bg-[#f3f3f3]"
                }`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-[10px] ${
                    activeIndex === i ? "bg-white/20" : "bg-[#ecfdf5]"
                  }`}
                >
                  {cat.icon}
                </div>

                <h3
                  className={`mt-4 text-sm font-semibold ${
                    activeIndex === i ? "text-white" : "text-black"
                  }`}
                >
                  {cat.title}
                </h3>

                <p
                  className={`mt-2 text-xs ${
                    activeIndex === i ? "text-white/80" : "text-[#9ca3af]"
                  }`}
                >
                  {cat.jobs}
                </p>
              </div>
            ))}

          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="cursor-pointer border border-[#17c58b] text-[#17c58b] px-6 py-2 rounded-[10px] text-sm font-medium hover:bg-[#17c58b] hover:text-white transition">
            View More
          </button>
        </div>

      </div>
    </section>
  );
}