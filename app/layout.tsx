import type { Metadata, Viewport } from "next"
import { Overpass } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const overpassFont = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Boost Performers | AI Employees + Growth Marketing",
  description:
    "AI employees and growth marketing systems — operated by real humans — so your business runs smarter, grows faster, and gives you back your freedom.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B1A2B",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={overpassFont.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
