import Link from "next/link"

export default function Root() {
  return(
    <main>
      <h1 className="text-5xl">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className="text-2xl  text-cyan-500 hover:text-cyan-300 "  href="./week-2" >Week 2 Assignment</Link>
    </main>
  )
};