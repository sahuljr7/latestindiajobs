import type { Metadata } from "next"
import JobCard from "@/components/job-card"
import FilterSidebar from "@/components/filter-sidebar"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Private Jobs - LatestIndiaJobs",
  description:
    "Discover the latest private sector job opportunities across India. Find jobs in IT, Finance, Startups and more.",
}

// Sample private jobs data
const privateJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp India",
    location: "Bangalore, Karnataka",
    tags: ["Private", "IT", "Senior Level"],
    postedDays: 1,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "InnovateTech Solutions",
    location: "Gurgaon, Haryana",
    tags: ["Private", "Management", "Startup"],
    postedDays: 2,
  },
  {
    id: 3,
    title: "Financial Analyst",
    company: "FinanceHub Ltd",
    location: "Mumbai, Maharashtra",
    tags: ["Private", "Finance", "Entry Level"],
    postedDays: 3,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "DesignStudio Pro",
    location: "Remote",
    tags: ["Private", "Design", "Remote"],
    postedDays: 2,
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Analytics Corp",
    location: "Hyderabad, Telangana",
    tags: ["Private", "IT", "Analytics"],
    postedDays: 4,
  },
  {
    id: 6,
    title: "Marketing Manager",
    company: "BrandBoost Agency",
    location: "Delhi, NCR",
    tags: ["Private", "Marketing", "Mid Level"],
    postedDays: 5,
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "CloudTech Systems",
    location: "Pune, Maharashtra",
    tags: ["Private", "IT", "DevOps"],
    postedDays: 1,
  },
  {
    id: 8,
    title: "Business Analyst",
    company: "ConsultPro Services",
    location: "Chennai, Tamil Nadu",
    tags: ["Private", "Consulting", "Mid Level"],
    postedDays: 6,
  },
]

export default function PrivateJobsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Private Jobs", href: "/private-jobs" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Private Sector Jobs</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Explore exciting career opportunities in the private sector. From startups to established corporations, find
          your perfect match.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <FilterSidebar />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Available Positions</h2>
            <div className="text-sm text-gray-600 dark:text-gray-400">Showing {privateJobs.length} jobs</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {privateJobs.map((job) => (
              <div key={job.id} className="relative">
                <JobCard
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  tags={job.tags}
                  postedDays={job.postedDays}
                />
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white text-sm rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                    Apply Now
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              Load More Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
