import { Geist_Mono, Inter } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const openRunde = localFont({
  variable: "--font-open-runde",
  src: [
    {
      path: "../../public/fonts/OpenRunde-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenRunde-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenRunde-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/OpenRunde-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
})

export const leguanFontVariables = [
  inter.variable,
  geistMono.variable,
  openRunde.variable,
].join(" ")
