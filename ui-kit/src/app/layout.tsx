import type { Metadata } from "next";
import { Cal_Sans, Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ThemeScript } from "@/components/shared/theme-script";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const calSans = Cal_Sans({
  variable: "--font-cal-sans",
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

const openRunde = localFont({
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
});

export const metadata: Metadata = {
  title: "Leguan UI | Component Library",
  description: "Leguan UI is a clean component library built with Next.js, Tailwind CSS, and shadcn/ui.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${openRunde.variable} ${calSans.variable} h-full antialiased`}
      data-primary="neutral"
      suppressHydrationWarning
    >
      <body className="relative min-h-full">
        <ThemeScript />
        <div className="isolate relative flex min-h-svh flex-col">
          <TooltipProvider>{children}</TooltipProvider>
        </div>
      </body>
    </html>
  );
}
