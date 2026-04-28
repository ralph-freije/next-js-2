"use client";

import { useState } from "react";

export default function AboutVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="w-full bg-white py-16 md:py-24 md:pb-50 pb-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#17c58b]/10 px-5 py-2 text-sm font-medium text-[#17c58b]">
            Our Story
          </span>

          <h2 className="mt-5 text-[32px] font-bold leading-tight text-black md:text-[46px]">
            A closer look at how we help people move forward
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-[#6b7280]">
            Watch how our platform creates a smoother connection between candidates, opportunities, and companies.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-[28px] bg-black shadow-[0_28px_80px_rgba(0,0,0,0.16)]">
          {!playing ? (
            <button
              onClick={() => setPlaying(true)}
              className="group relative block h-[320px] w-full cursor-pointer overflow-hidden text-left md:h-[520px]"
            >
              <img
                src="/images/promo.jpg"
                alt="About video poster"
                className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-75"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/40" />

              <div className="absolute left-6 top-6 md:left-10 md:top-10">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black">
                  Finest Handmade
                </span>

                <h3 className="mt-5 max-w-lg text-[34px] font-bold leading-tight text-white md:text-[56px]">
                  Designed for better career decisions
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                  Search, discover, and apply with a platform built around simplicity.
                </p>
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#17c58b] shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition group-hover:scale-110">
                <span className="ml-1 text-3xl">▶</span>
              </div>
            </button>
          ) : (
            <video
              src="/videos/about-video.mp4"
              poster="/images/promo.jpg"
              className="h-[320px] w-full object-cover md:h-[520px]"
              controls
              autoPlay
            />
          )}
        </div>
      </div>
    </section>
  );
}