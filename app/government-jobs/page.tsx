import type { Metadata } from "next"
import JobCard from "@/components/job-card"
import FilterSidebar from "@/components/filter-sidebar"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Government Jobs - LatestIndiaJobs",
  description:
    "Find the latest Sarkari job opportunities. UPSC, SSC, Railway, Banking and other government job notifications.",
}

// Sample government jobs data
const governmentJobs = [
  {
    id: 1,
    title: "Assistant Section Officer",
    company: "UPSC",
    location: "New Delhi",
    tags: ["Sarkari", "Central", "Exam Required", "Deadline: 30 Nov"],
    postedDays: 2,
  },
  {
    id: 2,
    title: "Junior Engineer",
    company: "SSC",
    location: "Multiple Locations",
    tags: ["Sarkari", "Central", "Engineering", "Deadline: 15 Dec"],
    postedDays: 5,
  },
  {
    id: 3,
    title: "Probationary Officer",
    company: "SBI",
    location: "Pan India",
    tags: ["Sarkari", "Banking", "Exam Required", "Deadline: 20 Nov"],
    postedDays: 1,
  },
  {
    id: 4,
    title: "Assistant Loco Pilot",
    company: "Indian Railways",
    location: "Multiple Zones",
    tags: ["Sarkari", "Central", "Railways", "Deadline: 25 Nov"],
    postedDays: 3,
  },
  {
    id: 5,
    title: "Forest Guard",
    company: "Maharashtra Forest Dept",
    location: "Maharashtra",
    tags: ["Sarkari", "State", "Forest", "Deadline: 10 Dec"],
    postedDays: 7,
  },
  {
    id: 6,
    title: "Sub Inspector",
    company: "Delhi Police",
    location: "Delhi",
    tags: ["Sarkari", "State", "Police", "Deadline: 5 Dec"],
    postedDays: 4,
  },
  {
    id: 7,
    title: "Scientific Assistant",
    company: "DRDO",
    location: "Bangalore, Karnataka",
    tags: ["Sarkari", "Central", "Research", "Deadline: 18 Nov"],
    postedDays: 2,
  },
  {
    id: 8,
    title: "Teacher (TGT)",
    company: "KVS",
    location: "Multiple States",
    tags: ["Sarkari", "Central", "Education", "Deadline: 28 Nov"],
    postedDays: 6,
  },
]

export default function GovernmentJobsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Government Jobs", href: "/government-jobs" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Government Jobs (Sarkari Naukri)</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Latest government job notifications from UPSC, SSC, Railways, Banking and other central & state government
          organizations.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <FilterSidebar />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Latest Notifications</h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">Showing {governmentJobs.length} jobs</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {governmentJobs.map((job) => (
              <div key={job.id} className="relative">
                <JobCard
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  tags={job.tags}
                  postedDays={job.postedDays}
                />
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-green-600 dark:bg-green-500 text-white text-sm rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Notification
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-6 py-2 bg-green-600 dark:bg-green-500 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-colors">
              Load More Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
