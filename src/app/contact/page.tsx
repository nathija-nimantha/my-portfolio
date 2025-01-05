'use client'

import { useState } from 'react'
import ContactForm from '../components/ContactForm'
import { FiMail, FiLinkedin, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-gray-100">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Reach Out to Me</h2>
          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg" role="alert">
              <p className="font-bold">Thank you for your message!</p>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <ContactForm onSubmit={handleSubmit} />
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Other Ways to Contact Me</h2>
          <ul className="space-y-4">
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
                <strong>Location:</strong> Sri Lanka
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
