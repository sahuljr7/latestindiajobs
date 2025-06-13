import { redirect } from "next/navigation"

export default function ResourcesPage() {
  redirect("/blog")
  return null
}
