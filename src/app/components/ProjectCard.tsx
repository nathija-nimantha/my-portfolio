import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface Project {
  name: string
  description: string
  image: string
  techStack: string[]
  githubLink: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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

  return (
    <div
      className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x} ${gradientPosition.y}, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.1), transparent)`,
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-700 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative p-8 z-10 text-center">
        <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-500">
          {project.name}
        </h3>
        <p className="text-sm text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-500">
          {project.description}
        </p>
        <div className="flex justify-center gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
