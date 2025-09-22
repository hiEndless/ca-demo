import type React from "react"
import type { Metadata, Viewport } from "next"
import { Onest } from "next/font/google"
import "./globals.css"

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "OEM DEMO站点 - 跟单猿OEM DEMO站点",
  description:
    "跟单猿OEM DEMO站点",
  keywords: "",
  authors: [{ name: "OEM DEMO站点" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://demo.lichaoyuan.com",
    title: "OEM DEMO站点",
    description: "OEM DEMO站点",
    siteName: "OEM DEMO站点",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowly - Automated Workflow Solutions",
    description: "Streamline your team's workflow with Flowly's powerful automation tools.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${onest.variable} font-sans`}>
      <body className="antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
