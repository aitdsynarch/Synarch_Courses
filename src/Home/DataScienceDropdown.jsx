
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "python", label: "Python for Data" },
  { id: "statistics", label: "Statistics" },
  { id: "analysis", label: "Data Analysis" },
  { id: "visualization", label: "Data Visualization" },
  { id: "projects", label: "Projects & Practice" },
];

const topics = {
  python: [
    ["Python Fundamentals", "Learn Python syntax and programming basics."],
    ["NumPy", "Perform numerical computations efficiently."],
    ["Pandas", "Clean, transform and analyze datasets."],
    ["Jupyter Notebook", "Experiment with interactive Python notebooks."],
    ["Data Cleaning", "Prepare data for meaningful analysis."],
    ["Working with CSV", "Import and process tabular datasets."],
    ["Python Libraries", "Explore essential data science tools."],
    ["Data Wrangling", "Transform raw data into useful formats."],
    ["Python Projects", "Apply your skills to real datasets."],
  ],
  statistics: [
    ["Descriptive Statistics", "Summarize and understand datasets."],
    ["Probability", "Learn probability concepts and applications."],
    ["Distributions", "Explore common probability distributions."],
    ["Hypothesis Testing", "Test assumptions using statistical methods."],
    ["Correlation", "Measure relationships between variables."],
    ["Regression", "Understand statistical relationships."],
    ["Sampling", "Learn sampling techniques."],
    ["Statistical Inference", "Draw conclusions from data."],
    ["Statistics Projects", "Apply statistics to real problems."],
  ],
  analysis: [
    ["Exploratory Data Analysis", "Discover patterns in datasets."],
    ["Data Cleaning", "Handle missing and inconsistent data."],
    ["Data Transformation", "Prepare data for analysis."],
    ["SQL for Data Science", "Query and organize relational data."],
    ["Feature Analysis", "Understand important data variables."],
    ["Outlier Detection", "Identify unusual observations."],
    ["Data Quality", "Evaluate data accuracy and consistency."],
    ["Analytical Thinking", "Turn questions into data investigations."],
    ["EDA Projects", "Explore real-world datasets."],
  ],
  visualization: [
    ["Matplotlib", "Create charts using Python."],
    ["Seaborn", "Visualize statistical relationships."],
    ["Plotly", "Build interactive visualizations."],
    ["Chart Selection", "Choose suitable charts for your data."],
    ["Data Storytelling", "Communicate findings clearly."],
    ["Visual Design", "Improve chart clarity and readability."],
    ["Interactive Charts", "Explore interactive data displays."],
    ["Dashboard Basics", "Organize visual insights."],
    ["Visualization Projects", "Present findings through charts."],
  ],
  projects: [
    ["Sales Analysis", "Explore sales trends and performance."],
    ["Customer Analysis", "Understand customer behavior."],
    ["Public Datasets", "Practice with openly available data."],
    ["Data Preparation", "Build reusable cleaning workflows."],
    ["Business Insights", "Answer practical business questions."],
    ["Exploratory Reports", "Document data discoveries."],
    ["Portfolio Projects", "Showcase your data skills."],
    ["Project Documentation", "Explain methods and results."],
    ["Data Science Roadmap", "Plan your learning journey."],
  ],
};

export default function DataScienceDropdown() {
  const [activeCategory, setActiveCategory] = useState("python");
  const activeTopics = topics[activeCategory] || [];

  return (
    <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-[#FAF9F7] shadow-xl">
      <div className="grid min-h-[390px] grid-cols-1 md:grid-cols-[250px_1fr]">
        <aside className="flex flex-col border-r border-gray-200 bg-[#EEEDEA] p-6">
          <p className="mb-5 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            Data Science
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
            href="/courses/data-science"
            className="mt-7 flex items-center justify-between bg-[#262522] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#F0440A] md:mt-auto"
          >
            Explore all courses
            <ArrowRight size={16} />
          </a>
        </aside>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F0440A]">
              Explore Data
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {categories.find((item) => item.id === activeCategory)?.label}
              <span className="ml-2 text-gray-400">→</span>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Learn to understand data, discover patterns and communicate insights.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
            {activeTopics.map(([title, description]) => (
              <a
                key={title}
                href={`/courses/data-science/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
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
