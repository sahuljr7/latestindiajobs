import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Briefcase } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Jobs by Location - LatestIndiaJobs",
  description: "Find jobs by location across India. Browse opportunities in major cities and states.",
}

// Sample location data with job counts
const locations = [
  { name: "Bangalore", state: "Karnataka", jobCount: 1250, type: "city" },
  { name: "Delhi NCR", state: "Delhi", jobCount: 980, type: "region" },
  { name: "Mumbai", state: "Maharashtra", jobCount: 875, type: "city" },
  { name: "Hyderabad", state: "Telangana", jobCount: 720, type: "city" },
  { name: "Chennai", state: "Tamil Nadu", jobCount: 650, type: "city" },
  { name: "Pune", state: "Maharashtra", jobCount: 580, type: "city" },
  { name: "Kolkata", state: "West Bengal", jobCount: 420, type: "city" },
  { name: "Ahmedabad", state: "Gujarat", jobCount: 380, type: "city" },
  { name: "Kochi", state: "Kerala", jobCount: 290, type: "city" },
  { name: "Jaipur", state: "Rajasthan", jobCount: 250, type: "city" },
  { name: "Indore", state: "Madhya Pradesh", jobCount: 180, type: "city" },
  { name: "Chandigarh", state: "Punjab", jobCount: 160, type: "city" },
  { name: "Remote", state: "Work from Home", jobCount: 450, type: "remote" },
]

const states = [
  { name: "Maharashtra", jobCount: 1650 },
  { name: "Karnataka", jobCount: 1420 },
  { name: "Delhi", jobCount: 1180 },
  { name: "Tamil Nadu", jobCount: 890 },
  { name: "Telangana", jobCount: 780 },
  { name: "Gujarat", jobCount: 520 },
  { name: "West Bengal", jobCount: 480 },
  { name: "Rajasthan", jobCount: 380 },
  { name: "Kerala", jobCount: 350 },
  { name: "Punjab", jobCount: 280 },
]

export default function JobsByLocationPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Jobs by Location", href: "/jobs-by-location" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Jobs by Location</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Explore job opportunities across different cities and states in India. Find the perfect job in your preferred
          location.
        </p>
      </div>

      {/* Top Cities Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Top Cities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {locations.map((location) => (
            <Link
              key={location.name}
              href={`/jobs-by-location/${location.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <MapPin
                      size={20}
                      className={`mr-2 ${location.type === "remote" ? "text-purple-500" : "text-blue-500"}`}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{location.state}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Briefcase size={16} className="mr-1" />
                  <span>{location.jobCount} jobs available</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* States Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Browse by State</h2>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            {states.map((state, index) => (
              <Link
                key={state.name}
                href={`/jobs-by-location/state/${state.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {state.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{state.jobCount} jobs</p>
                  </div>
                  <div className="text-gray-400 group-hover:text-blue-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
