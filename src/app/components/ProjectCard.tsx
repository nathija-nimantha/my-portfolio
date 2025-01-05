import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-semibold px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard