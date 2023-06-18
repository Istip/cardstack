import Modal from "@/components/Modal";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CardStack",
  description: "Organize your daily tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f5f6f8]`}>
        <Modal />
        {children}
      </body>
    </html>
  );
}
