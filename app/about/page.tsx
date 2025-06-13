import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "About Us - LatestIndiaJobs",
  description:
    "Learn about LatestIndiaJobs - India's fastest growing job portal connecting job seekers with employers.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">About LatestIndiaJobs</h1>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            At LatestIndiaJobs, our mission is to connect talented individuals with their dream careers. We strive to be
            the most trusted job portal in India by providing a seamless platform for job seekers and employers to
            connect, with a focus on transparency, relevance, and user experience.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Who We Are</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Founded in 2020, LatestIndiaJobs has quickly grown to become one of India's leading job portals. Our team
            consists of experienced professionals from the recruitment industry, technology experts, and career
            counselors who understand the challenges of the job market.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We believe that finding the right job shouldn't be a complicated process. That's why we've built a platform
            that prioritizes clarity, relevance, and speed - helping job seekers find opportunities that match their
            skills and aspirations without the clutter and distractions found on other platforms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">What We Offer</h2>
          <div className="space-y-3 mb-6">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">For Job Seekers:</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 space-y-1 mt-2">
                <li>Access to thousands of verified job listings across India</li>
                <li>Personalized job recommendations based on your profile</li>
                <li>Career resources including resume tips and interview preparation</li>
                <li>Job alerts for new opportunities matching your preferences</li>
                <li>Simple application process with profile tracking</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">For Employers:</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 space-y-1 mt-2">
                <li>Access to a large pool of qualified candidates</li>
                <li>Advanced filtering and screening tools</li>
                <li>Employer branding opportunities</li>
                <li>Analytics and insights on job performance</li>
                <li>Dedicated account management for enterprise clients</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We believe in clear, honest communication with our users and partners.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We continuously improve our platform to provide the best experience.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Inclusivity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We're committed to creating equal opportunities for all job seekers.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Join Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Whether you're looking for your next career move or seeking to hire top talent, LatestIndiaJobs is here to
            help you succeed. Join our community today and experience the difference of a job portal built with your
            needs in mind.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Get in Touch</h2>
          <p className="text-blue-700 dark:text-blue-400 mb-4">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
