"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "@/components/auth/SocialButtons";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-[#fbfcfb] px-4 py-3 text-gray-900 outline-none placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-100";

const labelClass = "mb-1.5 block text-sm font-semibold text-gray-900";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (reason === "unauthorized") {
      toast.error("এই পেজটি দেখতে আগে সাইন ইন করুন!", {
        id: "unauthorized-toast",
      });

      router.replace("/signin");
    }
  }, [reason, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.signIn.email({
        ...user,
      });

      if (error) {
        toast.error(error.message || "সাইন ইন সফল হয়নি!");
        return;
      }

      if (data) {
        toast.success("সাইন ইন সফল হয়েছে!");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      toast.error(error.message || "কিছু একটা সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto flex max-w-105 flex-col items-center py-8 sm:py-10">
      {" "}
      <h1 className="text-3xl font-bold text-gray-900">সাইন ইন</h1>
      <p className="mt-2 text-center text-sm text-gray-600">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <div className="mt-6 w-full rounded-3xl border border-gray-200 bg-[#fbfcfb] p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className={labelClass}>
              ইমেইল
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="password" className={labelClass}>
              পাসওয়ার্ড
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="current-password"
              required
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-green-700 px-4 py-3 font-semibold text-white shadow-md shadow-green-900/20 transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
          </button>
        </form>

        <SocialButtons disabled={isLoading} />

        <p className="mt-5 text-center text-sm text-gray-900">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/signup"
            className="font-medium text-green-700 hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>
      <Link
        href="/"
        className="mt-6 text-sm text-gray-600 hover:text-green-700"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </main>
  );
}