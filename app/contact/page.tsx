import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - LatestIndiaJobs",
  description:
    "Get in touch with LatestIndiaJobs team. We're here to help you with your job search and career queries.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
