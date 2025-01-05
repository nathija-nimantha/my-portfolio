import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Hi, I'm Nathija Nimantha
            </h1>
            <h2 className="text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400 mb-6">
              A Future Full-Stack Software Engineer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Studying at the Institute of Computer Engineering (ICET) and passionate about creating innovative solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="/projects" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                View My Work
              </Link>
              <Link href="/contact" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/profile_pic.jpg"
                alt="Nathija Nimantha"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="rounded-full shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

