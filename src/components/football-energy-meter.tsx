"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Trophy as Football } from "lucide-react"

export default function FootballEnergyMeter() {
  const [position, setPosition] = useState({ x: 80, y: 800 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [energy, setEnergy] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showQuote, setShowQuote] = useState(false)

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

      setEnergy((prev) => {
        const newEnergy = Math.min(prev + 20, 100)

        
        if (newEnergy >= 100) {
          setTimeout(() => {
            setShowQuote(true)

            
            setTimeout(() => {
              setShowQuote(false)
              setEnergy(0)
            }, 3000)
          }, 500)
        }

        return newEnergy
      })

      setTimeout(() => {
        setIsAnimating(false)
      }, 500)
    }
  }

  

  return (
    <>
      
      <div
        className={`fixed z-50 cursor-grab ${isDragging ? "cursor-grabbing" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div className="relative">
          <div
            className={`bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all ${
              isAnimating ? "animate-bounce" : ""
            }`}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
          >
            <Football className="h-6 w-6" />
          </div>

        
          <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
            <div className="w-4 h-4 rounded-full border-2 border-primary overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-300"
                style={{ transform: `scaleY(${energy / 100})`, transformOrigin: "bottom" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      
      {showQuote && (
        <div
          className="fixed z-40 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg shadow-lg animate-slide-up"
          style={{
            left: `${position.x - 100}px`,
            top: `${position.y - 80}px`,
            minWidth: "220px",
          }}
        >
          <p className="font-bold">🏃‍♂️ Energy Level: 100%</p>
          <p className="text-sm">Back to code with sports-level energy!</p>
        </div>
      )}
    </>
  )
}
