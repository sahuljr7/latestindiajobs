import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Terms of Service - LatestIndiaJobs",
  description: "Read our terms of service to understand the rules and guidelines for using LatestIndiaJobs.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Terms of Service", href: "/terms" },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Terms of Service</h1>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Last Updated: June 1, 2023</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-600 dark:text-gray-400">
                By accessing or using LatestIndiaJobs ("the Service"), you agree to be bound by these Terms of Service.
                If you disagree with any part of the terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">2. User Accounts</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                When you create an account with us, you must provide accurate, complete, and current information.
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your
                account.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password. We encourage you to use a strong password (a combination of
                upper and lower case letters, numbers, and symbols) with your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">3. User Content</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Our Service allows you to post, link, store, share and otherwise make available certain information,
                text, graphics, videos, or other material ("Content"). You are responsible for the Content that you
                post, including its legality, reliability, and appropriateness.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                By posting Content, you grant us the right to use, modify, publicly perform, publicly display,
                reproduce, and distribute such Content on and through the Service. You retain any and all of your rights
                to any Content you submit, post, or display on or through the Service and you are responsible for
                protecting those rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">4. Prohibited Activities</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 space-y-1">
                <li>Using the Service for any illegal purpose or in violation of any laws</li>
                <li>Posting false or misleading information</li>
                <li>
                  Attempting to interfere with, compromise the system integrity or security, or decipher any
                  transmissions to or from the servers running the Service
                </li>
                <li>
                  Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure
                </li>
                <li>Uploading or transmitting viruses or any other type of malicious code</li>
                <li>Collecting or tracking the personal information of others</li>
                <li>Spamming, phishing, or other unsolicited communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">5. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-400">
                The Service and its original content (excluding Content provided by users), features, and functionality
                are and will remain the exclusive property of LatestIndiaJobs and its licensors. The Service is
                protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in
                connection with any product or service without the prior written consent of LatestIndiaJobs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">6. Termination</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use
                the Service will immediately cease. If you wish to terminate your account, you may simply discontinue
                using the Service or contact us to request account deletion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                In no event shall LatestIndiaJobs, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">8. Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-400">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">9. Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-3">
                <p className="text-gray-600 dark:text-gray-400">Email: terms@latestindiajobs.com</p>
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
