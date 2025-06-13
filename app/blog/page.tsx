import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import { Calendar, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Career Blog - LatestIndiaJobs",
  description: "Read our latest articles on job search tips, career advice, industry trends, and more.",
}

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "10 Resume Tips That Will Help You Get Hired",
    excerpt:
      "Learn how to create a standout resume that will catch the attention of recruiters and increase your chances of landing an interview.",
    author: "Priya Sharma",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Resume Tips",
    image: "/placeholder.svg?height=200&width=400",
    slug: "10-resume-tips",
  },
  {
    id: 2,
    title: "How to Prepare for Virtual Interviews in 2023",
    excerpt:
      "Virtual interviews are here to stay. Learn how to prepare, what to wear, and how to make a great impression through your screen.",
    author: "Rahul Verma",
    date: "May 28, 2023",
    readTime: "6 min read",
    category: "Interview Tips",
    image: "/placeholder.svg?height=200&width=400",
    slug: "virtual-interview-preparation",
  },
  {
    id: 3,
    title: "The Future of Work: Emerging Careers in India",
    excerpt:
      "Discover the fastest-growing career fields in India and how you can position yourself for success in these emerging industries.",
    author: "Amit Patel",
    date: "May 10, 2023",
    readTime: "10 min read",
    category: "Career Insights",
    image: "/placeholder.svg?height=200&width=400",
    slug: "emerging-careers-india",
  },
  {
    id: 4,
    title: "Networking Strategies for Introverts",
    excerpt:
      "Networking doesn't have to be intimidating. Learn effective strategies for building professional connections, even if you're an introvert.",
    author: "Neha Gupta",
    date: "April 22, 2023",
    readTime: "7 min read",
    category: "Networking",
    image: "/placeholder.svg?height=200&width=400",
    slug: "networking-for-introverts",
  },
  {
    id: 5,
    title: "How to Negotiate Your Salary Like a Pro",
    excerpt:
      "Don't leave money on the table. Learn proven techniques for negotiating a better salary package in your next job offer.",
    author: "Vikram Singh",
    date: "April 5, 2023",
    readTime: "9 min read",
    category: "Salary Negotiation",
    image: "/placeholder.svg?height=200&width=400",
    slug: "salary-negotiation-tips",
  },
  {
    id: 6,
    title: "Switching Careers: A Step-by-Step Guide",
    excerpt:
      "Thinking about changing careers? This comprehensive guide will help you navigate the transition successfully.",
    author: "Ananya Desai",
    date: "March 18, 2023",
    readTime: "12 min read",
    category: "Career Change",
    image: "/placeholder.svg?height=200&width=400",
    slug: "career-switching-guide",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Career Blog", href: "/blog" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">Career Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Insights, advice, and guidance to help you navigate your career journey. From resume tips to industry trends,
          our blog covers everything you need to succeed in today's job market.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-3">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{blogPosts[0].title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{blogPosts[0].excerpt}</p>
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <User size={16} className="mr-1" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <Clock size={16} className="mr-1" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-3">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <User size={16} className="mr-1" />
                <span className="mr-4">{post.author}</span>
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block px-4 py-2 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-blue-600 dark:bg-blue-500 text-sm font-medium text-white"
          >
            2
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            3
          </a>
          <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">
            ...
          </span>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Next</span>
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  )
}
