"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import Logo from "../components/icons/Logo";
import CreateAccountIcons from "../components/icons/CreateAccountIcons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verification, setVerification] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    if (!verification) {
      setError("Please confirm that the information is correct.");
      return;
    }

    setError("");
    router.push("/job");
  };

  return (
    <main className={`${poppins.className} min-h-screen bg-[#f2f2f2] overflow-hidden`}>
      <section className="relative min-h-screen flex items-center justify-center px-6 py-10">
        <div className="absolute right-0 top-0 hidden md:block h-full w-[42%] bg-[#17c58b] rounded-bl-[90px]" />
        <div className="absolute left-[-120px] bottom-[-120px] h-[280px] w-[280px] rounded-full bg-[#17c58b]/10" />
        <div className="absolute right-[12%] top-[18%] hidden md:block h-20 w-20 rounded-[22px] bg-white/20 rotate-12" />
        <div className="absolute right-[26%] bottom-[18%] hidden md:block h-16 w-16 rounded-[18px] bg-white/20 -rotate-12" />

        <div className="relative z-10 w-full max-w-7xl">
          <div className="mb-10 flex items-center justify-between">
            <Link href="/">
              <Logo />
            </Link>

            <Link
              href="/"
              className="cursor-pointer rounded-full border border-white/70 bg-white/90 px-5 py-2.5 text-sm font-semibold text-[#1f2937] shadow-[0_10px_24px_rgba(0,0,0,0.08)] backdrop-blur transition hover:bg-[#1f2937] hover:text-white md:border-white/40"
            >
              Back Home
            </Link>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[48%_52%]">
            <div className="hidden lg:block">
              <span className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-[#17c58b] shadow-sm">
                Welcome back
              </span>

              <h1 className="mt-6 max-w-xl text-[44px] font-bold leading-[1.15] text-black">
                Find jobs faster and continue your journey with Creoshift.
              </h1>

              <p className="mt-5 max-w-md text-[15px] leading-8 text-[#4b5563]">
                Sign in to manage your applications, save opportunities, and discover new jobs that match your skills.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[500px] rounded-[30px] border border-white/70 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.10)] sm:p-8 md:p-10">
              <div className="text-center">
            

                <h2 className="text-[30px] font-bold text-black sm:text-[36px]">
                  Sign In
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                  Enter your details to access your account.
                </p>
              </div>

              <form onSubmit={handleSignIn} className="mt-8 space-y-5">
                <div>
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

                <div>
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
                  <div className="rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="cursor-pointer h-12 w-full rounded-[14px] bg-[#17c58b] text-sm font-semibold text-white shadow-[0_12px_26px_rgba(23,197,139,0.28)] transition hover:bg-[#13b77f]"
                >
                  Sign In
                </button>
              </form>

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#e5e7eb]" />
                <span className="text-xs font-medium text-[#9ca3af]">
                  OR
                </span>
                <div className="h-px flex-1 bg-[#e5e7eb]" />
              </div>

              <Link
                href="/sign-up"
                className="cursor-pointer flex h-12 w-full items-center justify-center gap-2 rounded-[14px] border border-[#e5e7eb] bg-white text-sm font-semibold text-black shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition hover:bg-[#f8f8f8]"
              >
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}