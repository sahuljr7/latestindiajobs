"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

// Updated navigation structure with dropdowns
const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Jobs",
    href: "#",
    dropdown: true,
    items: [
      { name: "Private Jobs", href: "/private-jobs" },
      { name: "Government Jobs", href: "/government-jobs" },
      { name: "Jobs by Location", href: "/jobs-by-location" },
      { name: "Jobs by Batch", href: "/jobs-by-batch" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    dropdown: true,
    items: [
      { name: "Career Blog", href: "/blog" },
      { name: "Resume Tips", href: "/resume-tips" },
      { name: "Interview Preparation", href: "/interview-prep" },
      { name: "Salary Guide", href: "/salary-guide" },
    ],
  },
  {
    name: "Company",
    href: "#",
    dropdown: true,
    items: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">LatestIndiaJobs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors py-2 px-1"
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={openDropdown === item.name}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors py-2 px-1"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-20 transition-all duration-200 ${
                      openDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 min-w-[48px] min-h-[48px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => toggleDropdown(item.name)}
                        aria-expanded={openDropdown === item.name}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                              onClick={() => {
                                setOpenDropdown(null)
                                setIsMenuOpen(false)
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center min-h-[48px]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
