import type { Metadata } from "next"
import JobsByBatchClient from "./JobsByBatchClient"

export const metadata: Metadata = {
  title: "Jobs by Batch - LatestIndiaJobs",
  description:
    "Find jobs based on your graduation year and experience level. Opportunities for freshers and experienced professionals.",
}

export default function JobsByBatchPage() {
  return <JobsByBatchClient />
}
