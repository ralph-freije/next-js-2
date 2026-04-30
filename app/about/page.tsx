"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../components/icons/Logo";
import CreateAccountIcons from "../components/icons/CreateAccountIcons";
import AboutTimelineSection from "../components/sections/AboutTimelineSection";
import AboutMediaHighlightsSection from "../components/sections/AboutMediaHighlightsSection";
import AboutVideoSection from "../components/sections/AboutVideoSection";
import FooterSection from "../components/sections/FooterSection";
import GallerySection from "../components/sections/GallerySection";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function AboutPage() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const pageRef = useRef<HTMLElement | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Job", href: "/job" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-logo", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".about-nav", {
        y: -18,
        opacity: 0,
        duration: 0.65,
        delay: 0.08,
        ease: "power3.out",
      });

      gsap.from(".about-auth-actions", {
        y: -18,
        opacity: 0,
        duration: 0.65,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".about-badge", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".about-title", {
        y: 45,
        opacity: 0,
        duration: 0.9,
        delay: 0.32,
        ease: "power3.out",
      });

      gsap.from(".about-text", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        delay: 0.48,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".about-section-animate").forEach((section) => {
        gsap.from(section, {
          y: 55,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!open) return;

    gsap.fromTo(
      ".about-mobile-overlay",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".about-mobile-menu",
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".about-mobile-link",
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
    );
  }, [open]);

  const closeMenu = () => {
    gsap.to(".about-mobile-menu", {
      x: 120,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });

    gsap.to(".about-mobile-overlay", {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => setOpen(false),
    });
  };

  return (
    <main ref={pageRef} className={`${poppins.className} min-h-screen bg-white overflow-x-hidden`}>
      <section className="w-full bg-[#f2f2f2]">
        <div className="mx-auto max-w-7xl px-6 pt-7 pb-16 md:px-10 md:pt-9 lg:px-12">
          <div className="flex items-center justify-between">
            <Link href="/" className="about-logo shrink-0">
              <Logo />
            </Link>

            <nav className="about-nav hidden items-center gap-[46px] text-[14px] font-medium text-[#1f2937] md:flex">
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

            <div className="about-auth-actions hidden md:flex items-center gap-6">
              <Link
                href="/sign-in"
                className="cursor-pointer text-[14px] font-medium text-[#1f2937] hover:text-[#17c58b] transition"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="cursor-pointer hover:bg-[#f4f9ef] flex items-center gap-2 rounded-[18px] bg-white px-6 py-[14px] text-[14px] font-medium text-black border border-[#e5e7eb] shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition"
              >
                <CreateAccountIcons className="w-5 h-5 text-[#17c58b]" />
                <span>Create Account</span>
              </Link>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="rounded-lg bg-[#17c58b] px-3 py-2 text-lg leading-none text-white md:hidden"
            >
              ☰
            </button>
          </div>

          <div className="mx-auto max-w-3xl pt-16 text-center md:pt-24">
            <span className="about-badge inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-[#17c58b] shadow-sm">
              About JobNQw
            </span>

            <h1 className="about-title mt-6 text-[38px] font-bold leading-[1.15] text-black md:text-[56px]">
              Connecting people with better opportunities
            </h1>

            <p className="about-text mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-[#4b5563]">
              We help job seekers discover roles, build confidence, and apply faster through a clean and simple hiring experience.
            </p>
          </div>
        </div>
      </section>

      {open && (
        <div className="about-mobile-overlay fixed inset-0 z-[9999] bg-black/40" onClick={closeMenu}>
          <div
            className="about-mobile-menu absolute right-0 top-0 flex h-full w-72 flex-col gap-6 bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeMenu} className="about-mobile-link self-end text-xl">
              ✕
            </button>

            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`about-mobile-link relative w-fit text-[15px] font-medium transition ${
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
              onClick={closeMenu}
              className="about-mobile-link mt-3 text-left text-[15px] font-medium text-[#374151] hover:text-[#17c58b] transition"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              onClick={closeMenu}
              className="about-mobile-link flex items-center justify-center gap-2 rounded-[14px] bg-white px-4 py-3 text-[15px] font-medium text-black border border-[#e5e7eb] shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:bg-[#f8fcf8] transition"
            >
              <CreateAccountIcons className="w-5 h-5 text-[#17c58b]" />
              <span>Create Account</span>
            </Link>
          </div>
        </div>
      )}

      <div className="about-section-animate">
        <AboutTimelineSection />
      </div>

      <div className="about-section-animate">
        <AboutMediaHighlightsSection />
      </div>

      <div className="about-section-animate">
        <GallerySection />
      </div>

      <div className="about-section-animate">
        <AboutVideoSection />
      </div>

      <FooterSection />
    </main>
  );
}