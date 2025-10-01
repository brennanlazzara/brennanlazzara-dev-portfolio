import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Brennan Lazzara - Developer Portfolio",
    template: "%s | Brennan Lazzara",
  },
  description: "Full-stack developer building modern web experiences with React, Next.js, and TypeScript.",
  keywords: ["developer", "portfolio", "web development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Brennan Lazzara" }],
  creator: "Brennan Lazzara",
  metadataBase: new URL("https://brennanlazzara.dev"),
  alternates: {
    canonical: "https://brennanlazzara.dev",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brennanlazzara.dev",
    title: "Brennan Lazzara - Developer Portfolio",
    description: "Full-stack developer building modern web experiences with React, Next.js, and TypeScript.",
    siteName: "Brennan Lazzara Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brennan Lazzara - Developer Portfolio",
    description: "Full-stack developer building modern web experiences with React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Skip to main content
            </a>
            <Navigation />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
