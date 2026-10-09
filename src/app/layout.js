import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Suspense } from "react";
import CategoryNavigation from "@/components/layout/CategoryNavigation";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" data-theme="light">
      <body className={notoSerifBengali.className}>
        <header className="border-b border-gray-200 bg-[#fbfcfb]">
          <Navbar />

          <Suspense
            fallback={
              <div className="mx-auto flex max-w-6xl gap-2 border-t border-gray-100 px-4 py-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="skeleton h-10 w-24 shrink-0 rounded-xl" />
                ))}
              </div>
            }
          >
            <CategoryNavigation/>
          </Suspense>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>

      </body>
    </html>
  );
}
