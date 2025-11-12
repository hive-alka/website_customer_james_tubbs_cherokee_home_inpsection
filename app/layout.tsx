import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import seoConfig from "../data/seo-config.json"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: seoConfig.site.title,
  description: seoConfig.site.description,
  keywords: seoConfig.site.keywords,
  authors: [{ name: seoConfig.site.author }],
  openGraph: {
    title: seoConfig.site.title,
    description: seoConfig.site.description,
    url: seoConfig.site.url,
    siteName: seoConfig.business.name,
    images: [
      {
        url: seoConfig.site.image,
        width: 1200,
        height: 630,
        alt: seoConfig.business.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.site.title,
    description: seoConfig.site.description,
    images: [seoConfig.site.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: seoConfig.business.name,
              description: seoConfig.business.description,
              telephone: seoConfig.business.telephone,
              email: seoConfig.business.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: seoConfig.business.address.streetAddress,
                addressLocality: seoConfig.business.address.addressLocality,
                addressRegion: seoConfig.business.address.addressRegion,
                postalCode: seoConfig.business.address.postalCode,
                addressCountry: seoConfig.business.address.addressCountry,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: seoConfig.business.geo.latitude,
                longitude: seoConfig.business.geo.longitude,
              },
              openingHours: seoConfig.business.openingHours,
              priceRange: seoConfig.business.priceRange,
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
