
import { useNavigate } from "react-router-dom";

export const htmlTopics = [
  {
    title: "Getting Started",
    path: "/courses/web-development/html/getting-started",
  },
  {
    title: "HTML Fundamentals",
    path: "/courses/web-development/html/fundamentals",
  },
  {
    title: "Document Structure",
    path: "/courses/web-development/html/document-structure",
  },
  {
    title: "Text & Formatting",
    path: "/courses/web-development/html/text-formatting",
  },
  {
    title: "Links & Navigation",
    path: "/courses/web-development/html/links-navigation",
  },
  {
    title: "Images & Graphics",
    path: "/courses/web-development/html/images-graphics",
  },
  {
    title: "Audio & Video",
    path: "/courses/web-development/html/audio-video",
  },
  {
    title: "Lists & Tables",
    path: "/courses/web-development/html/lists-tables",
  },
  {
    title: "Forms Fundamentals",
    path: "/courses/web-development/html/forms-fundamentals",
  },
  {
    title: "Form Validation",
    path: "/courses/web-development/html/form-validation",
  },
  {
    title: "Semantic HTML",
    path: "/courses/web-development/html/semantic-html",
  },
  {
    title: "HTML5 Elements",
    path: "/courses/web-development/html/html5-elements",
  },
  {
    title: "Metadata & SEO",
    path: "/courses/web-development/html/metadata-seo",
  },
  {
    title: "Accessibility",
    path: "/courses/web-development/html/accessibility",
  },
  {
    title: "HTML APIs & Browser Features",
    path: "/courses/web-development/html/browser-features",
  },
  {
    title: "Responsive & Performance",
    path: "/courses/web-development/html/responsive-performance",
  },
  {
    title: "HTML with CSS & JavaScript",
    path: "/courses/web-development/html/html-css-javascript",
  },
  {
    title: "Security & Best Practices",
    path: "/courses/web-development/html/security-best-practices",
  },
  {
    title: "Projects",
    path: "/courses/web-development/html/projects",
  },
  {
    title: "Interview & Assessment",
    path: "/courses/web-development/html/interview-assessment",
  },
];

export default function HtmlNav() {
  const navigate = useNavigate();

  const openModule = (path) => {
    navigate(path);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="flex min-h-[68px] items-center">
          <div className="html-nav-scroll flex min-w-0 flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap">
            {htmlTopics.map((topic) => (
              <button
                key={topic.path}
                type="button"
                onClick={() => openModule(topic.path)}
                className="shrink-0 px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-orange-50 hover:text-orange-600"
              >
                {topic.title}
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
