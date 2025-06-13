import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Salary Guide - LatestIndiaJobs",
  description: "Comprehensive salary information for various industries and roles across India.",
}

// Sample salary data
const salaryData = [
  {
    industry: "Information Technology",
    roles: [
      { title: "Software Engineer", experience: "0-2 years", salaryRange: "₹3.5L - ₹8L" },
      { title: "Software Engineer", experience: "3-5 years", salaryRange: "₹8L - ₹18L" },
      { title: "Software Engineer", experience: "6-10 years", salaryRange: "₹18L - ₹35L" },
      { title: "Product Manager", experience: "3-5 years", salaryRange: "₹12L - ₹25L" },
      { title: "Data Scientist", experience: "2-5 years", salaryRange: "₹10L - ₹20L" },
      { title: "DevOps Engineer", experience: "2-5 years", salaryRange: "₹8L - ₹18L" },
    ],
  },
  {
    industry: "Banking & Finance",
    roles: [
      { title: "Investment Banking Analyst", experience: "0-2 years", salaryRange: "₹7L - ₹12L" },
      { title: "Financial Analyst", experience: "2-5 years", salaryRange: "₹6L - ₹12L" },
      { title: "Risk Manager", experience: "5-8 years", salaryRange: "₹15L - ₹25L" },
      { title: "Relationship Manager", experience: "3-6 years", salaryRange: "₹8L - ₹15L" },
    ],
  },
  {
    industry: "Marketing & Sales",
    roles: [
      { title: "Marketing Executive", experience: "0-2 years", salaryRange: "₹3L - ₹6L" },
      { title: "Digital Marketing Manager", experience: "3-6 years", salaryRange: "₹8L - ₹18L" },
      { title: "Sales Manager", experience: "4-8 years", salaryRange: "₹10L - ₹20L" },
      { title: "Brand Manager", experience: "5-8 years", salaryRange: "₹12L - ₹25L" },
    ],
  },
  {
    industry: "Healthcare",
    roles: [
      { title: "Medical Officer", experience: "0-3 years", salaryRange: "₹5L - ₹10L" },
      { title: "Specialist Doctor", experience: "5+ years", salaryRange: "₹15L - ₹40L+" },
      { title: "Registered Nurse", experience: "2-5 years", salaryRange: "₹3.5L - ₹7L" },
      { title: "Healthcare Administrator", experience: "5-10 years", salaryRange: "₹10L - ₹20L" },
    ],
  },
]

export default function SalaryGuidePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/blog" },
          { label: "Salary Guide", href: "/salary-guide" },
        ]}
      />

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">India Salary Guide 2023</h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
            Know Your Worth in the Job Market
          </h2>
          <p className="text-blue-700 dark:text-blue-400">
            This comprehensive salary guide provides up-to-date information on compensation trends across various
            industries and roles in India. Use this information to benchmark your current salary or negotiate your next
            job offer.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Factors Affecting Salary in India
          </h2>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Several factors influence salary levels in India. Understanding these can help you better evaluate your
              compensation package:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Salaries in metro cities like Bangalore, Mumbai, and Delhi are typically 20-30% higher than in tier-2
                  cities, but the cost of living is also higher.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Experience significantly impacts salary, with mid-career professionals (5-10 years) often seeing the
                  largest percentage increases.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Degrees from premier institutions (IITs, IIMs, etc.) often command premium salaries, especially for
                  entry-level positions.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Company Size</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Multinational corporations and large Indian companies typically offer higher base salaries, while
                  startups might offer lower base pay but more equity.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Skills</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  In-demand skills like AI/ML, cloud computing, and digital marketing can command premium salaries
                  across industries.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Industry</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  IT, finance, and consulting typically offer higher compensation compared to manufacturing, education,
                  or non-profits.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {salaryData.map((industry) => (
            <section key={industry.industry}>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{industry.industry}</h2>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-700">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Experience
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Salary Range (Annual)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {industry.roles.map((role, index) => (
                        <tr
                          key={`${role.title}-${index}`}
                          className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                            {role.title}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                            {role.experience}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                            {role.salaryRange}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Understanding Total Compensation
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                When evaluating job offers, it's important to consider the total compensation package, not just the base
                salary. Here are the components to consider:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Base Salary</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The fixed amount paid regularly, typically monthly or annually.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Variable Pay</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Performance-based bonuses, commissions, or incentives that vary based on individual, team, or
                    company performance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Benefits</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Health insurance, retirement plans, life insurance, and other non-cash benefits that have
                    significant value.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Equity</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Stock options, RSUs, or other forms of company ownership, particularly common in startups and tech
                    companies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Perks</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Additional benefits like flexible working, professional development allowances, meal subsidies, and
                    transportation allowances.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Negotiation Tips</h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Armed with salary information, you can negotiate more effectively. Here are some tips:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Research thoroughly before discussing compensation</li>
                <li>Consider the entire package, not just the base salary</li>
                <li>Highlight your unique skills and achievements that justify higher compensation</li>
                <li>Be prepared to provide specific examples of your value</li>
                <li>Practice your negotiation conversation beforehand</li>
                <li>Consider non-monetary benefits if there's limited flexibility on salary</li>
                <li>Get the final offer in writing before accepting</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Need Personalized Advice?</h2>
          <p className="text-blue-700 dark:text-blue-400 mb-4">
            Our career counselors can provide personalized salary negotiation advice based on your specific situation
            and industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/blog"
              className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Read More Articles
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
