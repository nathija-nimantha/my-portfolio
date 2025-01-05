'use client'

import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    "name": "Defense System",
    "description": "Simulated defense unit management using the Observer pattern.",
    "image": "/defense-system.jpg",
    "techStack": ["Java", "Swing"],
    "githubLink": "https://github.com/nathija-nimantha/Simple-defense-system-using-Java-Swing"
  },
  {
    "name": "BookSphere",
    "description": "Library management system with role-based functionality.",
    "image": "/booksphere.jpg",
    "techStack": ["Angular", "Spring Boot", "Java"],
    "githubLink": "https://github.com/nathija-nimantha/library-management-system-frontend"
  },
  {
    "name": "Weather App",
    "description": "A user-friendly weather forecasting app providing real-time updates.",
    "image": "/weather-app.jpg",
    "techStack": ["HTML", "CSS", "OpenWeather API"],
    "githubLink": "https://github.com/nathija-nimantha/Weather-App"
  },
  {
    "name": "Epistelle Platform",
    "description": "A multi-functional platform for managing user content and resources.",
    "image": "/epistelle-platform.jpg",
    "techStack": ["Next.js", "Tailwind CSS"],
    "githubLink": "https://github.com/nathija-nimantha/epistelle-platform"
  },
  {
    "name": "MOS Burgers Order Management",
    "description": "Order management system designed for fast food restaurants.",
    "image": "/mos-burgers-order-management.jpg",
    "techStack": ["HTML", "CSS", "JavaScript"],
    "githubLink": "https://github.com/nathija-nimantha/MOS-Burgers-Order-Management"
  },
  {
    "name": "Clothify Store",
    "description": "A JavaFX-based desktop application for managing a clothing store.",
    "image": "/clothify-store.jpg",
    "techStack": ["JavaFX", "MySQL"],
    "githubLink": "https://github.com/nathija-nimantha/clothify-store"
  },
  {
    "name": "Student Management System (Spring Boot)",
    "description": "Backend service for managing student records and data using Spring Boot.",
    "image": "/student-management-system-springboot.jpg",
    "techStack": ["Spring Boot", "MySQL"],
    "githubLink": "https://github.com/nathija-nimantha/Student-Management-System-SpingBoot-BFF"
  },
  {
    "name": "Cusometr Details Manager",
    "description": "A system to manage and store customer details efficiently.",
    "image": "/customer-details-manager.jpg",
    "techStack": ["Java", "Swing"],
    "githubLink": "https://github.com/nathija-nimantha/Customer-Details-Manager"
  }
]


export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.techStack.includes(filter))

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">My Projects</h1>
      <div className="mb-8 flex justify-center">
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All Technologies</option>
          <option value="Java">Java</option>
          <option value="Angular">Angular</option>
          <option value="Next.js">Next.js</option>
          <option value="Spring Boot">Spring Boot</option>
          <option value="Swing">Java Swing</option>
          <option value="JavaFX">JavaFX</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}