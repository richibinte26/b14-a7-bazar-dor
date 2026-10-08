import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

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
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}>
    
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}