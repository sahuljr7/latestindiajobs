import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center flex-wrap text-sm text-gray-600 dark:text-gray-400 mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight size={16} className="mx-2 flex-shrink-0" />}
          {index === items.length - 1 ? (
            <span className="text-gray-900 dark:text-gray-100 font-medium truncate">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
