"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

interface SectionCardProps {
  title: string
  description: string
  items: {
    title: string
    description?: string
    image?: string
  }[]
  icon: React.ReactNode
}

export default function SectionCard({ title, description, items, icon }: SectionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-3 cursor-pointer flex items-center justify-between" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </div>

      {isExpanded && (
        <div className="p-4 pt-0 border-t mt-2">
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-sm transition-shadow">
                {item.image && (
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-3">
                  <h4 className="font-medium">{item.title}</h4>
                  {item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
