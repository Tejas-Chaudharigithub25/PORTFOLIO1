import { Outfit } from "next/font/google";
import '../app/styles/globals.css';
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import Head from "next/head";

const Outfits = Outfit({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"], // you can choose weights: 300, 400, 700, 900
});
export const metadata = {
  title: "Tejas Chaudhari Portfolio",
  keywords: "Tejas Chaudhari Portfolio",
  description: "Tejas Chaudhari's Portfolio website. Explore projects, skills, and web development showcases.",
  icons: {
    icon: '/favicon.png',      // favicon
    shortcut: '/favicon.png',  // shortcut icon
    apple: '/favicon.png',     // apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </Head>
      <body className={`${Outfits.variable} antialiased`}>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
