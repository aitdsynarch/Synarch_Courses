
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "excel", label: "Excel" },
  { id: "sql", label: "SQL & Databases" },
  { id: "powerbi", label: "Power BI" },
  { id: "tableau", label: "Tableau" },
  { id: "business", label: "Business Analytics" },
];

const topics = {
  excel: [
    ["Excel Fundamentals", "Learn essential spreadsheet skills."],
    ["Formulas & Functions", "Calculate and transform data."],
    ["Lookup Functions", "Retrieve matching information."],
    ["Pivot Tables", "Summarize large datasets."],
    ["Data Cleaning", "Prepare data for reporting."],
    ["Charts & Graphs", "Visualize information clearly."],
    ["Excel Dashboards", "Build interactive reports."],
    ["Excel Automation", "Reduce repetitive spreadsheet work."],
    ["Excel Projects", "Practice real business scenarios."],
  ],
  sql: [
    ["SQL Fundamentals", "Learn queries and database basics."],
    ["Filtering & Sorting", "Find and organize records."],
    ["Joins", "Combine data across tables."],
    ["Aggregate Functions", "Summarize data with SQL."],
    ["Subqueries", "Write nested database queries."],
    ["Window Functions", "Perform advanced data analysis."],
    ["Database Design", "Structure relational data."],
    ["Query Optimization", "Improve query performance."],
    ["SQL Projects", "Analyze practical datasets."],
  ],
  powerbi: [
    ["Power BI Fundamentals", "Build your first BI reports."],
    ["Power Query", "Clean and transform data."],
    ["Data Modeling", "Connect tables and relationships."],
    ["DAX", "Create measures and calculations."],
    ["Interactive Dashboards", "Build interactive visual reports."],
    ["Data Refresh", "Keep reports updated."],
    ["Visual Design", "Design clear dashboards."],
    ["Business Reports", "Communicate insights effectively."],
    ["Power BI Projects", "Build portfolio-ready dashboards."],
  ],
  tableau: [
    ["Tableau Fundamentals", "Explore data visualization."],
    ["Connecting Data", "Import and connect datasets."],
    ["Charts & Visuals", "Choose effective visualizations."],
    ["Calculated Fields", "Create custom calculations."],
    ["Filters & Parameters", "Build interactive reports."],
    ["Dashboard Design", "Arrange useful visual insights."],
    ["Storytelling", "Communicate findings through data."],
    ["Publishing Dashboards", "Share interactive reports."],
    ["Tableau Projects", "Build practical dashboards."],
  ],
  business: [
    ["Business Metrics", "Understand KPIs and performance."],
    ["Sales Analytics", "Analyze sales trends."],
    ["Customer Analytics", "Understand customer behavior."],
    ["Financial Analytics", "Explore business financial data."],
    ["Data-Driven Decisions", "Use evidence to make decisions."],
    ["Reporting", "Create clear business reports."],
    ["Forecasting Basics", "Explore trends and future estimates."],
    ["Dashboard Projects", "Build business intelligence dashboards."],
    ["Analytics Portfolio", "Showcase practical analytical skills."],
  ],
};

export default function DataAnalyticsDropdown() {
  const [activeCategory, setActiveCategory] = useState("excel");
  const activeTopics = topics[activeCategory] || [];

  return (
    <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-[#FAF9F7] shadow-xl">
      <div className="grid min-h-[390px] grid-cols-1 md:grid-cols-[250px_1fr]">
        <aside className="flex flex-col border-r border-gray-200 bg-[#EEEDEA] p-6">
          <p className="mb-5 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            Data Analytics
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
            href="/courses/data-analytics"
            className="mt-7 flex items-center justify-between bg-[#262522] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#F0440A] md:mt-auto"
          >
            Explore all courses
            <ArrowRight size={16} />
          </a>
        </aside>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F0440A]">
              Work With Data
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {categories.find((item) => item.id === activeCategory)?.label}
              <span className="ml-2 text-gray-400">→</span>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Turn raw data into useful insights and informed decisions.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
            {activeTopics.map(([title, description]) => (
              <a
                key={title}
                href={`/courses/data-analytics/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
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
