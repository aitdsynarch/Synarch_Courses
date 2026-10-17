
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const categories = [
  { id: "frontend", label: "Frontend Development" },
  { id: "backend", label: "Backend Development" },
  { id: "fullstack", label: "Full Stack Development" },
  { id: "frameworks", label: "Frameworks" },
  { id: "tools", label: "Developer Tools" },
  { id: "roadmaps", label: "Development Roadmaps" },
];

const topics = {
  frontend: {
    heading: "Frontend Development",
    description:
      "Build responsive, accessible and interactive web experiences.",
    items: [
      ["HTML", "html"],
      ["CSS", "css"],
      ["JavaScript", "javascript"],
      ["Responsive Design", "responsive-design"],
      ["Tailwind CSS", "tailwind-css"],
      ["DOM Manipulation", "dom-manipulation"],
      ["Web Accessibility", "web-accessibility"],
      ["UI Fundamentals", "ui-fundamentals"],
      ["Frontend Projects", "frontend-projects"],
    ],
  },

  backend: {
    heading: "Backend Development",
    description:
      "Build APIs, manage databases and develop server-side applications.",
    items: [
      ["Node.js", "node-js"],
      ["Express.js", "express-js"],
      ["REST APIs", "rest-apis"],
      ["Authentication", "authentication"],
      ["MongoDB", "mongodb"],
      ["SQL Databases", "sql-databases"],
      ["API Security", "api-security"],
      ["File Uploads", "file-uploads"],
      ["Backend Projects", "backend-projects"],
    ],
  },

  fullstack: {
    heading: "Full Stack Development",
    description:
      "Connect frontend interfaces, backend services and databases.",
    items: [
      ["MERN Stack", "mern-stack"],
      ["Frontend Integration", "frontend-integration"],
      ["Database Integration", "database-integration"],
      ["JWT Authentication", "jwt-authentication"],
      ["State Management", "state-management"],
      ["Full Stack Architecture", "full-stack-architecture"],
      ["Deployment", "deployment"],
      ["Environment Variables", "environment-variables"],
      ["Full Stack Projects", "full-stack-projects"],
    ],
  },

  frameworks: {
    heading: "Frameworks",
    description:
      "Explore popular libraries and frameworks for modern web development.",
    items: [
      ["React.js", "react-js"],
      ["Next.js", "next-js"],
      ["Vue.js", "vue-js"],
      ["Angular", "angular"],
      ["Svelte", "svelte"],
      ["Express.js", "express-js"],
      ["Bootstrap", "bootstrap"],
      ["Framer Motion", "framer-motion"],
      ["Framework Projects", "framework-projects"],
    ],
  },

  tools: {
    heading: "Developer Tools",
    description:
      "Master the tools and workflows used by professional developers.",
    items: [
      ["Git", "git"],
      ["GitHub", "github"],
      ["VS Code", "vs-code"],
      ["npm", "npm"],
      ["Browser DevTools", "browser-devtools"],
      ["Postman", "postman"],
      ["Vite", "vite"],
      ["Deployment Platforms", "deployment-platforms"],
      ["Developer Workflow", "developer-workflow"],
    ],
  },

  roadmaps: {
    heading: "Development Roadmaps",
    description:
      "Follow structured, step-by-step roadmaps for every web development stack.",
    items: [
      ["Frontend Roadmap", "frontend-roadmap"],
      ["Backend Roadmap", "backend-roadmap"],
      ["Full Stack Roadmap", "full-stack-roadmap"],
      ["MERN Stack Roadmap", "mern-stack-roadmap"],
      ["React.js Roadmap", "react-roadmap"],
      ["Next.js Roadmap", "nextjs-roadmap"],
      ["Node.js Roadmap", "nodejs-roadmap"],
      ["Python Backend Roadmap", "python-backend-roadmap"],
      ["Java Backend Roadmap", "java-backend-roadmap"],
      ["Web Design Roadmap", "web-design-roadmap"],
      ["DevOps for Web Developers", "web-devops-roadmap"],
      ["Web Development Interview Roadmap", "web-interview-roadmap"],
    ],
  },
};

export default function WebDevelopmentDropdown() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [mobileCategory, setMobileCategory] = useState(null);

  const activeData = topics[activeCategory];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);

    setMobileCategory((current) =>
      current === categoryId ? null : categoryId
    );
  };

  return (
    <div
      className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-[#FAF9F7] shadow-xl"
      onMouseLeave={() => setActiveCategory("frontend")}
    >
      {/* MOBILE ACCORDION */}
      <div className="max-h-[75vh] overflow-y-auto px-4 py-4 md:hidden">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
          Web Development
        </p>

        <div className="space-y-2">
          {categories.map((category) => {
            const isOpen = mobileCategory === category.id;
            const categoryData = topics[category.id];

            return (
              <div
                key={category.id}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen
                    ? "border-orange-200 bg-white"
                    : "border-gray-200 bg-white/60"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm transition-colors ${
                    isOpen
                      ? "font-semibold text-[#F0440A]"
                      : "text-gray-800"
                  }`}
                >
                  <span>{category.label}</span>

                  <ChevronDown
                    size={17}
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#F0440A]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 px-3 pb-3 pt-2">
                    <p className="px-2 pb-2 text-xs leading-5 text-gray-500">
                      {categoryData.description}
                    </p>

                    <div className="space-y-1">
                      {categoryData.items.map(([label, slug]) => (
                        <a
                          key={slug}
                          href={`/courses/web-development/${slug}`}
                          className="group flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#F0440A]"
                        >
                          <span>{label}</span>
                          <ArrowRight
                            size={14}
                            className="shrink-0 text-gray-400 group-hover:text-[#F0440A]"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <a
          href="/courses/web-development"
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#F0440A] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D83B08]"
        >
          Explore All Web Courses
          <ArrowRight size={16} />
        </a>
      </div>

      {/* DESKTOP SIDEBAR + TOPICS PANEL */}
      <div className="mx-auto hidden max-w-7xl grid-cols-12 md:grid">
        <aside className="col-span-4 bg-[#EEEDEA] px-5 py-7 md:col-span-3 md:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
            Web Development
          </p>

          <div className="space-y-1">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onFocus={() => setActiveCategory(category.id)}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group flex w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-left text-sm transition-all ${
                    isActive
                      ? "bg-white font-semibold text-[#F0440A] shadow-sm"
                      : "text-gray-700 hover:bg-white/70 hover:text-[#F0440A]"
                  }`}
                >
                  <span>{category.label}</span>

                  <ArrowRight
                    size={15}
                    className={`shrink-0 transition-transform ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </aside>

        <div className="col-span-8 px-5 py-7 md:col-span-9 md:px-10 lg:px-12">
          <div className="mb-7 border-b border-gray-200 pb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F0440A]">
              Explore Web Development
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {activeData.heading}
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              {activeData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {activeData.items.map(([label, slug]) => (
              <a
                key={slug}
                href={`/courses/web-development/${slug}`}
                className="group flex min-h-12 items-center justify-between gap-3 border-b border-gray-200/70 py-3 text-sm text-gray-700 transition-colors hover:text-[#F0440A]"
              >
                <span>{label}</span>

                <ArrowRight
                  size={14}
                  className="shrink-0 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-[#F0440A]"
                />
              </a>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
}
