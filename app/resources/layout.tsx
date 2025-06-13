import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Career Resources - LatestIndiaJobs",
  description: "Access career resources including resume tips, interview preparation, and salary guides.",
}

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
