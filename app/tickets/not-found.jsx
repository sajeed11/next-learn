import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-2xl">
        We hit a brick wall.
      </h2>
      <p>
        We could not find the ticket your were looking for!
      </p>
      <p>
        Go back to the <Link href="/tickets"> Tickets</Link>
      </p>
    </main>
  )
}
