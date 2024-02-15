import "~/styles/globals.css";

import { Inter } from "next/font/google";
import "typeface-poppins";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Villa Amrita",
  description:
    "Hotel Reservation Website for Villa Amrita (Pvt) Ltd. Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>{children}</body>
    </html>
  );
}
