
import { ArrowRight } from "lucide-react";

export default function MegaDropdown({
  title,
  items,
  categories,
  activeCategory,
  onCategoryChange,
}) {
  const slug = (value) =>
    value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-[#FAF9F7] shadow-xl">
      <div className="grid min-h-[370px] grid-cols-1 md:grid-cols-[250px_1fr]">
        <aside className="flex flex-col border-r border-gray-200 bg-[#EEEDEA] p-6">
          <p className="mb-5 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            Learning Categories
          </p>

          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onMouseEnter={() => onCategoryChange(category.id)}
                onClick={() => onCategoryChange(category.id)}
                className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm transition ${
                  activeCategory === category.id
                    ? "bg-white font-semibold text-[#F0440A]"
                    : "text-gray-700 hover:bg-white/70"
                }`}
              >
                {category.label}
                <ArrowRight size={15} />
              </button>
            ))}
          </div>

          <a
            href="/courses"
            className="mt-7 flex items-center justify-between bg-[#262522] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#F0440A] md:mt-auto"
          >
            Explore all courses
            <ArrowRight size={16} />
          </a>
        </aside>

        <div className="p-6 sm:p-8 lg:p-10">
          <a
            href={`/courses/${slug(title)}`}
            className="group mb-8 inline-flex items-center gap-3 text-2xl font-semibold text-gray-900"
          >
            {title}
            <ArrowRight
              size={20}
              className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#F0440A]"
            />
          </a>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <a
                key={item.title}
                href={`/courses/${slug(item.title)}`}
                className="group"
              >
                <h3 className="text-sm font-medium text-gray-900 transition group-hover:text-[#F0440A]">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-xs text-xs leading-5 text-gray-500 sm:text-[13px]">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
