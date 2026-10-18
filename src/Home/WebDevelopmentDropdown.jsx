
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
      ["HTML", "/courses/web-development/html"],
      ["CSS", "/courses/web-development/css"],
      ["JavaScript", "/courses/web-development/javascript"],
      ["Responsive Design", "/courses/web-development/responsive-design"],
      ["Tailwind CSS", "/courses/web-development/tailwind-css"],
      ["DOM Manipulation", "/courses/web-development/dom-manipulation"],
      ["Web Accessibility", "/courses/web-development/web-accessibility"],
      ["UI Fundamentals", "/courses/web-development/ui-fundamentals"],
      ["Frontend Projects", "/courses/web-development/frontend-projects"],
    ],
  },

  backend: {
    heading: "Backend Development",
    description:
      "Build APIs, manage databases and develop server-side applications.",
    items: [
      ["Node.js", "/courses/web-development/node-js"],
      ["Express.js", "/courses/web-development/express-js"],
      ["REST APIs", "/courses/web-development/rest-apis"],
      ["Authentication", "/courses/web-development/authentication"],
      ["MongoDB", "/courses/web-development/mongodb"],
      ["SQL Databases", "/courses/web-development/sql-databases"],
      ["API Security", "/courses/web-development/api-security"],
      ["File Uploads", "/courses/web-development/file-uploads"],
      ["Backend Projects", "/courses/web-development/backend-projects"],
    ],
  },

  fullstack: {
    heading: "Full Stack Development",
    description:
      "Connect frontend interfaces, backend services and databases.",
    items: [
      ["MERN Stack", "/courses/web-development/mern-stack"],
      ["Frontend Integration", "/courses/web-development/frontend-integration"],
      ["Database Integration", "/courses/web-development/database-integration"],
      ["JWT Authentication", "/courses/web-development/jwt-authentication"],
      ["State Management", "/courses/web-development/state-management"],
      ["Full Stack Architecture", "/courses/web-development/full-stack-architecture"],
      ["Deployment", "/courses/web-development/deployment"],
      ["Environment Variables", "/courses/web-development/environment-variables"],
      ["Full Stack Projects", "/courses/web-development/full-stack-projects"],
    ],
  },

  frameworks: {
    heading: "Frameworks",
    description:
      "Explore popular libraries and frameworks for modern web development.",
    items: [
      ["React.js", "/courses/web-development/react-js"],
      ["Next.js", "/courses/web-development/next-js"],
      ["Vue.js", "/courses/web-development/vue-js"],
      ["Angular", "/courses/web-development/angular"],
      ["Svelte", "/courses/web-development/svelte"],
      ["Express.js", "/courses/web-development/express-js"],
      ["Bootstrap", "/courses/web-development/bootstrap"],
      ["Framer Motion", "/courses/web-development/framer-motion"],
      ["Framework Projects", "/courses/web-development/framework-projects"],
    ],
  },

  tools: {
    heading: "Developer Tools",
    description:
      "Master the tools and workflows used by professional developers.",
    items: [
      ["Git", "/courses/web-development/git"],
      ["GitHub", "/courses/web-development/github"],
      ["VS Code", "/courses/web-development/vs-code"],
      ["npm", "/courses/web-development/npm"],
      ["Browser DevTools", "/courses/web-development/browser-devtools"],
      ["Postman", "/courses/web-development/postman"],
      ["Vite", "/courses/web-development/vite"],
      ["Deployment Platforms", "/courses/web-development/deployment-platforms"],
      ["Developer Workflow", "/courses/web-development/developer-workflow"],
    ],
  },

  roadmaps: {
    heading: "Development Roadmaps",
    description:
      "Follow structured, step-by-step roadmaps for web development.",
    items: [
      ["Frontend Roadmap", "/courses/web-development/frontend-roadmap"],
      ["Backend Roadmap", "/courses/web-development/backend-roadmap"],
      ["Full Stack Roadmap", "/courses/web-development/full-stack-roadmap"],
      ["MERN Stack Roadmap", "/courses/web-development/mern-stack-roadmap"],
      ["React.js Roadmap", "/courses/web-development/react-roadmap"],
      ["Next.js Roadmap", "/courses/web-development/nextjs-roadmap"],
      ["Node.js Roadmap", "/courses/web-development/nodejs-roadmap"],
      ["Python Backend Roadmap", "/courses/web-development/python-backend-roadmap"],
      ["Java Backend Roadmap", "/courses/web-development/java-backend-roadmap"],
      ["Web Design Roadmap", "/courses/web-development/web-design-roadmap"],
      ["DevOps for Web Developers", "/courses/web-development/web-devops-roadmap"],
      ["Web Development Interview Roadmap", "/courses/web-development/web-interview-roadmap"],
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
                className={`overflow-hidden border transition-colors ${
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
                      {categoryData.items.map(([label, path]) => (
                        <a
                          key={path}
                          href={path}
                          className="group flex items-center justify-between gap-3 px-3 py-3 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#F0440A]"
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
          className="mt-4 flex items-center justify-center gap-2 bg-[#F0440A] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D83B08]"
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
                  className={`group flex w-full items-center justify-between gap-2 px-3 py-3 text-left text-sm transition-all ${
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
            {activeData.items.map(([label, path]) => (
              <a
                key={path}
                href={path}
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
