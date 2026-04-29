"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";

const galleryImages = [
  {
    src: "/images/job1.jpg",
    alt: "Gallery image 1",
  },
  {
    src: "/images/job2.jpg",
    alt: "Gallery image 2",
  },
  {
    src: "/images/job3.png",
    alt: "Gallery image 3",
  },
  {
    src: "/images/job4.jpg",
    alt: "Gallery image 4",
  },
  {
    src: "/images/promo.jpg",
    alt: "Gallery image 5",
  },
  {
    src: "/gallery/download (1).jpg",
    alt: "Gallery image 6",
  },
  {
    src: "/gallery/download(2).jpg",
    alt: "Gallery image 7",
  },
  {
    src: "/gallery/download(3).jpg",
    alt: "Gallery image 8",
  },
  {
    src: "/gallery/download(4).jpg",
    alt: "Gallery image 9",
  },
  {
    src: "/gallery/download(5).jpg",
    alt: "Gallery image 10",
  },
  {
    src: "/gallery/download(6).jpg",
    alt: "Gallery image 11",
  },
  {
    src: "/gallery/download(7).jpg",
    alt: "Gallery image 12",
  },
];

const breakpointColumns = {
  default: 4,
  1280: 4,
  1024: 3,
  640: 2,
  0: 1,
};

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    alt: string;
  }>(null);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#17c58b]/10 px-5 py-2 text-sm font-medium text-[#17c58b]">
            Gallery
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-black md:text-5xl">
            A glimpse into our community
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#6b7280]">
            Explore moments, spaces, and stories that reflect the people and opportunities behind our platform.
          </p>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="mt-12 flex gap-5"
          columnClassName="flex flex-col gap-5"
        >
          {galleryImages.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-[#f8f8f8] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </Masonry>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-5 py-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-2xl font-medium text-black shadow-lg transition hover:bg-[#17c58b] hover:text-white"
          >
            ×
          </button>

          <div
            className="max-h-[90vh] max-w-6xl overflow-hidden rounded-3xl p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}