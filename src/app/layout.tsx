import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import StoreProvider from "@/components/store-provider";
import StructuredData from "@/components/structured-data";
import OrganizationSchema from "@/components/organization-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Geist({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F1F5F9",
};

export const metadata: Metadata = {
  title: {
    default: "RogiSetu — Simplifying Hospital OPD System",
    template: "%s | RogiSetu"
  },
  description: "One-stop solution for managing all your hospital OPD needs. Streamline patient care with our comprehensive digital platform. Book appointments, manage records, and enhance healthcare delivery.",
  keywords: ["hospital management", "OPD system", "patient care", "healthcare platform", "digital hospital", "medical records", "appointment booking", "healthcare management"],
  authors: [{ name: "Aditya Sharma" }],
  creator: "Aditya Sharma",
  publisher: "Aditya Sharma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rogisetu.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RogiSetu — Simplifying Hospital OPD System",
    description: "One-stop solution for managing all your hospital OPD needs. Streamline patient care with our comprehensive digital platform.",
    url: 'https://rogisetu.vercel.app',
    siteName: 'RogiSetu',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RogiSetu - Hospital OPD Management System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RogiSetu — Simplifying Hospital OPD System",
    description: "One-stop solution for managing all your hospital OPD needs. Streamline patient care with our comprehensive digital platform.",
    images: ['/og-image.png'],
    creator: '@sharmaadityax',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "RogiSetu",
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    shortcut: '/icons/icon-192x192.png',
    apple: '/icons/icon-192x192.png',
  },
  verification: {
    google: 'tsw87nxK9Y-J-jn4JoA3kJ3a8jG0Y5T6yMvkygKvddY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#F1F5F9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="RogiSetu" />
        <meta name="google-site-verification" content="tsw87nxK9Y-J-jn4JoA3kJ3a8jG0Y5T6yMvkygKvddY" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <StructuredData />
        <OrganizationSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <StoreProvider>
          {children}
        </StoreProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}