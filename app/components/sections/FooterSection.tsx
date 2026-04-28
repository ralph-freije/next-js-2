"use client";
import Link from "next/link";
import { Globe } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function FooterSection() {
    return (
      <section className="w-full bg-[#17c58b] pt-32 pb-20 relative">

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative">
                <div className="bg-[#0b3f35] rounded-xl px-12 md:px-24 py-14 text-center -mt-65">

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
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 text-white mt-16">

              <div className="grid grid-cols-2 md:grid-cols-[2fr_1.5fr_0.5fr_0fr] gap-x-30 gap-y-20">

                    <div className="col-span-2 md:col-span-1">
                        <h2 className="text-4xl font-bold text-black  md:mt-5">
                            Job<span className="text-white">NQw</span>
                        </h2>

                        <p className="mt-4 text-sm max-w-xl text-white/80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ul className="text-sm text-white/80 space-y-2">
                            <li>Address: 123 Fifth Avenue, New York - 1060, USA.</li>
                            <li>Call Us: +1 (800) 456 7890</li>
                            <li>Email: yourid@example.com</li>
                            <li>Mon Sat: 9:00 AM - 19:00 PM</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Pages</h3>
                        <ul className="text-sm text-white/80 space-y-2">
                            <li>
                                <a href="#" className="flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> Booking
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> Facilities
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> Location
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex gap-2 items-center cursor-pointer hover:underline hover:text-white transition">
                                    <span>›</span> Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

                        <div className="flex items-center gap-4">
                            <Globe className="w-5 h-5 cursor-pointer" />
                            <FaFacebook className="w-5 h-5 cursor-pointer" />
                            <FaTwitter className="w-5 h-5 cursor-pointer" />
                            <FaLinkedin className="w-5 h-5 cursor-pointer" />
                        </div>
                    </div>


                </div>

            </div>

        </section>
    );
}