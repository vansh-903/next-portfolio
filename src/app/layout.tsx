import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/navbar"
import CineFrameClicker from "@/components/cine-frame-clicker"
import FootballEnergyMeter from "@/components/football-energy-meter"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Web Developer Portfolio",
  description: "A portfolio showcasing web development skills and personal interests",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="flex-1">{children}</main>

          {/* Interactive elements */}
          <CineFrameClicker />
          <FootballEnergyMeter />
        </ThemeProvider>
      </body>
    </html>
  )
}
