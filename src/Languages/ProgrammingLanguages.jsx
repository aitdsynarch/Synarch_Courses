
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Braces,
  Database,
  Cpu,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const categories = [
  {
    id: "popular",
    title: "Popular",
    description: "Start with popular programming languages",
    icon: Code2,
    color: "#F15A24",
    topics: [
      { name: "C", desc: "Programming fundamentals", level: "Beginner", route: "/programming/c" },
      { name: "C++", desc: "OOP and problem solving", level: "Core", route: "/programming/cpp" },
      { name: "Java", desc: "OOP and application development", level: "Core", route: "/programming/java" },
      { name: "Python", desc: "Simple and versatile programming", level: "Beginner", route: "/programming/python" },
      { name: "JavaScript", desc: "Interactive web applications", level: "Core", route: "/programming/javascript" },
      { name: "TypeScript", desc: "Typed JavaScript development", level: "Advanced", route: "/programming/typescript" },
    ],
  },
  {
    id: "systems",
    title: "Systems",
    description: "Explore systems and performance-oriented languages",
    icon: Cpu,
    color: "#6755E8",
    topics: [
      { name: "C", desc: "Memory and low-level concepts", level: "Beginner", route: "/programming/c" },
      { name: "C++", desc: "Performance-oriented programming", level: "Core", route: "/programming/cpp" },
      { name: "Rust", desc: "Memory-safe systems programming", level: "Advanced", route: "/programming/rust" },
      { name: "Go", desc: "Concurrent server applications", level: "Core", route: "/programming/go" },
      { name: "Assembly", desc: "Processor-level programming", level: "Advanced", route: "/programming/assembly" },
    ],
  },
  {
    id: "web",
    title: "Web",
    description: "Languages for frontend and backend development",
    icon: Braces,
    color: "#0D9488",
    topics: [
      { name: "HTML", desc: "Structure of web pages", level: "Beginner", route: "/courses/html" },
      { name: "CSS", desc: "Style and layout web pages", level: "Beginner", route: "/courses/css" },
      { name: "JavaScript", desc: "Interactive web experiences", level: "Core", route: "/programming/javascript" },
      { name: "TypeScript", desc: "Safer application development", level: "Advanced", route: "/programming/typescript" },
      { name: "PHP", desc: "Server-side web development", level: "Core", route: "/programming/php" },
    ],
  },
  {
    id: "data",
    title: "Data & AI",
    description: "Languages used in data and AI workflows",
    icon: Database,
    color: "#CA8A04",
    topics: [
      { name: "Python", desc: "Data science and machine learning", level: "Beginner", route: "/programming/python" },
      { name: "R", desc: "Statistics and data analysis", level: "Core", route: "/programming/r" },
      { name: "SQL", desc: "Query and manage data", level: "Beginner", route: "/courses/sql" },
      { name: "Julia", desc: "Scientific and numerical computing", level: "Advanced", route: "/programming/julia" },
    ],
  },
];

export default function ProgrammingLanguages() {
  const [active, setActive] = useState(0);

  const current = categories[active];
  const ActiveIcon = current.icon;

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-10 text-neutral-950 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[10px] font-bold tracking-widest text-orange-700 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              SYNARCH LEARNING HUB
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Programming Languages
              <span className="text-orange-600">.</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7">
              Learn programming from the basics, master new technologies,
              and build your problem-solving skills.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-xl border border-neutral-200 px-4 py-3 sm:self-auto">
            <BookOpen size={20} className="text-orange-600" />
            <div>
              <p className="text-lg font-bold leading-none">
                {categories.reduce((total, category) => total + category.topics.length, 0)}
              </p>
              <p className="mt-1 text-xs text-neutral-500">Learning options</p>
            </div>
          </div>
        </div>

        {/* Main course */}
        <div className="mb-7 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:mb-9 sm:gap-4 sm:p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white sm:h-14 sm:w-14">
            <Terminal size={25} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 sm:text-xs">
              Your learning path
            </p>
            <h3 className="mt-1 text-base font-bold sm:text-lg">
              Programming Languages
            </h3>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Beginner to advanced
            </p>
          </div>

          <Code2 size={23} className="shrink-0 text-neutral-300" />
        </div>

        {/* Navbar categories */}
        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold sm:text-base">
              Explore languages
            </h3>
            <span className="text-xs text-neutral-400">
              {String(active + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
            </span>
          </div>

          <div
            className="flex gap-1 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-1.5 sm:gap-2"
            role="tablist"
            aria-label="Programming categories"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = active === index;

              return (
                <button
                  key={category.id}
                  id={`programming-tab-${category.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="programming-panel"
                  onClick={() => setActive(index)}
                  className={`flex min-h-11 shrink-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-xs font-semibold transition-all sm:px-5 sm:text-sm ${
                    isActive
                      ? "bg-neutral-950 text-white shadow-sm"
                      : "text-neutral-600 hover:bg-white hover:text-neutral-950"
                  }`}
                >
                  <Icon size={16} />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated language panel */}
        <div
          id="programming-panel"
          role="tabpanel"
          aria-labelledby={`programming-tab-${current.id}`}
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2 }}
            >
              {/* Category heading */}
              <div className="flex items-center gap-3 border-b border-neutral-100 p-4 sm:gap-4 sm:p-6">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12"
                  style={{
                    backgroundColor: `${current.color}15`,
                    color: current.color,
                  }}
                >
                  <ActiveIcon size={23} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold sm:text-xl">
                    {current.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                    {current.description}
                  </p>
                </div>

                <span className="shrink-0 rounded-lg bg-neutral-100 px-2.5 py-2 text-xs font-medium text-neutral-500 sm:px-3">
                  {current.topics.length} topics
                </span>
              </div>

              {/* Simple cards: 2 on mobile, 3 on desktop */}
              <div className="grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-5 lg:grid-cols-3">
                {current.topics.map((topic, index) => (
                  <motion.div
                    key={`${topic.name}-${index}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.035, duration: 0.2 }}
                    className="min-w-0"
                  >
                    <Link
                      to={topic.route}
                      className="group flex h-full min-h-[88px] min-w-0 items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-white p-3 transition-colors hover:border-orange-300 hover:bg-orange-50 sm:min-h-[96px] sm:p-4"
                    >
                      <div className="min-w-0">
                        <h4 className="break-words text-sm font-semibold text-neutral-800 sm:text-base">
                          {topic.name}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-neutral-500">
                          {topic.desc}
                        </p>
                      </div>

                      <ArrowRight
                        size={16}
                        className="shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-600"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-start gap-2.5 text-xs leading-5 text-neutral-400 sm:mt-6 sm:text-sm">
          <BookOpen size={17} className="mt-0.5 shrink-0" />
          <p>
            Choose a language to explore its course and start learning
            with SYNARCH.
          </p>
        </div>
      </div>
    </section>
  );
}
