import { redirect } from "next/navigation"

export default function ByLocationRedirect() {
  redirect("/jobs-by-location")
  return null
}
