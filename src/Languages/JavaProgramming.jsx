
import { Link } from "react-router-dom";
import { ArrowRight, Coffee } from "lucide-react";
import JavaBasics from "./Java/JavaBasics";
import JavaIntroduction from "./Java/JavaIntroduction";



export default function JavaProgramming() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#222]">
      {/* Navbar */}
      <header className="border-b bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            SYNARCH<span className="text-[#F0440A]">.</span>
          </Link>

          <Link
            to="/courses/programming"
            className="text-sm text-gray-600 hover:text-[#F0440A]"
          >
            All Courses
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-center gap-2 text-sm font-medium text-[#F0440A]">
            <Coffee size={20} />
            PROGRAMMING / JAVA
          </div>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            Learn Java.
            <span className="block text-[#F0440A]">
              Build your future.
            </span>
          </h1>

          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            Start from the basics and learn Java step by step.
            Explore programming concepts, practice coding and
            build real-world projects.
          </p>

          <a
            href="#topics"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#F0440A] px-5 py-3 font-medium text-white hover:bg-[#D83B08]"
          >
            Start Learning <ArrowRight size={18} />
          </a>

          <p className="mt-5 text-sm text-gray-500">
            Beginner friendly · Practical learning · Interview preparation
          </p>
        </div>
      </section>
      {/* // Content Section */}
      <JavaIntroduction/>
    </main>
  );
}
