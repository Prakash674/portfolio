import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "./provider";


 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Prakash Portfolio",
  description: "Modern and Minimalist Software Developer Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <ThemeProvider
          attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
