"use client";

import { Globe } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function FooterSection() {
    return (
        <section className="w-full bg-[#17c58b] pt-20 pb-10 relative">

            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 relative">
                <div className="bg-[#0b3f35] rounded-xl px-6 py-10 text-center -mt-32">

                    <h2 className="text-lg md:text-xl font-semibold text-white">
                        Register your CV now!
                    </h2>

                    <p className="mt-3 text-sm text-gray-300 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.
                    </p>

                    <button className="mt-6 border border-white text-white px-5 py-2 rounded-md text-sm hover:bg-white hover:text-[#0b3f35] transition cursor-pointer">
                        Register Now
                    </button>

                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 text-white">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-10">

                    <div className="col-span-2 md:col-span-1">
                        <h2 className="text-2xl font-bold text-black">
                            Job<span className="text-white">NQw</span>
                        </h2>

                        <p className="mt-4 text-sm text-white/80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat facilisis nibh vel faucibus.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold mb-4">Company</h3>
                        <ul className="text-sm text-white/80 space-y-2">
                            <li>Address: 123 Fifth Avenue, New York - 1060, USA.</li>
                            <li>Call Us: +1 (800) 456 7890</li>
                            <li>Email: yourid@example.com</li>
                            <li>Mon Sat: 9:00 AM - 19:00 PM</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-md font-semibold mb-4">Pages</h3>
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
                        <h3 className="text-md font-semibold mb-4">Contact Us</h3>

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