
import { useNavigate } from "react-router-dom";

export const htmlTopics = [
  "Getting Started",
  "HTML Fundamentals",
  "Document Structure",
  "Text & Formatting",
  "Links & Navigation",
  "Images & Graphics",
  "Audio & Video",
  "Lists & Tables",
  "Forms Fundamentals",
  "Form Validation",
  "Semantic HTML",
  "HTML5 Elements",
  "Metadata & SEO",
  "Accessibility",
  "HTML APIs & Browser Features",
  "Responsive & Performance",
  "HTML with CSS & JavaScript",
  "Security & Best Practices",
  "Projects",
  "Interview & Assessment",
];

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function HtmlNav() {
  const navigate = useNavigate();

  const openModule = (title) => {
    navigate({
      pathname: "/getting-started",
      search: `?module=${encodeURIComponent(slugify(title))}`,
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="flex min-h-[68px] items-center">
          <div className="html-nav-scroll flex min-w-0 flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap">
            {htmlTopics.map((title) => (
              <button
                key={title}
                type="button"
                onClick={() => openModule(title)}
                className="shrink-0 rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .html-nav-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior-x: contain;
          -webkit-overflow-scrolling: touch;
        }

        .html-nav-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
}
