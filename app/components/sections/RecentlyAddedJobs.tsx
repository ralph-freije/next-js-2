"use client";

import { MapPin, Clock } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

export default function RecentlyAddedJobs() {
  const jobs = [
    {
      title: "UI/UX Designer",
      company: "Dimension Studio",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
      image: "/images/job1.jpg",
    },
    {
      title: "Full Stack Developer",
      company: "Aploder",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
      image: "/images/job2.jpg",
    },
    {
      title: "Product Designer",
      company: "Xpeed Tech",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
      image: "/images/job3.png",
    },
    {
      title: "Backend Engineer",
      company: "DevCore",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
      image: "/images/job4.jpg",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Recently Added Jobs
          </h2>

          <p className="mt-3 text-sm text-[#6b7280] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-10"
        >
          {jobs.map((job, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-pointer h-full">

                <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                  <Image
                    src={job.image}
                    alt={job.title}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-sm font-bold text-black">
                  {job.title}
                </h3>

                <p className="text-xs font-medium text-[#6b7280] mt-1">
                  {job.company}
                </p>

                <p className="text-xs text-[#9ca3af] mt-3 leading-relaxed">
                  {job.desc}
                </p>

          <div className="flex items-center gap-3 mt-4 text-xs text-black font-bold">
  <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
    <MapPin className="w-3.5 h-3.5 text-black" />
    San Francisco, CA
  </span>

  <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
    <Clock className="w-3.5 h-3.5 text-black" />
    Full Time
  </span>
</div>

                <button className="mt-4 text-[#17c58b] text-sm font-bold cursor-pointer hover:underline">
                  Apply Now →
                </button>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-10">
          <button className="cursor-pointer border border-[#17c58b] text-[#17c58b] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#17c58b] hover:text-white transition">
            View More
          </button>
        </div>

      </div>
    </section>
  );
}