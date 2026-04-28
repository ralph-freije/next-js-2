"use client";

import { useState } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Logo from "../components/icons/Logo";
import CreateAccountIcons from "../components/icons/CreateAccountIcons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function SignUpPage() {
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState("Male");

  const genders = ["Male", "Female"];

  return (
    <main className={`${poppins.className} min-h-screen bg-[#f2f2f2] overflow-hidden`}>
      <section className="relative min-h-screen flex items-center justify-center px-6 py-10">
        <div className="absolute right-0 top-0 hidden md:block h-full w-[42%] bg-[#17c58b] rounded-bl-[90px]" />
        <div className="absolute left-[-120px] bottom-[-120px] h-[280px] w-[280px] rounded-full bg-[#17c58b]/10" />
        <div className="absolute right-[12%] top-[16%] hidden md:block h-20 w-20 rounded-[22px] bg-white/20 rotate-12" />
        <div className="absolute right-[28%] bottom-[16%] hidden md:block h-16 w-16 rounded-[18px] bg-white/20 -rotate-12" />

        <div className="relative z-10 w-full max-w-7xl">
          <div className="mb-10 flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/70 bg-white/90 px-5 py-2.5 text-sm font-semibold text-[#1f2937] shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur transition hover:bg-[#1f2937] hover:text-white md:border-white/40"
            >
              Back Home
            </Link>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[42%_58%]">
            <div className="hidden lg:block">
              <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-[#17c58b] shadow-sm">
                Start today
              </span>

              <h1 className="mt-6 max-w-xl text-[44px] font-bold leading-[1.15] text-black">
                Create your account and apply for better opportunities.
              </h1>

              <p className="mt-5 max-w-md text-[15px] leading-8 text-[#4b5563]">
                Join Creoshift to search jobs, track applications, and build a profile that helps companies find you.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[680px] rounded-[30px] border border-white/70 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.10)] sm:p-8 md:p-10">
              <div className="text-center">


                <h2 className="text-[30px] font-bold text-black sm:text-[36px]">
                  Create Account
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                  Fill in your information to get started.
                </p>
              </div>

              <form className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#374151]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="h-12 w-full rounded-[14px] border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-[#9ca3af] focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#374151]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="h-12 w-full rounded-[14px] border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-[#9ca3af] focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <div className="relative">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#374151]">
                    Gender
                  </label>

                  <button
                    type="button"
                    onClick={() => setGenderOpen(!genderOpen)}
                    className={`flex h-12 w-full items-center justify-between rounded-[14px] border bg-[#f8f8f8] px-4 text-left text-sm font-medium text-black outline-none transition ${
                      genderOpen
                        ? "border-[#17c58b] bg-white ring-4 ring-[#17c58b]/10"
                        : "border-[#e5e7eb] hover:bg-white"
                    }`}
                  >
                    <span>{gender}</span>
                    <span className={`text-[#9ca3af] transition ${genderOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {genderOpen && (
                    <div className="absolute left-0 right-0 top-[76px] z-50 rounded-[14px] border border-[#e5e7eb] bg-white p-2 shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                      {genders.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setGender(item);
                            setGenderOpen(false);
                          }}
                          className={`w-full rounded-[10px] px-4 py-3 text-left text-sm font-medium transition ${
                            gender === item
                              ? "bg-[#17c58b] text-white"
                              : "text-[#374151] hover:bg-[#f3f3f3]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#374151]">
                    Birthday
                  </label>
                  <input
                    type="date"
                    className="h-12 w-full rounded-[14px] border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#374151]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="h-12 w-full rounded-[14px] border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-[#9ca3af] focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#374151]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="h-12 w-full rounded-[14px] border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-[#9ca3af] focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#374151]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create password"
                    className="h-12 w-full rounded-[14px] border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-[#9ca3af] focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="md:col-span-2 h-12 w-full rounded-[14px] bg-[#17c58b] text-sm font-semibold text-white shadow-[0_12px_26px_rgba(23,197,139,0.28)] transition hover:bg-[#13b77f]"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-7 text-center text-sm font-medium text-[#6b7280]">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-[#17c58b] hover:text-black transition">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}