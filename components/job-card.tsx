import { CalendarDays, MapPin } from "lucide-react"

interface JobCardProps {
  title: string
  company: string
  location: string
  tags: string[]
  postedDays: number
}

export default function JobCard({ title, company, location, tags, postedDays }: JobCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md dark:hover:shadow-lg transition-all duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100 mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2 line-clamp-1">{company}</p>
        </div>
      </div>

      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
        <MapPin size={16} className="mr-1 flex-shrink-0" />
        <span className="truncate">{location}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs px-2 py-1 rounded-full ${
              tag === "Private"
                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                : tag === "Sarkari"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                  : tag === "Remote"
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
        <CalendarDays size={14} className="mr-1 flex-shrink-0" />
        <span>
          Posted {postedDays} {postedDays === 1 ? "day" : "days"} ago
        </span>
      </div>
    </div>
  )
}
