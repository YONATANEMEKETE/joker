import type { Metadata } from "next";
import localFont from "next/font/local";
import { Rubik_Wet_Paint, Archivo, Spectral } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const rubikWetPaint = Rubik_Wet_Paint({
  subsets: ["latin"],
  variable: "--heading1",
  weight: "400",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--heading2",
  weight: ["400", "500", "600", "800", "700"],
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--body",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Joker: Share Your Jokes with the World",
  description: "Share your funny moments with the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubikWetPaint.variable} ${archivo.variable} ${spectral.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
