import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from '@next/font/google';

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

// Google font, Poppins
const poppins = Poppins({
  subsets: ['latin'],  // Define subsets if necessary
  weight: ['400', '600'],  // Customize weights as needed
});

export const metadata = {
  title: "Kitzu - Personal Portfolio Template",
  description: "Personal Portfolio Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
