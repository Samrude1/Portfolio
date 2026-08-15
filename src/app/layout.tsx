import type { Metadata } from "next";
import { Inter, Space_Grotesk, Syne, Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://samirautanen.fi';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sami Rautanen | AI Engineer & Technical Designer",
  description: "Portfolio of Sami Rautanen. Specializing in High-Performance Agentic AI, Complex Systems, and 3D Visualization. Transforming logic into experience.",
  keywords: [
    'AI Engineer',
    'Agentic AI',
    'Machine Learning',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
    '3D Visualization',
    'Three.js',
    'Technical Designer',
    'RAG',
    'LLM',
    'Web Development',
  ],
  authors: [{ name: 'Sami Rautanen' }],
  creator: 'Sami Rautanen',
  openGraph: {
    title: "Sami Rautanen | AI Engineer & Technical Designer",
    description: "Building the next generation of autonomous web agents and immersive interfaces.",
    url: siteUrl,
    siteName: 'Sami Rautanen Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sami Rautanen | AI Engineer",
    description: "Building the next generation of autonomous web agents and immersive interfaces.",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sami Rautanen',
    jobTitle: 'AI Engineer & Technical Designer',
    url: siteUrl,
    sameAs: [
      'https://github.com/samiruai',
      'https://linkedin.com/in/sami-rautanen',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Agentic AI',
      'Full-Stack Development',
      'React',
      'Next.js',
      'Python',
      'FastAPI',
      '3D Visualization',
    ],
  };

  return (
    <html lang="en" data-mode="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${syne.variable} ${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} antialiased`}
      >

        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
