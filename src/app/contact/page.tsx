'use client'

import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import { FiMail, FiLinkedin, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
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

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    console.log(formData)
  }

  return (
    <div
      className="min-h-screen bg-gray-900 flex flex-col justify-center px-6 py-12 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: `radial-gradient(circle at ${gradientPosition.x} ${gradientPosition.y}, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.1), transparent)`,
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-indigo-400 to-pink-400 opacity-20 rounded-full blur-3xl animate-floating top-20 left-20"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20 rounded-full blur-3xl animate-floating-alt bottom-20 right-20"></div>
      </div>
      <div className="container mx-auto px-6 py-12 relative z-10">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-white animate-fade-in">
          Get in Touch
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-slide-in">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Reach Out to Me
            </h2>
            {submitted ? (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                role="alert"
              >
                <p className="font-bold">Thank you for your message!</p>
                <p>I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <ContactForm onSubmit={handleSubmit} />
            )}
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-slide-in">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Other Ways to Contact Me
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center space-x-4">
                <FiMail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:nathija.nimantha@gmail.com"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    nathija.nimantha08@gmail.com
                  </a>
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <FiLinkedin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://linkedin.com/in/nathija-nimantha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    linkedin.com/in/nathija-nimantha
                  </a>
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <FiPhone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>WhatsApp:</strong>{' '}
                  <a
                    href="https://wa.me/+94761231133"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    +94 76 1231133
                  </a>
                </p>
              </li>
              <li className="flex items-center space-x-4">
                <FiMapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Address:</strong> 50/4, Hospital Road, Aluthgama, Sri Lanka.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
