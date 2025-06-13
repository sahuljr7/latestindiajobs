import { redirect } from "next/navigation"

export default function ByBatchRedirect() {
  redirect("/jobs-by-batch")
  return null
}
