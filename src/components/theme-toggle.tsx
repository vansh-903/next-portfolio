"use client"

import { useState, useEffect } from "react"
import { Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Film className="h-5 w-5" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative overflow-hidden group"
    >
      <Film className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform" />
      <span className="absolute inset-0 bg-primary/10 scale-0 rounded-full group-hover:scale-100 transition-transform duration-300"></span>
    </Button>
  )
}
