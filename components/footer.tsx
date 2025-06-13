import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">LatestIndiaJobs</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Find your dream job with India's fastest growing job portal.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/private-jobs"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Private Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/government-jobs"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Government Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs-by-location"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Jobs by Location
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs-by-batch"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Jobs by Batch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Career Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resume-tips"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Resume Tips
                </Link>
              </li>
              <li>
                <Link
                  href="/interview-prep"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="/salary-guide"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Salary Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors block py-1"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} LatestIndiaJobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
