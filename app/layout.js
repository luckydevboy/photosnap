import { Nunito } from "next/font/google";
import "./globals.css";
import Layout from "@/app/components/layout";

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>Photosnap</title>
        <meta name="title" content="Photosnap" />
        <meta name="description" content="A simple responsive landing page" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://photosnap-eosin.vercel.app/assets/images/meta-banner.svg"
        />
        <meta property="og:title" content="Photosnap" />
        <meta
          property="og:description"
          content="A simple responsive landing page"
        />
        <meta
          property="og:image"
          content="https://photosnap-eosin.vercel.app/assets/images/meta-banner.svg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://photosnap-eosin.vercel.app/assets/images/meta-banner.svg"
        />
        <meta property="twitter:title" content="Photosnap" />
        <meta
          property="twitter:description"
          content="A simple responsive landing page"
        />
        <meta
          property="twitter:image"
          content="https://photosnap-eosin.vercel.app/assets/images/meta-banner.svg"
        />

        {/* Meta Tags Generated with https://metatags.io */}
      </head>
      <body className={nunito.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
