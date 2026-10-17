
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "frontend", label: "Frontend Development" },
  { id: "backend", label: "Backend Development" },
  { id: "fullstack", label: "Full Stack Development" },
  { id: "frameworks", label: "Frameworks" },
  { id: "tools", label: "Developer Tools" },
];

const topics = {
  frontend: [
    ["HTML", "Learn the structure of modern web pages."],
    ["CSS", "Style beautiful and responsive websites."],
    ["JavaScript", "Build interactive web experiences."],
    ["Responsive Design", "Create mobile-friendly interfaces."],
    ["Tailwind CSS", "Build interfaces with utility classes."],
    ["DOM Manipulation", "Control page elements using JavaScript."],
    ["Web Accessibility", "Build inclusive websites."],
    ["UI Fundamentals", "Understand layouts, typography and spacing."],
    ["Frontend Projects", "Build practical frontend applications."],
  ],
  backend: [
    ["Node.js", "Run JavaScript on the server."],
    ["Express.js", "Build backend applications and APIs."],
    ["REST APIs", "Create and consume RESTful services."],
    ["Authentication", "Implement login and authorization."],
    ["MongoDB", "Work with document-oriented databases."],
    ["SQL Databases", "Store and query structured data."],
    ["API Security", "Learn secure API development."],
    ["File Uploads", "Handle files in backend applications."],
    ["Backend Projects", "Build practical server-side applications."],
  ],
  fullstack: [
    ["MERN Stack", "Build apps with MongoDB, Express, React and Node."],
    ["Frontend Integration", "Connect interfaces to backend services."],
    ["Database Integration", "Connect applications to databases."],
    ["JWT Authentication", "Implement token-based authentication."],
    ["State Management", "Manage application data and UI state."],
    ["Full Stack Architecture", "Structure scalable applications."],
    ["Deployment", "Publish full-stack applications."],
    ["Environment Variables", "Manage configuration securely."],
    ["Full Stack Projects", "Build complete end-to-end applications."],
  ],
  frameworks: [
    ["React.js", "Create reusable UI components."],
    ["Next.js", "Build production-ready React applications."],
    ["Vue.js", "Develop reactive user interfaces."],
    ["Angular", "Build structured web applications."],
    ["Svelte", "Create lightweight interactive interfaces."],
    ["Express.js", "Develop Node.js backend services."],
    ["Bootstrap", "Build responsive interfaces quickly."],
    ["Framer Motion", "Add animations to React interfaces."],
    ["Framework Projects", "Apply your skills through projects."],
  ],
  tools: [
    ["Git", "Track code changes and versions."],
    ["GitHub", "Collaborate and host repositories."],
    ["VS Code", "Set up an efficient coding workflow."],
    ["npm", "Manage JavaScript packages."],
    ["Browser DevTools", "Debug and inspect web applications."],
    ["Postman", "Test APIs and HTTP requests."],
    ["Vite", "Build and run modern frontend projects."],
    ["Deployment Platforms", "Publish websites online."],
    ["Developer Workflow", "Improve everyday development practices."],
  ],
};

export default function WebDevelopmentDropdown() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const activeTopics = topics[activeCategory] || [];

  return (
    <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-[#FAF9F7] shadow-xl">
      <div className="grid min-h-[390px] grid-cols-1 md:grid-cols-[250px_1fr]">
        <aside className="flex flex-col border-r border-gray-200 bg-[#EEEDEA] p-6">
          <p className="mb-5 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            Web Development
          </p>

          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onMouseEnter={() => setActiveCategory(category.id)}
                onFocus={() => setActiveCategory(category.id)}
                onClick={() => setActiveCategory(category.id)}
                className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm transition ${
                  activeCategory === category.id
                    ? "bg-white font-semibold text-[#F0440A] shadow-sm"
                    : "text-gray-700 hover:bg-white/70"
                }`}
              >
                {category.label}
                <ArrowRight size={15} />
              </button>
            ))}
          </div>

          <a
            href="/courses/web-development"
            className="mt-7 flex items-center justify-between bg-[#262522] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#F0440A] md:mt-auto"
          >
            Explore all courses
            <ArrowRight size={16} />
          </a>
        </aside>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F0440A]">
              Learn & Build
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {categories.find((item) => item.id === activeCategory)?.label}
              <span className="ml-2 text-gray-400">→</span>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Learn modern web technologies and build real-world applications.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
            {activeTopics.map(([title, description]) => (
              <a
                key={title}
                href={`/courses/web-development/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                className="group block"
              >
                <h4 className="text-sm font-medium text-gray-900 transition-colors group-hover:text-[#F0440A]">
                  {title}
                </h4>
                <p className="mt-1.5 max-w-xs text-xs leading-5 text-gray-500 sm:text-[13px]">
                  {description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
