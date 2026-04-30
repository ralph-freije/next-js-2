"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import gsap from "gsap";
import Logo from "../components/icons/Logo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function SignInPage() {
  const router = useRouter();
  const pageRef = useRef<HTMLElement | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".signin-logo",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      gsap.fromTo(
        ".signin-back",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.08, ease: "power3.out" }
      );

      gsap.fromTo(
        ".signin-card",
        { y: 45, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          delay: 0.18,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".signin-title",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.35,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".signin-animate",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          delay: 0.48,
          ease: "power3.out",
          onComplete: () => {
            gsap.set(".signin-animate", { clearProps: "all" });
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!error) return;

    gsap.fromTo(
      ".signin-error",
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  }, [error]);

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    router.push("/job");
  };

  return (
    <main ref={pageRef} className={`${poppins.className} min-h-screen bg-[#f2f2f2] px-6 py-8`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/" className="signin-logo">
          <Logo />
        </Link>

        <Link
          href="/"
          className="signin-back cursor-pointer rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#1f2937] shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition hover:bg-[#17c58b] hover:text-white"
        >
          Back Home
        </Link>
      </div>

      <section className="flex min-h-[calc(100vh-96px)] items-center justify-center py-10">
        <div className="signin-card w-full max-w-[500px] rounded-[30px] border border-[#e5e7eb] bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-8 md:p-10">
          <div className="signin-title text-center">
            <h2 className="text-[30px] font-bold text-black sm:text-[36px]">
              Sign In
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#6b7280]">
              Enter your details to access your account.
            </p>
          </div>

          <form onSubmit={handleSignIn} className="mt-8 space-y-5">
            <div className="signin-animate">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#374151]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-[14px] border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-[#9ca3af] focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
              />
            </div>

            <div className="signin-animate">
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#374151]">
                  Password
                </label>

                <Link
                  href="#"
                  className="cursor-pointer text-xs font-medium text-[#17c58b] hover:text-black transition"
                >
                  Forgot?
                </Link>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full rounded-[14px] border border-[#e5e7eb] bg-[#f8f8f8] px-4 text-sm font-medium text-black outline-none transition placeholder:text-[#9ca3af] focus:border-[#17c58b] focus:bg-white focus:ring-4 focus:ring-[#17c58b]/10"
              />
            </div>

            {error && (
              <div className="signin-error rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="signin-animate h-12 w-full cursor-pointer rounded-[14px] bg-[#17c58b] text-sm font-semibold text-white shadow-[0_12px_26px_rgba(23,197,139,0.28)] transition hover:bg-[#13b77f]"
            >
              Sign In
            </button>
          </form>

          <div className="signin-animate my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e5e7eb]" />
            <span className="text-xs font-medium text-[#9ca3af]">
              OR
            </span>
            <div className="h-px flex-1 bg-[#e5e7eb]" />
          </div>

          <Link
            href="/sign-up"
            className="signin-animate flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-[14px] border border-[#e5e7eb] bg-white text-sm font-semibold text-black shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:bg-[#f8f8f8]"
          >
            Create New Account
          </Link>
        </div>
      </section>
    </main>
  );
}