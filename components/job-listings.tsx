import JobCard from "./job-card"

// Sample job data
const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp India",
    location: "Bangalore, Karnataka",
    tags: ["Private", "Engineering", "2024 Batch"],
    postedDays: 2,
  },
  {
    id: 2,
    title: "Bank PO",
    company: "State Bank of India",
    location: "Multiple Locations",
    tags: ["Sarkari", "Banking", "2023 Batch"],
    postedDays: 5,
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Solutions",
    location: "Remote",
    tags: ["Private", "Remote", "Engineering"],
    postedDays: 1,
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Analytics India",
    location: "Hyderabad, Telangana",
    tags: ["Private", "Analytics", "2024 Batch"],
    postedDays: 3,
  },
  {
    id: 5,
    title: "Railway Assistant",
    company: "Indian Railways",
    location: "Pan India",
    tags: ["Sarkari", "Railways", "2022 Batch"],
    postedDays: 7,
  },
  {
    id: 6,
    title: "Product Manager",
    company: "E-commerce Solutions",
    location: "Gurgaon, Haryana",
    tags: ["Private", "Management", "MBA"],
    postedDays: 4,
  },
]

export default function JobListings() {
  return (
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Latest Jobs</h2>
        <div className="text-sm text-gray-600 dark:text-gray-400">Showing {jobs.length} jobs</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            tags={job.tags}
            postedDays={job.postedDays}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors min-h-[48px] min-w-[120px]">
          Load More Jobs
        </button>
      </div>
    </div>
  )
}
