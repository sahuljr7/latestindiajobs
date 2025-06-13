import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy - LatestIndiaJobs",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Privacy Policy</h1>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Last Updated: June 1, 2023</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400">
                LatestIndiaJobs ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website and
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Information We Collect</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                We collect information that you provide directly to us, information we obtain automatically when you use
                our services, and information from third-party sources.
              </p>
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 space-y-1">
                <li>Contact information (name, email address, phone number)</li>
                <li>Account credentials (username and password)</li>
                <li>Professional information (resume, work history, education)</li>
                <li>Profile information (skills, preferences, job interests)</li>
                <li>Communication data (messages sent through our platform)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 space-y-1">
                <li>Providing and maintaining our services</li>
                <li>Processing job applications</li>
                <li>Matching job seekers with relevant opportunities</li>
                <li>Communicating with you about our services</li>
                <li>Improving and personalizing user experience</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Sharing Your Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 space-y-1">
                <li>Employers when you apply for jobs</li>
                <li>Service providers who help us operate our platform</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Your Rights and Choices</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 space-y-1">
                <li>Access and update your information through your account settings</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Set browser cookies preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Data Security</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-3">
                <p className="text-gray-600 dark:text-gray-400">Email: privacy@latestindiajobs.com</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Address: 123 Business District, Bangalore, Karnataka 560001, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
