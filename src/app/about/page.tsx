'use client';


import Image from "next/image"
import { Camera, Video as Film, Trophy as Football, Code } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center"
        >
          <h1 className="text-primary text-5xl font-bold tracking-tight">About Me</h1>
          <p className="text-xl text-muted-foreground">
            I'm Vansh — a developer, photographer, footballer, and aspiring filmmaker, all rolled into one.
          </p>
        </motion.div>

        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-4"
          >
            <h1 className="text-3xl font-semibold">My Journey Into Web Development</h1>
            <p className="text-muted-foreground">
            I started coding in Class 11 with C++, mostly just trying to survive DSA problems. 
            But somewhere between debugging at 2 AM and cracking recursion questions, I fell in love with it.
            Curious to build real stuff, I jumped into web development — starting with basic HTML and CSS and eventually getting hooked to React. 
            Now, whether it's solving algorithms or perfecting UI details, coding for me is part hustle, part passion, and a lot of fun.
            </p>
            <p className="text-muted-foreground">
              I love solving problems, staying up late polishing tiny UI details, and constantly leveling up my craft. 
              For me, coding is about turning ideas into experiences people love to interact with.
            </p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3 flex justify-center"
          >
            <Image
              src="/PXL_20250405_040155749.jpg"
              alt="Custom illustration representing my journey"
              width={250}
              height={250}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-primary text-3xl font-semibold text-center">What Keeps Me Inspired</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-6 border rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <p className="text-muted-foreground mb-4">
              Building websites that look clean, work fast, and feel right. My stack? React, Next.js, Tailwind CSS — and a lot of coffee.
              </p>
              <Link href="/" className="text-primary hover:underline">
                View my projects
              </Link>
            </div>

            
            <div className="p-6 border rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Camera className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Photography</h3>
              </div>
              <p className="text-muted-foreground mb-4">
              Capturing stories one frame at a time — from the chaos of city streets to the calm of a sunset. Photography is how I hit pause on life’s best moments.
                          </p>
              <Link href="/" className="text-primary hover:underline">
                View my photography
              </Link>
            </div>

            
            <div className="p-6 border rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Football className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Football</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                From weekend matches to field games, football keeps my mind sharp and my spirit competitive — both on and off the field.
              </p>
            </div>

            
            <div className="p-6 border rounded-2xl hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Film className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Filmmaking</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Exploring storytelling through filmmaking — scripting, shooting, editing. It's like coding, but with light and emotions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
