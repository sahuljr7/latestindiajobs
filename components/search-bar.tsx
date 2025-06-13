"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search by role, company, or location…"
          className="w-full px-4 py-3 pl-5 pr-12 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-all min-h-[48px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-10 h-10 flex items-center justify-center"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </form>
    </div>
  )
}
