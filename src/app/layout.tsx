import type { Metadata } from "next";
import { Tiro_Bangla } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlphabetSidebar from "@/components/AlphabetSidebar";
import AlphabetSidebarDesktop from "@/components/AlphabetSidebarDesktop";

const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "শান্তর লাইব্রেরী",
  description: "A site to download Bengali books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${tiroBangla.className} bg-white text-gray-900 flex flex-col h-screen`}>
        <Header />
        <div className="flex flex-1 w-full overflow-hidden">
          <AlphabetSidebarDesktop />
          <div className="flex flex-col flex-1 min-w-0">
            <AlphabetSidebar />
            <main className="flex-1 bg-[#F5F5F5] p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
