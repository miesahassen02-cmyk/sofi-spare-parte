import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sofi Spare Parts — Quality Auto Parts in Shashamane",
  description:
    "Sofi Spare Parts provides quality spare parts and automotive products for cars and Bajaj three-wheelers in Shashamane, Ethiopia. Engine parts, oil, filters, batteries, tires, wheels and more. Delivery available.",
  keywords:
    "spare parts, Shashamane, Ethiopia, car parts, Bajaj parts, engine oil, filters, batteries, tires, wheels, Isuzu",
  openGraph: {
    title: "Sofi Spare Parts",
    description:
      "Quality spare parts for cars and Bajaj in Shashamane, Ethiopia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
