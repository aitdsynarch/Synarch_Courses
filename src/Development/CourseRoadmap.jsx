
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Globe,
  Layout,
  Server,
  Database,
  Map,
  ArrowRight,
  BookOpen,
  Layers3,
} from "lucide-react";

const paths = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Design and build user interfaces",
    icon: Layout,
    color: "#F15A24",
    topics: [
      { name: "HTML", desc: "Web page structure", level: "Beginner", route: "/courses/html" },
      { name: "CSS", desc: "Layouts and styling", level: "Beginner", route: "/courses/css" },
      { name: "JavaScript", desc: "Logic and interactivity", level: "Core", route: "/courses/javascript" },
      { name: "React.js", desc: "Modern UI development", level: "Advanced", route: "/courses/react" },
      { name: "Tailwind CSS", desc: "Utility-first styling", level: "Core", route: "/courses/tailwind-css" },
      { name: "TypeScript", desc: "Type-safe JavaScript", level: "Advanced", route: "/courses/typescript" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Build servers, APIs and application logic",
    icon: Server,
    color: "#6755E8",
    topics: [
      { name: "Node.js", desc: "JavaScript on the server", level: "Core", route: "/courses/nodejs" },
      { name: "Express.js", desc: "Build REST APIs", level: "Core", route: "/courses/expressjs" },
      { name: "Java", desc: "Backend programming", level: "Core", route: "/courses/java" },
      { name: "Spring Boot", desc: "Java backend framework", level: "Advanced", route: "/courses/spring-boot" },
      { name: "Python", desc: "Backend development", level: "Core", route: "/courses/python" },
      { name: "REST APIs", desc: "Connect applications", level: "Core", route: "/courses/rest-api" },
      { name: "Authentication", desc: "JWT and user sessions", level: "Advanced", route: "/courses/authentication" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Store, query and manage application data",
    icon: Database,
    color: "#0D9488",
    topics: [
      { name: "SQL", desc: "Query structured data", level: "Beginner", route: "/courses/sql" },
      { name: "MySQL", desc: "Relational databases", level: "Core", route: "/courses/mysql" },
      { name: "PostgreSQL", desc: "Advanced SQL database", level: "Advanced", route: "/courses/postgresql" },
      { name: "MongoDB", desc: "NoSQL document database", level: "Core", route: "/courses/mongodb" },
      { name: "Redis", desc: "In-memory data storage", level: "Advanced", route: "/courses/redis" },
    ],
  },
  {
    id: "roadmaps",
    title: "Roadmaps",
    description: "Follow a structured path from zero to projects",
    icon: Map,
    color: "#CA8A04",
    topics: [
      { name: "Web Fundamentals", desc: "Internet, browsers and HTTP", level: "Phase 01", route: "/roadmaps/web-fundamentals" },
      { name: "Frontend Development", desc: "HTML, CSS, JavaScript and React", level: "Phase 02", route: "/roadmaps/frontend" },
      { name: "Backend Development", desc: "Servers, APIs and authentication", level: "Phase 03", route: "/roadmaps/backend" },
      { name: "Database Integration", desc: "Store and retrieve data", level: "Phase 04", route: "/roadmaps/database" },
      { name: "Full-Stack Projects", desc: "Build complete applications", level: "Phase 05", route: "/roadmaps/full-stack" },
      { name: "Deployment", desc: "Launch projects online", level: "Phase 06", route: "/roadmaps/deployment" },
    ],
  },
];

export default function CourseRoadmap() {
  const [active, setActive] = useState(0);

  const current = paths[active];
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
              Web Development
              <span className="text-orange-600">.</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7">
              Learn the technologies, build real-world projects, and develop
              skills for your career.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-xl border border-neutral-200 px-4 py-3 sm:self-auto">
            <BookOpen size={20} className="text-orange-600" />
            <div>
              <p className="text-lg font-bold leading-none">04</p>
              <p className="mt-1 text-xs text-neutral-500">Learning paths</p>
            </div>
          </div>
        </div>

        {/* Main course */}
        <div className="relative mb-7 sm:mb-9">
          <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:gap-4 sm:p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-950 text-white sm:h-14 sm:w-14">
              <Globe size={25} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 sm:text-xs">
                Complete learning path
              </p>
              <h3 className="mt-1 text-base font-bold sm:text-lg">
                Web Development
              </h3>
              <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                Beginner to advanced
              </p>
            </div>

            <Layers3 size={23} className="shrink-0 text-neutral-300" />
          </div>

          <div className="ml-9 h-5 w-px bg-neutral-200 sm:ml-12 sm:h-7" />
          <div className="absolute bottom-0 left-9 h-px w-4 bg-neutral-200 sm:left-12 sm:w-6" />
        </div>

        {/* Navbar-style categories */}
        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold sm:text-base">
              Explore categories
            </h3>
            <span className="text-xs text-neutral-400">
              {String(active + 1).padStart(2, "0")} / 04
            </span>
          </div>

          <div
            className="flex gap-1 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-1.5 sm:gap-2"
            role="tablist"
            aria-label="Course categories"
          >
            {paths.map((path, index) => {
              const isActive = active === index;
              const Icon = path.icon;

              return (
                <button
                  key={path.id}
                  id={`tab-${path.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="course-panel"
                  onClick={() => setActive(index)}
                  className={`flex min-h-11 shrink-0 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-200 sm:px-5 sm:text-sm ${
                    isActive
                      ? "bg-neutral-950 text-white shadow-sm"
                      : "text-neutral-600 hover:bg-white hover:text-neutral-950"
                  }`}
                >
                  <Icon size={16} />
                  {path.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category content */}
        <div
          id="course-panel"
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
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

              {/* Simple cards: 2 columns on mobile, 3 on desktop */}
              <div className="grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-5 lg:grid-cols-3">
                {current.topics.map((topic, index) => (
                  <motion.div
                    key={topic.name}
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

              {/* Bottom navigation */}
              <div className="flex items-center justify-between gap-2 border-t border-neutral-200 bg-neutral-50 p-3 sm:p-4">
                <button
                  type="button"
                  onClick={() =>
                    setActive((active - 1 + paths.length) % paths.length)
                  }
                  className="min-h-10 rounded-lg px-2 text-xs font-semibold text-neutral-600 transition hover:bg-white hover:text-black sm:px-3 sm:text-sm"
                >
                  ← Previous
                </button>

                <div className="flex items-center gap-1.5">
                  {paths.map((path, index) => (
                    <button
                      key={path.id}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`Show ${path.title}`}
                      aria-current={active === index ? "step" : undefined}
                      className={`h-1.5 rounded-full transition-all ${
                        active === index
                          ? "w-5 bg-orange-500"
                          : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setActive((active + 1) % paths.length)}
                  className="min-h-10 rounded-lg px-2 text-xs font-semibold text-orange-600 transition hover:bg-white sm:px-3 sm:text-sm"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-start gap-2.5 text-xs leading-5 text-neutral-400 sm:mt-6 sm:text-sm">
          <BookOpen size={17} className="mt-0.5 shrink-0" />
          <p>
            Choose a learning path and open any technology to explore its
            course on SYNARCH.
          </p>
        </div>
      </div>
    </section>
  );
}
