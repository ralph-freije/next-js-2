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
    <main className={`${poppins.className} min-h-screen bg-[#f2f2f2] px-6 py-8`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <Link
          href="/"
          className="cursor-pointer rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#1f2937] shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition hover:bg-[#17c58b] hover:text-white"
        >
          Back Home
        </Link>
      </div>

      <section className="flex min-h-[calc(100vh-96px)] items-center justify-center py-10">
        <div className="w-full max-w-[680px] rounded-[30px] border border-[#e5e7eb] bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-8 md:p-10">
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
                className={`flex h-12 w-full cursor-pointer items-center justify-between rounded-[14px] border bg-[#f8f8f8] px-4 text-left text-sm font-medium text-black outline-none transition ${
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
                      className={`w-full cursor-pointer rounded-[10px] px-4 py-3 text-left text-sm font-medium transition ${
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
              className="md:col-span-2 h-12 w-full cursor-pointer rounded-[14px] bg-[#17c58b] text-sm font-semibold text-white shadow-[0_12px_26px_rgba(23,197,139,0.28)] transition hover:bg-[#13b77f]"
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
      </section>
    </main>
  );
}