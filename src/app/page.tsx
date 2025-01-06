'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [textIndex, setTextIndex] = useState(0)
  const texts = [
    "A Future Full-Stack Software Engineer",
    "A Passionate Problem Solver",
    "An Aspiring Software Architect"
  ]

  const [gradientPosition, setGradientPosition] = useState({ x: '50%', y: '50%' })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setGradientPosition({ x: `${x}%`, y: `${y}%` })
  }

  const handleMouseLeave = () => {
    setGradientPosition({ x: '50%', y: '50%' })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="min-h-screen flex flex-col justify-center bg-gray-900 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x} ${gradientPosition.y}, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.1), transparent)`,
      }}
    >
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white animate-fade-in">
              Hi, I&apos;m <span className="text-indigo-400">Nathija Nimantha</span>
            </h1>
            <h2
              className={`text-2xl md:text-3xl text-indigo-500 mb-6 animate-text-change`}
              key={textIndex}
            >
              {texts[textIndex]}
            </h2>
            <p className="text-lg text-gray-300 mb-8 animate-slide-in">
              Studying at the Institute of Computer Engineering (ICET) and passionate about creating innovative solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="/projects"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-zoom-in">
              <Image
                src="/profile_pic.jpg"
                alt="Nathija Nimantha"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="rounded-full shadow-2xl border-4 border-indigo-500 transition-transform duration-100 transform hover:scale-110 hover:rotate-3"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-20 animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-indigo-400 to-pink-400 opacity-20 rounded-full blur-3xl animate-floating top-20 left-20"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20 rounded-full blur-3xl animate-floating-alt bottom-20 right-20"></div>
      </div>
    </div>
  )
}
