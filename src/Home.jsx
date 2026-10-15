import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  BrainCircuit,
  BriefcaseBusiness,
  Terminal,
} from "lucide-react";

const courses = [
  {
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React and more",
    icon: Code2,
    tag: "01",
  },
  {
    title: "Python",
    description: "From basics to advanced with real projects",
    icon: Terminal,
    tag: "02",
  },
  {
    title: "Data Structures",
    description: "Problem solving and algorithmic thinking",
    icon: Database,
    tag: "03",
  },
  {
    title: "AI & Machine Learning",
    description: "ML, GenAI and real-world applications",
    icon: BrainCircuit,
    tag: "04",
  },
  {
    title: "Placement Preparation",
    description: "Aptitude, resume and mock interviews",
    icon: BriefcaseBusiness,
    tag: "05",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171717]">
      {/* Navbar */}
      <nav className="border-b border-gray-100">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
          <a href="/" className="flex items-center gap-2">
            <div className="grid grid-cols-3 gap-[3px]">
              {[0, 1, 0, 1, 1, 1, 0, 1, 0].map((cell, i) => (
                <span
                  key={i}
                  className={`h-2.5 w-2.5 rounded-[2px] ${
                    cell ? "bg-[#FF4D1C]" : "bg-transparent"
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              SYNARCH
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="/" className="transition hover:text-[#FF4D1C]">
              Home
            </a>
            <a href="#about" className="transition hover:text-[#FF4D1C]">
              About
            </a>
            <a href="#courses" className="border-b-2 border-[#FF4D1C] py-2 text-[#FF4D1C]">
              Courses
            </a>
            <a href="#projects" className="transition hover:text-[#FF4D1C]">
              Projects
            </a>
            <a href="#community" className="transition hover:text-[#FF4D1C]">
              Community
            </a>
          </div>

          <a
            href="#courses"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF4D1C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e94112]"
          >
            Explore <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:px-12 lg:py-28"
      >
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute right-20 top-20 -z-0 h-64 w-64 rounded-full bg-orange-100/60 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#FF4D1C] sm:text-sm">
            <span className="h-[2px] w-7 bg-[#FF4D1C]" />
            SYNARCH Courses
          </div>

          <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Learn Today.
            <span className="mt-1 block text-[#FF4D1C]">
              Build Tomorrow.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            Curated courses, practical learning, and real projects to help you
            grow, get internships, and prepare for placements.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-3 rounded-xl bg-[#FF4D1C] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-100 transition hover:-translate-y-0.5 hover:bg-[#e94112]"
            >
              Explore Courses <ArrowRight size={18} />
            </a>

            <a
              href="#courses"
              className="inline-flex items-center gap-3 rounded-xl border border-gray-200 px-6 py-4 text-sm font-semibold transition hover:border-[#FF4D1C] hover:text-[#FF4D1C]"
            >
              View All Courses
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-gray-100 pt-7">
            {[
              ["Learn", "At your own pace"],
              ["Build", "Real-world projects"],
              ["Grow", "Career-ready skills"],
            ].map(([title, subtitle]) => (
              <div key={title}>
                <p className="text-lg font-bold">{title}</p>
                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Minimal Pixel Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center lg:max-w-[500px]"
        >
          <div className="absolute h-72 w-72 rounded-full border border-orange-100 sm:h-96 sm:w-96" />
          <div className="absolute h-56 w-56 rounded-full border border-orange-100/70 sm:h-72 sm:w-72" />

          <div className="relative grid grid-cols-5 gap-2 sm:gap-3">
            {[
              [2, 0, "orange"],
              [1, 1, "light"],
              [3, 1, "orange"],
              [0, 2, "orange"],
              [2, 2, "orange"],
              [4, 2, "light"],
              [1, 3, "orange"],
              [3, 3, "light"],
              [2, 4, "orange"],
            ].map(([col, row, color], i) => (
              <span
                key={i}
                style={{
                  gridColumn: Number(col) + 1,
                  gridRow: Number(row) + 1,
                }}
                className={`h-12 w-12 rounded-xl sm:h-16 sm:w-16 ${
                  color === "orange"
                    ? "bg-[#FF4D1C]"
                    : "bg-orange-100"
                } ${i % 2 === 0 ? "rotate-0" : "rotate-3"}`}
              />
            ))}
          </div>

          <div className="absolute bottom-7 right-0 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-100 sm:right-2">
            <p className="text-sm font-bold">Your next chapter.</p>
            <p className="mt-1 text-xs text-gray-500">
              Learn. Build. Get placed.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Courses */}
      <section
        id="courses"
        className="mx-auto max-w-[1400px] scroll-mt-10 px-6 pb-24 lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FF4D1C]">
              Start learning
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Courses<span className="text-[#FF4D1C]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500">
            Skills that matter. Projects that prove it. Knowledge that moves
            you forward.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.a
                href={`/courses/${course.title
                  .toLowerCase()
                  .replaceAll(" & ", "-")
                  .replaceAll(" ", "-")}`}
                key={course.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#FF4D1C] transition group-hover:bg-[#FF4D1C] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                  <span className="text-xs font-medium text-gray-300">
                    {course.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold leading-6">
                  {course.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                  {course.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-semibold transition group-hover:text-[#FF4D1C]">
                    Explore
                  </span>
                  <ArrowRight
                    size={17}
                    className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#FF4D1C]"
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-6 mb-10 rounded-3xl bg-[#FFF5F0] px-6 py-12 text-center sm:mx-12 sm:px-12 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF4D1C]">
          Your journey starts here
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Build skills. Create opportunities.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
          Start learning, work on projects, and take the next step toward your
          career with SYNARCH.
        </p>
        <a
          href="#courses"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#FF4D1C] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#e94112]"
        >
          Start Exploring <ArrowRight size={17} />
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-7">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row lg:px-6">
          <p>
            <span className="font-bold text-black">SYNARCH</span> — Learn.
            Build. Get Placed.
          </p>
          <p>Built for students, by students.</p>
        </div>
      </footer>
    </main>
  );
}