"use client"

import { useState } from "react"
import { GraduationCap, Users, Calendar } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import JobCard from "@/components/job-card"

// Sample batch data
const batches = [
  {
    year: "2024",
    label: "2024 Batch (Freshers)",
    jobCount: 850,
    description: "Perfect opportunities for recent graduates",
    jobs: [
      {
        id: 1,
        title: "Graduate Trainee",
        company: "TechCorp India",
        location: "Bangalore, Karnataka",
        tags: ["2024 Batch", "Fresher", "Training"],
        postedDays: 1,
      },
      {
        id: 2,
        title: "Junior Software Developer",
        company: "StartupHub",
        location: "Hyderabad, Telangana",
        tags: ["2024 Batch", "IT", "Entry Level"],
        postedDays: 2,
      },
      {
        id: 3,
        title: "Management Trainee",
        company: "Corporate Solutions",
        location: "Mumbai, Maharashtra",
        tags: ["2024 Batch", "Management", "Fresher"],
        postedDays: 3,
      },
    ],
  },
  {
    year: "2023",
    label: "2023 Batch",
    jobCount: 720,
    description: "1 year experience opportunities",
    jobs: [
      {
        id: 4,
        title: "Associate Software Engineer",
        company: "DevTech Solutions",
        location: "Pune, Maharashtra",
        tags: ["2023 Batch", "IT", "1 Year Exp"],
        postedDays: 1,
      },
      {
        id: 5,
        title: "Junior Analyst",
        company: "FinanceHub",
        location: "Delhi NCR",
        tags: ["2023 Batch", "Finance", "Analyst"],
        postedDays: 4,
      },
    ],
  },
  {
    year: "2022",
    label: "2022 Batch",
    jobCount: 650,
    description: "2 years experience level",
    jobs: [
      {
        id: 6,
        title: "Software Engineer",
        company: "TechInnovate",
        location: "Chennai, Tamil Nadu",
        tags: ["2022 Batch", "IT", "2 Years Exp"],
        postedDays: 2,
      },
      {
        id: 7,
        title: "Marketing Executive",
        company: "BrandBoost",
        location: "Bangalore, Karnataka",
        tags: ["2022 Batch", "Marketing", "Mid Level"],
        postedDays: 5,
      },
    ],
  },
  {
    year: "2021",
    label: "2021 Batch",
    jobCount: 580,
    description: "3 years experience opportunities",
    jobs: [
      {
        id: 8,
        title: "Senior Developer",
        company: "CodeCraft",
        location: "Gurgaon, Haryana",
        tags: ["2021 Batch", "IT", "Senior Level"],
        postedDays: 1,
      },
    ],
  },
  {
    year: "experienced",
    label: "Experienced (3+ Years)",
    jobCount: 1200,
    description: "Senior level positions",
    jobs: [
      {
        id: 9,
        title: "Team Lead",
        company: "Enterprise Solutions",
        location: "Mumbai, Maharashtra",
        tags: ["Experienced", "Leadership", "5+ Years"],
        postedDays: 3,
      },
      {
        id: 10,
        title: "Senior Consultant",
        company: "ConsultPro",
        location: "Delhi NCR",
        tags: ["Experienced", "Consulting", "7+ Years"],
        postedDays: 2,
      },
    ],
  },
]

export default function JobsByBatchClient() {
  const [selectedBatch, setSelectedBatch] = useState("2024")

  const currentBatch = batches.find((batch) => batch.year === selectedBatch)

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Jobs by Batch", href: "/by-batch" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Jobs by Batch Year</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Find job opportunities tailored to your graduation year and experience level. From fresh graduates to
          experienced professionals.
        </p>
      </div>

      {/* Batch Selection Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav
            className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto pb-1 scrollbar-hide"
            aria-label="Batch selection tabs"
          >
            {batches.map((batch) => (
              <button
                key={batch.year}
                onClick={() => setSelectedBatch(batch.year)}
                className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors min-h-[48px] ${
                  selectedBatch === batch.year
                    ? "border-blue-500 text-blue-600 dark:text-blue-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
                aria-selected={selectedBatch === batch.year}
              >
                <div className="flex items-center space-x-2">
                  <GraduationCap size={16} className="flex-shrink-0" />
                  <span>{batch.label}</span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs">
                    {batch.jobCount}
                  </span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Selected Batch Content */}
      {currentBatch && (
        <div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 flex justify-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 text-center sm:text-left">
                  {currentBatch.label}
                </h2>
                <p className="text-blue-700 dark:text-blue-300 mb-3 text-center sm:text-left">
                  {currentBatch.description}
                </p>
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 justify-center sm:justify-start">
                  <Calendar size={16} className="mr-1" />
                  <span>{currentBatch.jobCount} jobs available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings for Selected Batch */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Available Positions for {currentBatch.label}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentBatch.jobs.map((job) => (
                <div key={job.id} className="relative">
                  <JobCard
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    tags={job.tags}
                    postedDays={job.postedDays}
                  />
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white text-sm rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors min-h-[40px]">
                      Apply Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-h-[40px]">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors min-h-[48px]">
                View All {currentBatch.label} Jobs
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
