import SearchBar from "@/components/search-bar"
import JobListings from "@/components/job-listings"
import FilterSidebar from "@/components/filter-sidebar"
import Link from "next/link"
import { MapPin, GraduationCap, Briefcase, Building } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2">Find Your Dream Job</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover thousands of job opportunities across India - updated daily with the latest openings
        </p>
      </div>

      <SearchBar />

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <Link href="/private-jobs" className="group">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 h-full hover:shadow-md dark:hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
              <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
              Private Jobs
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Explore opportunities in the private sector</p>
          </div>
        </Link>

        <Link href="/government-jobs" className="group">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 h-full hover:shadow-md dark:hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
              <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 mb-2">
              Government Jobs
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Find Sarkari Naukri opportunities</p>
          </div>
        </Link>

        <Link href="/jobs-by-location" className="group">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 h-full hover:shadow-md dark:hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 mb-2">
              Jobs by Location
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Find jobs in your city or state</p>
          </div>
        </Link>

        <Link href="/jobs-by-batch" className="group">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 h-full hover:shadow-md dark:hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
              <GraduationCap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 mb-2">
              Jobs by Batch
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Opportunities for your graduation year</p>
          </div>
        </Link>
      </div>

      <div className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">Career Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/blog" className="group">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 h-full hover:shadow-md dark:hover:shadow-lg transition-all duration-200">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                Career Blog
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Latest articles on job search tips and career advice
              </p>
            </div>
          </Link>

          <Link href="/resume-tips" className="group">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 h-full hover:shadow-md dark:hover:shadow-lg transition-all duration-200">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                Resume Tips
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Create a standout resume that gets you noticed</p>
            </div>
          </Link>

          <Link href="/interview-prep" className="group">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 h-full hover:shadow-md dark:hover:shadow-lg transition-all duration-200">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                Interview Preparation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ace your interviews with our comprehensive guides
              </p>
            </div>
          </Link>

          <Link href="/salary-guide" className="group">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 h-full hover:shadow-md dark:hover:shadow-lg transition-all duration-200">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                Salary Guide
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Know your worth with our comprehensive salary data
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <FilterSidebar />
        <JobListings />
      </div>
    </div>
  )
}
