import type { Metadata, Viewport } from "next";
import { ThemeScript } from "@/components/shared/theme-script";
import { TooltipProvider } from "@/components/ui/tooltip";
import { leguanFontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://leguan-ui.pages.dev"),
  title: "Leguan UI | Component Library",
  description: "Leguan UI is a clean component library built with Next.js, Tailwind CSS, and shadcn/ui.",
  openGraph: {
    title: "Leguan UI | Component Library",
    description: "Leguan UI is a clean component library built with Next.js, Tailwind CSS, and shadcn/ui.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Leguan UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leguan UI | Component Library",
    description: "Leguan UI is a clean component library built with Next.js, Tailwind CSS, and shadcn/ui.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${leguanFontVariables} h-full antialiased`}
      data-primary="neutral"
      suppressHydrationWarning
    >
      <body className="relative min-h-full">
        <ThemeScript />
        <div className="isolate relative flex min-h-svh min-w-0 max-w-full flex-col overflow-x-clip">
          <TooltipProvider>{children}</TooltipProvider>
        </div>
      </body>
    </html>
  );
}
