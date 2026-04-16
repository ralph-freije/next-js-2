"use client";
import Image from "next/image";
export default function PromoSection() {
    return (
        <section className="w-full bg-[#f3f3f3] py-16 md:py-20">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="flex flex-col md:flex-row items-center gap-10">

                    <div className="w-full md:w-[45%]">

                        <div className="relative w-full h-[220px] md:h-[260px] rounded-[16px] overflow-hidden">
                            <Image
                                src="/images/promo.jpg"
                                alt="Promo"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-[55%] text-center md:text-left">
                        <h2 className="text-[20px] md:text-[26px] font-semibold text-black leading-[1.4]">
                            We will help you to become an employee in your dream company
                        </h2>

                        <p className="mt-4 text-[14px] text-[#6b7280] leading-[1.7] max-w-[420px] mx-auto md:mx-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
                        </p>

                        <button className="cursor-pointer mt-6 border border-[#17c58b] text-[#17c58b] px-5 py-2 rounded-[10px] text-[14px] font-medium hover:bg-[#17c58b] hover:text-white transition">
                            Learn More
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}