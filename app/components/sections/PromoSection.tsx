"use client";

import Image from "next/image";

export default function PromoSection() {
  return (
    <section className="w-full bg-white py-6 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-4/5">
            <div className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/promo.jpg"
                alt="Promo"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>

          <div className="w-full md:w-5/5 text-center md:text-left">
            <h2 className="text-lg md:text-4xl font-semibold text-black leading-snug">
              We will help you to become an employee in your dream company
            </h2>

            <p className="mt-4 text-sm text-[#6b7280] leading-relaxed max-w-md mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
            </p>

            <button className="cursor-pointer mt-6 border border-[#17c58b] text-[#17c58b] px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#17c58b] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}