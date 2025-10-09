import type { Metadata } from "next";
import { Geist, Geist_Mono, Kode_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/sections/footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { LanguageProvider, LanguageDropdown, useLanguage } from "@/components/Contexts/LanguageContext";
import { DirectionController } from "./DirectionController";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Kode_Mono({
  weight: "400",
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Araz Maher Irani - Frontend Developer",
  description: "I'm a 23y/o Frontend Developer from Iran, always available for work!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ScrollProgress />
            <Toaster position="top-right" />
            <LanguageDropdown />
            <DirectionController />
              {children}
            <Footer />

            <div className="fixed bottom-0 left-0 right-0 h-22 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
