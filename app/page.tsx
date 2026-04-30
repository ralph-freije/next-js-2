"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import gsap from "gsap";
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
import FooterSection from "./components/sections/FooterSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const pathname = usePathname();
  const heroRef = useRef<HTMLElement | null>(null);

  const locations = ["Beirut", "Dubai", "London", "Remote"];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Job", href: "/job" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".home-logo", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

gsap.from(".home-nav", {
  y: -18,
  opacity: 0,
  duration: 0.65,
  delay: 0.08,
  ease: "power3.out",
});

      gsap.from(".home-hero-title", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".home-hero-text", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        delay: 0.38,
        ease: "power3.out",
      });

      gsap.from(".home-search-box", {
        y: 36,
        opacity: 0,
        scale: 0.96,
        duration: 0.85,
        delay: 0.52,
        ease: "power3.out",
      });

      gsap.from(".home-green-panel", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".home-auth-actions", {
        y: -22,
        opacity: 0,
        duration: 0.7,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.from(".home-floating-icon", {
        y: 45,
        opacity: 0,
        scale: 0.85,
        duration: 0.8,
        stagger: 0.16,
        delay: 0.65,
        ease: "back.out(1.7)",
      });

      gsap.to(".home-floating-icon", {
        y: -12,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.35,
      });
    }, heroRef);
  
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!open) return;

    gsap.fromTo(
      ".home-mobile-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: "power2.out" }
    );

    gsap.fromTo(
      ".home-mobile-menu",
      { x: 120, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
    );

gsap.fromTo(
  ".home-mobile-link",
  {
    x: 25,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.35,
    stagger: 0.06,
    delay: 0.12,
    ease: "power3.out",
  }
);}, [open]);

  return (
    <main className={`${poppins.className} bg-white overflow-x-hidden`}>
      <section ref={heroRef} className="w-full bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-[54.5%_45.5%]">
          <div className="flex flex-col bg-[#f2f2f2] w-full">
            <div className="bg-[#f3f3f3] md:bg-[#f2f2f2]">
              <div className="mx-auto flex w-full w-full px-6 pt-7 pb-6 md:px-10 md:pt-9 md:pb-6 lg:px-12">
                <div className="flex items-center justify-between w-full">
                  <Link href="/" className="home-logo shrink-0">
                    <Logo />
                  </Link>

                  <nav className="home-nav hidden items-center gap-[46px] text-[14px] font-medium text-[#1f2937] md:flex">
                    {navLinks.map((item) => {
                      const isActive = pathname === item.href;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`relative transition ${
  isActive ? "text-black" : "text-[#1f2937] hover:text-black"
}`}
                        >
                          {item.name}
                          <span
                            className={`absolute left-1/2 -translate-x-1/2 -bottom-[9px] h-[2px] rounded-full bg-[#17c58b] transition-all duration-300 ${
                              isActive ? "w-5" : "w-0"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </nav>

                  <button
                    onClick={() => setOpen(true)}
                    className="rounded-lg bg-[#17c58b] px-3 py-2 text-lg leading-none text-white md:hidden"
                  >
                    ☰
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#f2f2f2]">
              <div className="mx-auto w-full max-w-[780px] px-6 pt-12 md:pt-20 text-center md:text-left md:px-10 lg:px-12">
                <div className="mx-auto w-full max-w-[720px] md:mx-0">
                  <h1 className="home-hero-title text-[36px] md:text-[46px] font-bold leading-[1.2] text-black">
                    Search, Find, & Apply
                  </h1>

                  <p className="home-hero-text mt-5 text-[14px] md:text-[15px] leading-[1.8] max-w-[460px] text-black mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[780px] px-6 pb-12 md:px-10 md:pb-16 lg:px-12">
              <div className="home-search-box w-full mt-10 bg-white rounded-[18px] p-3">
                <div className="hidden md:flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-[#f3f3f3] px-4 h-[48px] rounded-[12px] flex-1">
                    <span className="text-[14px] text-black">🔍</span>
                    <input
                      type="text"
                      placeholder="Job title or Keyword"
                      className="text-black w-full bg-transparent text-[14px] font-medium outline-none placeholder:text-black"
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

          <div className="relative w-full md:block">
            <div className="home-green-panel absolute top-0 left-0 w-full h-full bg-[#17c58b] md:w-screen md:max-w-none rounded-none md:rounded-bl-[72px]"></div>

            <div className="home-auth-actions hidden md:flex absolute right-10 top-7 z-20 items-center gap-6">
              <Link
                href="/sign-in"
                className="cursor-pointer text-[14px] font-medium text-white hover:text-[#f4f9ef] transition"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="cursor-pointer hover:bg-[#f4f9ef] flex items-center gap-2 rounded-[18px] bg-white px-6 py-[14px] text-[14px] font-medium text-black border border-[#e5e7eb] shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition"
              >
                <CreateAccountIcons className="w-5 h-5 text-[#17c58b]" />
                <span>Create Account</span>
              </Link>
            </div>

            <div className="relative min-h-[560px]">
              <div className="home-floating-icon absolute left-[18%] top-[20%] rotate-[-5deg] rounded-[14px] bg-white p-4 shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
                <Icon1 className="w-12 h-12" />
              </div>

              <div className="home-floating-icon absolute right-[12%] top-[42%] -rotate-[-8deg] rounded-[14px] bg-white p-4 shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
                <ChartIcon className="w-12 h-12" />
              </div>

              <div className="home-floating-icon absolute bottom-[18%] left-[13%] rotate-[-8deg] rounded-[14px] bg-white p-4 shadow-[0_14px_32px_rgba(0,0,0,0.12)]">
                <ShieldIcon className="w-12 h-12" />
              </div>
            </div>
          </div>

          {open && (
            <div className="home-mobile-overlay fixed inset-0 z-[9999] bg-black/40" onClick={() => setOpen(false)}>
              <div
                className="home-mobile-menu absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-white p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setOpen(false)} className="home-mobile-link self-end text-xl">
                  ✕
                </button>

                {navLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                    className={`home-mobile-link relative w-fit text-[15px] font-medium transition ${
  isActive ? "text-black" : "text-[#374151] hover:text-black"
}`}
                    >
                      {item.name}
                      <span
                        className={`absolute left-0 -bottom-[6px] h-[2px] rounded-full bg-[#17c58b] transition-all duration-300 ${
                          isActive ? "w-5" : "w-0"
                        }`}
                      />
                    </Link>
                  );
                })}

                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className="home-mobile-link mt-3 text-left text-[15px] font-medium text-[#374151] hover:text-[#85A32B] transition"
                >
                  Sign In
                </Link>

                <Link
                  href="/sign-up"
                  onClick={() => setOpen(false)}
                  className="home-mobile-link flex items-center justify-center gap-2 rounded-[14px] bg-white px-4 py-3 text-[15px] font-medium text-black border border-[#e5e7eb] shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:bg-[#f8fcf8] transition"
                >
                  <CreateAccountIcons className="w-5 h-5 text-[#17c58b]" />
                  <span>Create Account</span>
                </Link>
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
      <FooterSection />
    </main>
  );
}