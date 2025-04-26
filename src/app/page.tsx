import {  Camera, Video as Film, Trophy as Football, Code } from "lucide-react"
import Link from "next/link"
import SectionCard from "@/components/section-card"

export default function HomePage() {
  const webProjects = [
    {
      title: "GoBeyond Traveling Website",
      description: "A dynamic travel planning platform helping users craft personalized itineraries with ease.",
      image: "/work1.jpg?height=400&width=600",
    },
    {
      title: "Multi-Client Chat System",
      description: "A scalable real-time chat app enabling multiple users to communicate seamlessly across channels.",
      image: "/work3.jpg?height=400&width=600",
    },
    {
      title: "Real-Time Location Tracker",
      description: "An application that allows users to share and track locations live with accuracy and security.",
      image: "/work5.jpg?height=400&width=600",
    },
    {
      title: "Analytical Dashboard",
      description: "A data-driven dashboard providing insightful visualizations for user behavior and performance metrics.",
      image: "/work21.webp?height=400&width=600",
    },
  ]

  const photographyItems = [
    {
      title: "Bird",
      image: "/IMG_9248.JPG?height=400&width=600",
    },
    {
      title: "Portrait Series",
      image: "/IMG_9276.JPG?height=400&width=600",
    },
    {
      title: "Nature Close-ups",
      image: "/IMG_9088.JPG?height=400&width=600",
    },
    {
      title: "Fun",
      image: "/PXL_20250404_194830359.jpg?height=400&width=600",
    },
  ]


  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Vansh</span>
            </h1>
            <p className="text-xl text-muted-foreground">
            I design and code web experiences that are smooth, simple, and a little bit cinematic — just how I like it.
            </p>
            
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What I Do</h2>

            <SectionCard
              title="Web Development"
              description="Building responsive, accessible, and performant web applications."
              items={webProjects}
              icon={<Code className="h-6 w-6 text-primary" />}
            />

            <SectionCard
              title="Photography"
              description="Capturing moments and telling stories through visual imagery."
              items={photographyItems}
              icon={<Camera className="h-6 w-6 text-primary" />}
            />

          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Know more about me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
