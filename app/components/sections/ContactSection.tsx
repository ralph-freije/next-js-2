"use client";

import { useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const googleLocation =
  "https://www.google.com/maps/search/?api=1&query=Beirut%2C%20Lebanon";

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    text: "support@jobnqw.com",
    href: "mailto:support@jobnqw.com",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "+961 70 000 000",
    href: "tel:+96170000000",
  },
  {
    icon: MapPin,
    title: "Location",
    text: "Beirut, Lebanon",
    href: googleLocation,
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Mon - Fri, 9:00 AM - 5:00 PM",
    href: null,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-info-content",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info-content",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".contact-card",
        {
          y: 35,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-cards-grid",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".contact-form-box",
        {
          x: 50,
          opacity: 0,
          scale: 0.97,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form-box",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".contact-form-field",
        {
          y: 22,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.07,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form-box",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".contact-office-card",
        {
          y: 55,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-office-card",
            start: "top 88%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pt-16 pb-50 md:pt-24 md:pb-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="contact-info-content">
              <span className="inline-flex rounded-full bg-[#17c58b]/10 px-5 py-2 text-sm font-medium text-[#17c58b]">
                Get in touch
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-black md:text-5xl">
                We are here to answer your questions
              </h2>

              <p className="mt-4 max-w-xl text-base leading-8 text-[#6b7280]">
                Whether you are looking for support, partnership details, or more information about our job platform, our team is ready to help.
              </p>
            </div>

            <div className="contact-cards-grid mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => {
                const Icon = item.icon;

                const cardContent = (
                  <>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#17c58b]/10">
                      <Icon className="h-5 w-5 text-[#17c58b]" />
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-black">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                      {item.text}
                    </p>
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.title === "Location" ? "_blank" : undefined}
                      rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                      className="contact-card cursor-pointer rounded-2xl border border-[#e5e7eb] bg-[#f8f8f8] p-5 transition hover:bg-white hover:shadow-lg"
                    >
                      {cardContent}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.title}
                    className="contact-card cursor-pointer rounded-2xl border border-[#e5e7eb] bg-[#f8f8f8] p-5 transition hover:bg-white hover:shadow-lg"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="contact-form-box rounded-3xl border border-[#e5e7eb] bg-[#f8f8f8] p-5 shadow-lg md:p-8">
            <div className="rounded-3xl bg-white p-5 md:p-7">
              <h3 className="text-2xl font-bold text-black">
                Send a message
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#6b7280]">
                Fill the form below and we will contact you as soon as possible.
              </p>

              <form className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="contact-form-field">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#374151]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="h-12 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-gray-400 focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <div className="contact-form-field">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#374151]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="h-12 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-gray-400 focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <div className="contact-form-field">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#374151]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="h-12 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-gray-400 focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <div className="contact-form-field">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#374151]">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Message subject"
                    className="h-12 w-full rounded-2xl border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-gray-400 focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <div className="contact-form-field md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#374151]">
                    Message
                  </label>
                  <textarea
                    placeholder="Write your message"
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-[#e5e7eb] bg-[#f8f8f8] px-4 py-4 text-sm font-medium text-black outline-none transition placeholder:text-gray-400 focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="contact-form-field md:col-span-2 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[#17c58b] text-sm font-semibold text-white shadow-lg transition hover:bg-[#13b77f]"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <a
          href={googleLocation}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-office-card mt-12 block cursor-pointer overflow-hidden rounded-3xl border border-[#e5e7eb] bg-[#f2f2f2] p-6 transition hover:bg-[#edf8f4] md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-black">
                Visit our office
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-[#6b7280]">
                We are based in Beirut and work with candidates and companies to create a smoother job search experience.
              </p>
            </div>

            <div className="flex min-h-64 items-center justify-center rounded-3xl bg-white">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#17c58b]/10">
                  <MapPin className="h-7 w-7 text-[#17c58b]" />
                </div>

                <h4 className="mt-4 text-xl font-semibold text-black">
                  Beirut, Lebanon
                </h4>

                <p className="mt-2 text-sm font-medium text-[#17c58b]">
                  Open location in Google Maps
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}