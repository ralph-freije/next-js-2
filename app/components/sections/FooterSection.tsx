"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
    const footerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".footer-cta",
                {
                    y: 55,
                    opacity: 0,
                    scale: 0.96,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.85,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".footer-cta",
                        start: "top 88%",
                    },
                }
            );

            gsap.fromTo(
                ".footer-column",
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".footer-content",
                        start: "top 88%",
                    },
                    onComplete: () => {
                        gsap.set(".footer-column", { clearProps: "all" });
                    },
                }
            );

            gsap.fromTo(
                ".footer-link",
                {
                    x: -14,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.45,
                    stagger: 0.06,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".footer-pages",
                        start: "top 90%",
                    },
                    onComplete: () => {
                        gsap.set(".footer-link", { clearProps: "all" });
                    },
                }
            );

            gsap.fromTo(
                ".footer-social",
                {
                    y: 16,
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.45,
                    stagger: 0.08,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".footer-socials",
                        start: "top 90%",
                    },
                    onComplete: () => {
                        gsap.set(".footer-social", { clearProps: "all" });
                    },
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={footerRef} className="w-full bg-[#17c58b] pt-32 pb-20 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative">
                <div className="footer-cta bg-[#0b3f35] rounded-xl px-12 md:px-24 py-14 text-center -mt-65">
                    <h2 className="text-xl md:text-3xl font-semibold text-white">
                        Register your CV now!
                    </h2>

                    <p className="mt-4 text-sm text-gray-300 max-w-xl mx-auto md:pb-10 pb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.
                    </p>

                    <Link href="/sign-up" className="mt-8 border border-white text-white px-6 py-2 rounded-md text-sm hover:bg-white hover:text-[#0b3f35] transition cursor-pointer">
                        Register Now
                    </Link>
                </div>
            </div>

            <div className="footer-content max-w-7xl mx-auto px-6 md:px-10 lg:px-12 text-white mt-16">
                <div className="grid grid-cols-2 md:grid-cols-[2fr_1.5fr_0.5fr_0fr] gap-x-30 gap-y-20">
                    <div className="footer-column col-span-2 md:col-span-1">
                        <h2 className="text-4xl font-bold text-black md:mt-5">
                            Job<span className="text-white">NQw</span>
                        </h2>

                        <p className="mt-4 text-sm max-w-xl text-white/80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul className="text-sm text-white/80 space-y-2">
                            <li>Address: 123 Fifth Avenue, New York - 1060, USA.</li>
                            <li>Call Us: +1 (800) 456 7890</li>
                            <li>Email: yourid@example.com</li>
                            <li>Mon Sat: 9:00 AM - 19:00 PM</li>
                        </ul>
                    </div>

                    <div className="footer-column footer-pages">
                        <h3 className="text-xl font-semibold mb-4">Pages</h3>
                        <ul className="text-sm text-white/80 space-y-2">
                            <li>
                                <Link href="/" className="footer-link flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/job" className="footer-link flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> Jobs
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="footer-link flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> Facilities
                                </a>
                            </li>
                            <li>
                                <Link href="/about" className="footer-link flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> About Us
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Beirut%2C%20Lebanon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition"
                                >
                                    <span>›</span> Location
                                </a>
                            </li>
                            <li>
                                <Link href="/contact" className="footer-link flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column col-span-2 md:col-span-1">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

                        <div className="footer-socials flex items-center gap-4">
                            <Globe className="footer-social w-5 h-5 cursor-pointer transition hover:scale-110" />
                            <FaFacebook className="footer-social w-5 h-5 cursor-pointer transition hover:scale-110" />
                            <FaTwitter className="footer-social w-5 h-5 cursor-pointer transition hover:scale-110" />
                            <FaLinkedin className="footer-social w-5 h-5 cursor-pointer transition hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}