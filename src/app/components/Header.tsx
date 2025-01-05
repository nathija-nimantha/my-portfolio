'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Nathija Nimantha
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
                  pathname === item.path ? 'text-indigo-600 dark:text-indigo-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block py-2 hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  pathname === item.path ? 'text-indigo-600 dark:text-indigo-400' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header