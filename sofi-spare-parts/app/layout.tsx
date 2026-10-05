import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
