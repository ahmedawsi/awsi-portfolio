import { DM_Serif_Text, Quicksand } from 'next/font/google';
import './globals.css';

const dmseriftext = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const quicksand = Quicksand({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: "Ahmed's Portfolio | Software Developer & UI/UX Designer",
  description: "Personal portfolio of Ahmed Awsi - Software developer and UI/UX designer crafting smooth experiences from the code up.",
  keywords: ["Ahmed Awsi", "Software Developer", "UI/UX Designer", "Next.js", "Flutter", "Portfolio"],
  authors: [{ name: "Ahmed Awsi" }],
  creator: "Ahmed Awsi",
  openGraph: {
    title: "Ahmed's Portfolio | Software Developer & UI/UX Designer",
    description: "Software developer with a passion for UI/UX, crafting smooth experiences from the code up.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed's Portfolio | Software Developer & UI/UX Designer",
    description: "Software developer with a passion for UI/UX, crafting smooth experiences from the code up.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmseriftext.variable} ${quicksand.variable}`}>
      <body className={`${quicksand.className} antialiased`}>{children}</body>
    </html>
  );
}
