
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import ProgrammingDropdown from "./ProgrammingDropdown";
import WebDevelopmentDropdown from "./WebDevelopmentDropdown";
import DataScienceDropdown from "./DataScienceDropdown";
import AIMLDropdown from "./AIMLDropdown";
import DataAnalyticsDropdown from "./DataAnalyticsDropdown";
import MoreDropdown from "./MoreDropdown";

const categories = [
  { id: "programming", label: "Programming", Component: ProgrammingDropdown },
  { id: "web", label: "Web Development", Component: WebDevelopmentDropdown },
  { id: "data-science", label: "Data Science", Component: DataScienceDropdown },
  { id: "ai-ml", label: "AI & ML", Component: AIMLDropdown },
  { id: "analytics", label: "Data Analytics", Component: DataAnalyticsDropdown },
  { id: "more", label: "More", Component: MoreDropdown },
];

export default function LearningCategories() {
  const [activeMenu, setActiveMenu] = useState(null);

  const activeCategory = categories.find(
    (category) => category.id === activeMenu
  );

  const ActiveDropdown = activeCategory?.Component;

  return (
    <section
      className="relative z-40 border-y border-gray-200 bg-white"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Categories Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 md:px-10 lg:px-12">
        {categories.map((category) => {
          const isActive = activeMenu === category.id;

          return (
            <button
              key={category.id}
              type="button"
              aria-expanded={isActive}
              onMouseEnter={() => setActiveMenu(category.id)}
              onClick={() =>
                setActiveMenu(isActive ? null : category.id)
              }
              className={`flex shrink-0 items-center gap-2 border-b-2 py-5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-[#F0440A] text-[#F0440A]"
                  : "border-transparent text-gray-600 hover:text-[#F0440A]"
              }`}
            >
              {category.label}

              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  isActive ? "rotate-180" : ""
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Separate Dropdown Components */}
      {ActiveDropdown && <ActiveDropdown />}
    </section>
  );
}
