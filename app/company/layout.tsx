import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Company - LatestIndiaJobs",
  description: "Learn about LatestIndiaJobs, our mission, and how we help job seekers find their dream careers.",
}

export default function CompanyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
