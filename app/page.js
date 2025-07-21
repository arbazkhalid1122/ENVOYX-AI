import { redirect } from "next/navigation"

export default function HomePage() {
  redirect("/validate-access-code")
}
