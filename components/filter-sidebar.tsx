"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"

export default function FilterSidebar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const jobTypes = ["Private", "Government/Sarkari"]
  const locations = ["Bangalore", "Delhi NCR", "Mumbai", "Hyderabad", "Chennai", "Remote"]
  const batches = ["2024", "2023", "2022", "2021", "Experienced"]
  const categories = ["IT & Software", "Banking", "Engineering", "Healthcare", "Education", "Management"]

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-gray-100 min-h-[48px]"
          aria-expanded={isFilterOpen}
          aria-controls="filter-panel"
        >
          <div className="flex items-center">
            <Filter size={18} className="mr-2" />
            <span>Filters</span>
          </div>
          {isFilterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Filter Sidebar - Hidden on mobile unless toggled */}
      <div
        id="filter-panel"
        className={`${isFilterOpen ? "block" : "hidden"} md:block w-full md:w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4 sm:p-5 h-fit sticky top-20`}
      >
        <h2 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">Filter Jobs</h2>

        <FilterSection title="Job Type" items={jobTypes} />
        <FilterSection title="Location" items={locations} />
        <FilterSection title="Batch" items={batches} />
        <FilterSection title="Category" items={categories} />

        <div className="mt-6 flex gap-3">
          <button className="flex-1 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-sm min-h-[40px]">
            Apply Filters
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm min-h-[40px]">
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

interface FilterSectionProps {
  title: string
  items: string[]
}

function FilterSection({ title, items }: FilterSectionProps) {
  return (
    <div className="mb-5">
      <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-center">
            <input
              type="checkbox"
              id={item.replace(/\s+/g, "-").toLowerCase()}
              className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700"
            />
            <label
              htmlFor={item.replace(/\s+/g, "-").toLowerCase()}
              className="ml-2 text-sm text-gray-700 dark:text-gray-300 py-1 cursor-pointer min-h-[32px] flex items-center"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
