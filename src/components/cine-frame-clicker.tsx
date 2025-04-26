"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Video as Film } from "lucide-react"
import { useTheme } from "next-themes"

const filmQuotes = [
  "Action! Scene 1 - Dev in Action",
  "That's a wrap on this section!",
  "Lights, Camera, Code!",
  "Director's Cut: Portfolio Edition",
  "The best stories are the ones that connect.",
  "Every frame tells a story.",
  "Cut! Perfect take.",
  "This is where the magic happens.",
]

export default function CineFrameClicker() {
  const [position, setPosition] = useState({ x: 80, y: 80 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isAnimating, setIsAnimating] = useState(false)
  const [quote, setQuote] = useState("")
  const { theme } = useTheme()

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
    e.preventDefault()
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const handleClick = () => {
    if (!isDragging && !isAnimating) {
      setIsAnimating(true)
      setQuote(filmQuotes[Math.floor(Math.random() * filmQuotes.length)])

      // Reset after animation completes
      setTimeout(() => {
        setIsAnimating(false)
        setQuote("")
      }, 3000)
    }
  }

  return (
    <>
      {/* Floating camera icon */}
      <div
        className={`fixed z-50 cursor-grab ${isDragging ? "cursor-grabbing" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div
          className="bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          onMouseDown={handleMouseDown}
          onClick={handleClick}
        >
          <Film className="h-6 w-6" />
        </div>
      </div>

      {/* Cinematic overlay */}
      {isAnimating && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* Frame animation */}
          <div className="absolute inset-0 border-8 border-white dark:border-black animate-frame-in"></div>

          {/* Dim overlay */}
          <div className="absolute inset-0 bg-black/50 animate-fade-in"></div>

          {/* Quote */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/70 text-white px-8 py-4 rounded-md text-xl font-bold animate-slide-up">
              {quote}
            </div>
          </div>
        </div>
      )}

      {/* Add styles for animations */}
      <style jsx global>{`
        @keyframes frameIn {
          0% { clip-path: inset(50% 50% 50% 50%); }
          100% { clip-path: inset(0% 0% 0% 0%); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-frame-in {
          animation: frameIn 0.5s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </>
  )
}
