import { useEffect, useState } from "react";
import {
  BookOpen,
  Code2,
  Copy,
  Check,
  Clock3,
  GraduationCap,
  ArrowUp,
  PlayCircle,
  ListVideo,
} from "lucide-react";
import HtmlNav from "./HtmlNav";

export default function GettingStarted() {
  const [completed, setCompleted] = useState([]);
  const [copied, setCopied] = useState("");
  const [activeLesson, setActiveLesson] = useState("what-is-html");

  const sectionIds = [
    "what-is-html",
    "history-of-html",
    "html-vs-html5",
    "how-websites-work",
    "browser-rendering",
    "setup-vscode",
    "install-live-server",
    "first-html-file",
    "first-html-page",
    "html-boilerplate",
    "view-html-browser",
    "devtools-basics",
  ];

  const lessonTitles = [
    "What is HTML?",
    "History of HTML",
    "HTML vs HTML5",
    "How Websites Work",
    "How Browsers Render HTML",
    "Setting Up VS Code",
    "Installing Live Server",
    "Creating Your First HTML File",
    "Writing Your First HTML Page",
    "HTML Boilerplate",
    "Viewing HTML in a Browser",
    "Developer Tools Basics",
  ];

  const progress = Math.round((completed.length / 12) * 100);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length) {
          setActiveLesson(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToLesson = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveLesson(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const copyCode = async (code, title) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(title);

      window.setTimeout(() => {
        setCopied((current) => (current === title ? "" : current));
      }, 1800);
    } catch (error) {
      console.error("Unable to copy code:", error);
    }
  };

  const toggleComplete = (title) => {
    setCompleted((previous) =>
      previous.includes(title)
        ? previous.filter((item) => item !== title)
        : [...previous, title]
    );
  };

  // Reusable visual wrapper for code examples.
  // Each lesson's section and lesson content are still written separately.
  const CodeExample = ({ title, code, output }) => (
    <>
      <div className="mt-8 flex items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 font-bold">
          <Code2 size={19} className="text-orange-500" />
          Code Example
        </h3>

        <button
          type="button"
          onClick={() => copyCode(code, title)}
          className="flex items-center gap-2 border border-slate-300 bg-white px-4 py-2 text-xs font-bold hover:border-orange-500 hover:text-orange-600"
        >
          {copied === title ? <Check size={15} /> : <Copy size={15} />}
          {copied === title ? "Copied!" : "Copy Code"}
        </button>
      </div>

      <div className="mt-4 overflow-hidden border border-slate-800 bg-[#11151c]">
        <div className="flex items-center justify-between border-b border-slate-700 px-5 py-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 bg-red-400" />
            <span className="h-2.5 w-2.5 bg-yellow-400" />
            <span className="h-2.5 w-2.5 bg-green-400" />
          </div>
          <span className="text-xs text-slate-400">example.html</span>
        </div>

        <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
          <code>{code}</code>
        </pre>
      </div>

      <div className="mt-5 border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-5 py-3 text-xs font-bold uppercase tracking-widest text-slate-500">
          Expected Output
        </div>
        <pre className="whitespace-pre-wrap break-words p-5 font-sans text-sm leading-7 text-slate-700">
          {output}
        </pre>
      </div>
    </>
  );

  // Reusable lesson controls.
  const LessonActions = ({ title, query }) => (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
      <a
        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
      >
        <PlayCircle size={17} />
        Watch Video
      </a>

      <button
        type="button"
        onClick={() => toggleComplete(title)}
        className={`flex items-center gap-2 px-5 py-3 text-sm font-bold ${
          completed.includes(title)
            ? "border border-green-600 bg-green-50 text-green-700"
            : "bg-orange-500 text-white hover:bg-orange-600"
        }`}
      >
        {completed.includes(title) ? (
          <>
            <Check size={16} />
            Completed
          </>
        ) : (
          "Mark as Complete"
        )}
      </button>
    </div>
  );

  // Common lesson heading.
  const LessonHeading = ({ number, title, duration }) => (
    <>
      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-orange-600">
        <span>{String(number).padStart(2, "0")}</span>
        <span className="h-px w-8 bg-orange-400" />
        <span>Lesson {number}</span>
      </div>

      <h2 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <Clock3 size={14} />
        {duration}
        <span className="ml-2 border border-slate-200 px-2 py-1">
          Beginner
        </span>
      </div>
    </>
  );

  return (
    <div className="min-h-screen w-full bg-[#f5f6f8] text-[#17191f]">
      <HtmlNav onTopicClick={scrollToLesson} />

      {/* ================= COURSE HEADER ================= */}
      <header className="w-full border-b border-slate-800 bg-[#101318] text-white">
        <div className="w-full px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="border border-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              HTML Course
            </span>

            <span className="text-xs uppercase tracking-widest text-slate-400">
              Module 01 / Getting Started
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
            <div>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Getting Started
                <span className="block text-orange-400">with HTML.</span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                Learn how websites work, set up your development
                environment and build your first webpage from scratch.
              </p>

              <div className="mt-8 flex flex-wrap gap-7 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <BookOpen size={17} className="text-orange-400" />
                  12 Lessons
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={17} className="text-orange-400" />
                  Beginner Friendly
                </span>

                <span className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-orange-400" />
                  Beginner Level
                </span>
              </div>
            </div>

            <div className="border border-slate-700 bg-[#171b22] p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">
                  Your Progress
                </span>
                <span className="text-3xl font-black text-orange-400">
                  {progress}%
                </span>
              </div>

              <div className="mt-5 h-1.5 bg-slate-700">
                <div
                  className="h-full bg-orange-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-4 text-sm text-slate-400">
                {completed.length} of 12 lessons completed
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SIDEBAR + CONTENT ================= */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="border-b border-slate-200 bg-white lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r">
          <div className="border-b border-slate-200 p-5">
            <div className="flex items-center gap-3">
              <ListVideo size={21} className="text-orange-500" />
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-widest">
                  Course Contents
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Getting Started
                </p>
              </div>
            </div>
          </div>

          <div className="px-5 py-4">
            <div className="mb-2 flex justify-between text-xs text-slate-500">
              <span>Module Progress</span>
              <span>{completed.length}/12</span>
            </div>

            <div className="h-1 bg-slate-200">
              <div
                className="h-full bg-orange-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <nav aria-label="HTML lessons" className="pb-5">
            <button
              onClick={() => scrollToLesson("what-is-html")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "what-is-html"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>01. What is HTML?</span>
            </button>

            <button
              onClick={() => scrollToLesson("history-of-html")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "history-of-html"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>02. History of HTML</span>
            </button>

            <button
              onClick={() => scrollToLesson("html-vs-html5")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "html-vs-html5"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>03. HTML vs HTML5</span>
            </button>

            <button
              onClick={() => scrollToLesson("how-websites-work")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "how-websites-work"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>04. How Websites Work</span>
            </button>

            <button
              onClick={() => scrollToLesson("browser-rendering")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "browser-rendering"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>05. How Browsers Render HTML</span>
            </button>

            <button
              onClick={() => scrollToLesson("setup-vscode")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "setup-vscode"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>06. Setting Up VS Code</span>
            </button>

            <button
              onClick={() => scrollToLesson("install-live-server")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "install-live-server"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>07. Installing Live Server</span>
            </button>

            <button
              onClick={() => scrollToLesson("first-html-file")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "first-html-file"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>08. Creating Your First HTML File</span>
            </button>

            <button
              onClick={() => scrollToLesson("first-html-page")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "first-html-page"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>09. Writing Your First HTML Page</span>
            </button>

            <button
              onClick={() => scrollToLesson("html-boilerplate")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "html-boilerplate"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>10. HTML Boilerplate</span>
            </button>

            <button
              onClick={() => scrollToLesson("view-html-browser")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "view-html-browser"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>11. Viewing HTML in a Browser</span>
            </button>

            <button
              onClick={() => scrollToLesson("devtools-basics")}
              className={`flex w-full items-start gap-3 border-l-[3px] px-5 py-4 text-left text-sm ${
                activeLesson === "devtools-basics"
                  ? "border-orange-500 bg-orange-50 font-bold text-orange-700"
                  : "border-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={17} />
              <span>12. Developer Tools Basics</span>
            </button>
          </nav>
        </aside>

        {/* ================= LESSON CONTENT ================= */}
        <main className="min-w-0">
          <div className="border-b border-slate-200 bg-white px-5 py-8 sm:px-8 lg:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Learning Path
            </span>

            <h2 className="mt-3 text-3xl font-extrabold">
              Start with the fundamentals
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Understand each concept, study the example and practise
              the code in your own editor.
            </p>
          </div>

          {/* LESSON 01 */}
          {/* LESSON 01 — WHAT IS HTML? */}
<section
  id="what-is-html"
  className="scroll-mt-8 border-b border-slate-200 bg-white"
>
  {/* Lesson Header */}
  <div className="border-b border-slate-200 px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
    <div className="flex flex-wrap items-center gap-3">
      <span className="border border-orange-500 bg-orange-50 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-600">
        HTML Fundamentals
      </span>

      <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
        Beginner · Lesson 01
      </span>
    </div>

    <h2 className="mt-6 max-w-5xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
      What is HTML?
      <span className="block text-orange-500">
        The foundation of every webpage.
      </span>
    </h2>

    <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
      Every time you open a website, you see content such as headings,
      paragraphs, images, buttons, navigation menus and forms. HTML
      provides the structure that organizes this content and tells
      the browser what each part of a webpage represents.
    </p>

    <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-slate-200 pt-5 text-sm text-slate-500">
      <span className="flex items-center gap-2">
        <Clock3 size={16} className="text-orange-500" />
        12–15 minutes
      </span>

      <span className="flex items-center gap-2">
        <BookOpen size={16} className="text-orange-500" />
        Beginner level
      </span>

      <span className="flex items-center gap-2">
        <Code2 size={16} className="text-orange-500" />
        Practical examples
      </span>
    </div>
  </div>

  {/* 01 — Learning Objectives */}
  <div className="border-b border-slate-200 bg-slate-50 px-5 py-8 sm:px-8 lg:px-12">
    <h3 className="text-lg font-extrabold text-slate-950">
      What you will learn
    </h3>

    <p className="mt-2 text-sm leading-7 text-slate-600">
      By the end of this lesson, you should understand the purpose of HTML
      and be able to write your first basic HTML elements.
    </p>

    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <div className="border border-slate-200 bg-white p-5">
        <span className="text-xs font-bold text-orange-500">01</span>
        <h4 className="mt-3 font-bold">HTML fundamentals</h4>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Understand the meaning, purpose and role of HTML.
        </p>
      </div>

      <div className="border border-slate-200 bg-white p-5">
        <span className="text-xs font-bold text-orange-500">02</span>
        <h4 className="mt-3 font-bold">Tags and elements</h4>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Learn how HTML represents and organizes content.
        </p>
      </div>

      <div className="border border-slate-200 bg-white p-5">
        <span className="text-xs font-bold text-orange-500">03</span>
        <h4 className="mt-3 font-bold">First webpage</h4>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Create a simple page using headings and paragraphs.
        </p>
      </div>
    </div>
  </div>

  {/* 02 — Definition */}
  <div className="px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
    <div className="flex items-center gap-3">
      <span className="h-6 w-1 bg-orange-500" />
      <h3 className="text-xl font-extrabold sm:text-2xl">
        1. Understanding HTML
      </h3>
    </div>

    <p className="mt-6 text-base leading-8 text-slate-600">
      HTML stands for{" "}
      <strong className="text-slate-950">
        HyperText Markup Language
      </strong>
      . It is the standard markup language used to define the structure
      and meaning of content on the World Wide Web.
    </p>

    <p className="mt-4 text-base leading-8 text-slate-600">
      HTML uses elements to describe different kinds of content. For
      example, a heading is represented by a heading element, a paragraph
      by a paragraph element, and a hyperlink by an anchor element.
      Browsers interpret this markup to construct the webpage.
    </p>

    <div className="mt-7 border-l-4 border-orange-500 bg-orange-50 px-5 py-5 sm:px-7">
      <p className="text-xs font-extrabold uppercase tracking-widest text-orange-700">
        Remember this
      </p>

      <p className="mt-3 text-base font-semibold leading-8 text-slate-800">
        HTML describes the structure and meaning of webpage content.
        CSS controls its presentation, while JavaScript can add behavior
        and interactivity.
      </p>
    </div>

    <h4 className="mt-8 font-bold text-slate-900">
      What does HyperText Markup Language mean?
    </h4>

    <div className="mt-4 space-y-5">
      <div className="border-b border-slate-200 pb-5">
        <h5 className="font-bold text-orange-600">HyperText</h5>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          HyperText is text that can link to other documents or resources.
          HTML uses the anchor element, written as{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 text-orange-700">
            &lt;a&gt;
          </code>
          , to create hyperlinks.
        </p>
      </div>

      <div className="border-b border-slate-200 pb-5">
        <h5 className="font-bold text-orange-600">Markup</h5>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Markup consists of elements and attributes that describe the
          structure or meaning of content. For example,{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 text-orange-700">
            &lt;h1&gt;
          </code>{" "}
          identifies a top-level heading.
        </p>
      </div>

      <div>
        <h5 className="font-bold text-orange-600">Language</h5>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          HTML follows a defined syntax and a set of rules for writing
          documents. Browsers parse this markup to understand the
          document's structure.
        </p>
      </div>
    </div>
  </div>

  {/* 03 — HTML vs CSS vs JavaScript */}
  <div className="border-y border-slate-200 bg-slate-50 px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
    <div className="flex items-center gap-3">
      <span className="h-6 w-1 bg-orange-500" />
      <h3 className="text-xl font-extrabold sm:text-2xl">
        2. HTML vs CSS vs JavaScript
      </h3>
    </div>

    <p className="mt-5 text-sm leading-7 text-slate-600">
      A modern webpage often combines three core technologies. Each
      technology has a different responsibility.
    </p>

    <div className="mt-6 grid gap-0 border border-slate-200 bg-white md:grid-cols-3">
      <div className="border-b border-slate-200 p-5 md:border-b-0 md:border-r">
        <div className="flex h-10 w-10 items-center justify-center bg-orange-100 font-black text-orange-700">
          H
        </div>

        <h4 className="mt-4 text-lg font-extrabold">HTML</h4>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          Structure and meaning. It defines the content that appears
          on the page.
        </p>

        <code className="mt-4 block bg-slate-100 p-3 text-xs text-slate-700">
          &lt;button&gt;Click me&lt;/button&gt;
        </code>
      </div>

      <div className="border-b border-slate-200 p-5 md:border-b-0 md:border-r">
        <div className="flex h-10 w-10 items-center justify-center bg-blue-100 font-black text-blue-700">
          C
        </div>

        <h4 className="mt-4 text-lg font-extrabold">CSS</h4>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          Presentation and layout. It controls colors, spacing, fonts
          and responsive design.
        </p>

        <code className="mt-4 block bg-slate-100 p-3 text-xs text-slate-700">
          button {"{"} color: blue; {"}"}
        </code>
      </div>

      <div className="p-5">
        <div className="flex h-10 w-10 items-center justify-center bg-yellow-100 font-black text-yellow-800">
          JS
        </div>

        <h4 className="mt-4 text-lg font-extrabold">JavaScript</h4>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          Behavior and interactivity. It can respond to clicks,
          validate forms and update content.
        </p>

        <code className="mt-4 block bg-slate-100 p-3 text-xs text-slate-700">
          alert("Hello!");
        </code>
      </div>
    </div>

    <p className="mt-5 text-sm leading-7 text-slate-500">
      These technologies work together, but they are not interchangeable.
      You can build a valid basic webpage using HTML alone.
    </p>
  </div>

  {/* 04 — Tags, Elements and Attributes */}
  <div className="px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
    <div className="flex items-center gap-3">
      <span className="h-6 w-1 bg-orange-500" />
      <h3 className="text-xl font-extrabold sm:text-2xl">
        3. HTML Tags, Elements and Attributes
      </h3>
    </div>

    <p className="mt-5 text-base leading-8 text-slate-600">
      To write HTML, you need to understand three related concepts:
      tags, elements and attributes.
    </p>

    <h4 className="mt-7 font-bold">HTML tags</h4>

    <p className="mt-3 text-sm leading-7 text-slate-600">
      Tags are the markup delimiters used to start or end many HTML
      elements. An opening tag looks like{" "}
      <code className="bg-slate-100 px-1.5 py-0.5 text-orange-700">
        &lt;p&gt;
      </code>
      , while a closing tag looks like{" "}
      <code className="bg-slate-100 px-1.5 py-0.5 text-orange-700">
        &lt;/p&gt;
      </code>
      .
    </p>

    <h4 className="mt-7 font-bold">HTML elements</h4>

    <p className="mt-3 text-sm leading-7 text-slate-600">
      An element generally consists of an opening tag, its content and
      a closing tag. Some elements, such as{" "}
      <code className="bg-slate-100 px-1.5 py-0.5 text-orange-700">
        &lt;img&gt;
      </code>
      , are void elements and do not have closing tags.
    </p>

    <h4 className="mt-7 font-bold">HTML attributes</h4>

    <p className="mt-3 text-sm leading-7 text-slate-600">
      Attributes provide additional information or configuration for an
      element. They are typically written in the opening tag. For
      example, the{" "}
      <code className="bg-slate-100 px-1.5 py-0.5 text-orange-700">
        href
      </code>{" "}
      attribute specifies the destination of a link.
    </p>

    <CodeExample
      title="HTML Tags and Attributes"
      code={`<a href="https://example.com" target="_blank">
  Visit Example
</a>

<img src="photo.jpg" alt="A sample photograph">

<p class="intro">This is a paragraph.</p>`}
      output={"Visit Example\n\n[Image: A sample photograph]\n\nThis is a paragraph."}
    />

    <div className="mt-6 border border-slate-200">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
        <h4 className="text-sm font-bold">Important differences</h4>
      </div>

      <div className="divide-y divide-slate-200">
        <div className="grid gap-2 p-4 sm:grid-cols-[150px_1fr]">
          <span className="font-bold text-orange-600">Tag</span>
          <p className="text-sm leading-7 text-slate-600">
            The markup syntax, such as <code>&lt;p&gt;</code>.
          </p>
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-[150px_1fr]">
          <span className="font-bold text-orange-600">Element</span>
          <p className="text-sm leading-7 text-slate-600">
            The complete HTML structure, such as{" "}
            <code>&lt;p&gt;Hello&lt;/p&gt;</code>.
          </p>
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-[150px_1fr]">
          <span className="font-bold text-orange-600">Attribute</span>
          <p className="text-sm leading-7 text-slate-600">
            Additional information, such as{" "}
            <code>href="https://example.com"</code>.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* 05 — First HTML Example */}
  <div className="border-y border-slate-200 bg-slate-50 px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
    <div className="flex items-center gap-3">
      <span className="h-6 w-1 bg-orange-500" />
      <h3 className="text-xl font-extrabold sm:text-2xl">
        4. Your First HTML Example
      </h3>
    </div>

    <p className="mt-5 text-base leading-8 text-slate-600">
      Let's write a small HTML fragment. It contains a heading, a
      paragraph and a hyperlink.
    </p>

    <CodeExample
      title="Your First HTML Example"
      code={`<h1>Welcome to My Website</h1>

<p>I am learning HTML from scratch.</p>

<a href="https://example.com">
  Visit Example
</a>`}
      output={"Welcome to My Website\n\nI am learning HTML from scratch.\n\nVisit Example"}
    />

    <h4 className="mt-8 font-bold">Understand each element</h4>

    <ul className="mt-4 space-y-4">
      <li className="border-l-2 border-orange-500 bg-white p-4">
        <code className="font-bold text-orange-700">&lt;h1&gt;</code>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Represents the main heading of this example.
        </p>
      </li>

      <li className="border-l-2 border-orange-500 bg-white p-4">
        <code className="font-bold text-orange-700">&lt;p&gt;</code>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Represents a paragraph of text.
        </p>
      </li>

      <li className="border-l-2 border-orange-500 bg-white p-4">
        <code className="font-bold text-orange-700">&lt;a&gt;</code>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Creates a hyperlink. Its href attribute specifies the
          destination.
        </p>
      </li>
    </ul>
  </div>

  {/* 06 — Complete HTML Document */}
  <div className="px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
    <div className="flex items-center gap-3">
      <span className="h-6 w-1 bg-orange-500" />
      <h3 className="text-xl font-extrabold sm:text-2xl">
        5. A Complete HTML Document
      </h3>
    </div>

    <p className="mt-5 text-base leading-8 text-slate-600">
      An HTML fragment is useful for understanding individual elements.
      A complete webpage also includes the document declaration, the
      root html element, metadata in head and visible content in body.
    </p>

    <CodeExample
      title="Complete HTML Document"
      code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>I am learning HTML from scratch.</p>
  <a href="https://example.com">Visit Example</a>
</body>
</html>`}
      output={"Browser tab title: My First Website\n\nPage heading: Welcome to My Website\n\nParagraph: I am learning HTML from scratch.\n\nLink: Visit Example"}
    />

    <h4 className="mt-8 font-bold">Document structure explained</h4>

    <div className="mt-4 divide-y divide-slate-200 border border-slate-200">
      <div className="p-4">
        <code className="font-bold text-orange-700">
          &lt;!DOCTYPE html&gt;
        </code>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Declares an HTML document and helps the browser use standards mode.
        </p>
      </div>

      <div className="p-4">
        <code className="font-bold text-orange-700">
          &lt;html lang="en"&gt;
        </code>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          The root element. The lang attribute identifies the document's
          primary language.
        </p>
      </div>

      <div className="p-4">
        <code className="font-bold text-orange-700">&lt;head&gt;</code>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Contains metadata, the document title and resource references.
        </p>
      </div>

      <div className="p-4">
        <code className="font-bold text-orange-700">&lt;body&gt;</code>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Contains the document's main visible content.
        </p>
      </div>

      <div className="p-4">
        <code className="font-bold text-orange-700">
          &lt;meta charset="UTF-8"&gt;
        </code>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Declares the character encoding used by the document.
        </p>
      </div>
    </div>
  </div>

  {/* 07 — Common Mistakes */}
  <div className="border-y border-slate-200 bg-slate-50 px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
    <div className="flex items-center gap-3">
      <span className="h-6 w-1 bg-orange-500" />
      <h3 className="text-xl font-extrabold sm:text-2xl">
        6. Common Beginner Mistakes
      </h3>
    </div>

    <p className="mt-5 text-sm leading-7 text-slate-600">
      These mistakes are common when you begin writing HTML. Learning
      to recognize them will make debugging much easier.
    </p>

    <div className="mt-6 space-y-5">
      <div className="border border-slate-200 bg-white p-5">
        <h4 className="font-bold">Mistake 1: Forgetting closing tags</h4>

        <p className="mt-2 text-sm text-slate-500">Incorrect example</p>

        <pre className="mt-2 overflow-x-auto bg-[#11151c] p-4 text-sm text-slate-200">
          <code>{`<p>This is a paragraph.`}</code>
        </pre>

        <p className="mt-3 text-sm text-slate-500">Better example</p>

        <pre className="mt-2 overflow-x-auto bg-[#11151c] p-4 text-sm text-slate-200">
          <code>{`<p>This is a paragraph.</p>`}</code>
        </pre>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Some HTML elements are void elements and do not use closing tags,
          but paragraph elements should normally have an explicit closing tag.
        </p>
      </div>

      <div className="border border-slate-200 bg-white p-5">
        <h4 className="font-bold">Mistake 2: Incorrect nesting</h4>

        <p className="mt-2 text-sm text-slate-500">Incorrect example</p>

        <pre className="mt-2 overflow-x-auto bg-[#11151c] p-4 text-sm text-slate-200">
          <code>{`<strong><em>Important text</strong></em>`}</code>
        </pre>

        <p className="mt-3 text-sm text-slate-500">Better example</p>

        <pre className="mt-2 overflow-x-auto bg-[#11151c] p-4 text-sm text-slate-200">
          <code>{`<strong><em>Important text</em></strong>`}</code>
        </pre>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Close nested elements in the reverse order in which they were opened.
        </p>
      </div>

      <div className="border border-slate-200 bg-white p-5">
        <h4 className="font-bold">Mistake 3: Missing alternative text</h4>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          When an image conveys information, provide useful alt text so
          assistive technologies can communicate its meaning.
        </p>

        <pre className="mt-4 overflow-x-auto bg-[#11151c] p-4 text-sm text-slate-200">
          <code>{`<img src="logo.png" alt="Company logo">`}</code>
        </pre>
      </div>
    </div>
  </div>

  {/* 08 — Practice Exercise */}
  <div className="px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
    <div className="flex items-center gap-3">
      <span className="h-6 w-1 bg-orange-500" />
      <h3 className="text-xl font-extrabold sm:text-2xl">
        7. Practice Exercise
      </h3>
    </div>

    <p className="mt-5 text-base leading-8 text-slate-600">
      Now it is your turn. Create a small personal introduction page
      using the HTML concepts you learned in this lesson.
    </p>

    <div className="mt-6 border border-slate-200 bg-slate-50 p-5 sm:p-7">
      <h4 className="font-extrabold">Your task</h4>

      <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
        <li className="flex gap-3">
          <Check size={17} className="mt-1 shrink-0 text-orange-500" />
          Create a complete HTML document.
        </li>

        <li className="flex gap-3">
          <Check size={17} className="mt-1 shrink-0 text-orange-500" />
          Set the page title to "About Me".
        </li>

        <li className="flex gap-3">
          <Check size={17} className="mt-1 shrink-0 text-orange-500" />
          Add a heading containing your name.
        </li>

        <li className="flex gap-3">
          <Check size={17} className="mt-1 shrink-0 text-orange-500" />
          Write a paragraph describing yourself.
        </li>

        <li className="flex gap-3">
          <Check size={17} className="mt-1 shrink-0 text-orange-500" />
          Add a link to a website you like.
        </li>
      </ul>
    </div>

    <h4 className="mt-8 font-bold">Example solution</h4>

    <CodeExample
      title="About Me Exercise"
      code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Me</title>
</head>
<body>
  <h1>Hello, I am Alex!</h1>
  <p>I am learning web development.</p>
  <a href="https://developer.mozilla.org/">
    Learn more about web development
  </a>
</body>
</html>`}
      output={"Browser tab title: About Me\n\nHello, I am Alex!\nI am learning web development.\nLearn more about web development"}
    />
  </div>

  {/* 09 — Lesson Summary */}
  <div className="border-y border-slate-200 bg-slate-50 px-5 py-9 sm:px-8 lg:px-12 lg:py-12">
    <div className="flex items-center gap-3">
      <span className="h-6 w-1 bg-orange-500" />
      <h3 className="text-xl font-extrabold sm:text-2xl">
        8. Lesson Summary
      </h3>
    </div>

    <ul className="mt-6 space-y-4">
      <li className="flex items-start gap-3 text-sm leading-7 text-slate-600">
        <Check size={17} className="mt-1 shrink-0 text-orange-500" />
        HTML stands for HyperText Markup Language.
      </li>

      <li className="flex items-start gap-3 text-sm leading-7 text-slate-600">
        <Check size={17} className="mt-1 shrink-0 text-orange-500" />
        HTML structures content using elements and attributes.
      </li>

      <li className="flex items-start gap-3 text-sm leading-7 text-slate-600">
        <Check size={17} className="mt-1 shrink-0 text-orange-500" />
        Tags are the markup syntax; an element is the resulting document structure.
      </li>

      <li className="flex items-start gap-3 text-sm leading-7 text-slate-600">
        <Check size={17} className="mt-1 shrink-0 text-orange-500" />
        CSS handles presentation, while JavaScript can provide behavior.
      </li>

      <li className="flex items-start gap-3 text-sm leading-7 text-slate-600">
        <Check size={17} className="mt-1 shrink-0 text-orange-500" />
        A complete HTML document includes a document declaration, head and body.
      </li>

      <li className="flex items-start gap-3 text-sm leading-7 text-slate-600">
        <Check size={17} className="mt-1 shrink-0 text-orange-500" />
        Practising by creating small webpages is the best way to reinforce the basics.
      </li>
    </ul>
  </div>

  {/* LESSON ACTIONS */}
  <div className="px-5 py-8 sm:px-8 lg:px-12">
    <LessonActions
      title="What is HTML?"
      query="what is HTML tutorial for beginners"
    />
  </div>
</section>

          {/* LESSON 02 */}
         
<section
  id="history-of-html"
  className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
>
  <LessonHeading
    number={2}
    title="History of HTML"
    duration="10 min"
  />

  {/* Introduction */}
  <div className="mt-8">
    <p className="text-base leading-8 text-slate-600">
      To understand modern web development, it is important to understand
      how HTML evolved. Today's websites contain videos, interactive forms,
      animations, complex layouts, and web applications. However, the early
      World Wide Web was much simpler. HTML originally focused on structuring
      documents and connecting them through hyperlinks.
    </p>

    <p className="mt-5 text-base leading-8 text-slate-600">
      HTML stands for HyperText Markup Language. It was developed to make
      documents accessible through the World Wide Web. Over time, HTML
      evolved to support richer content, better document structure, improved
      accessibility, and modern browser capabilities.
    </p>
  </div>

  {/* Learning objectives */}
  <div className="mt-8 border border-slate-200 bg-slate-50 p-5">
    <h3 className="text-lg font-bold text-slate-900">
      What You Will Learn
    </h3>

    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
      <li>Who created HTML and why it was needed.</li>
      <li>How the World Wide Web started.</li>
      <li>The evolution of HTML from early versions to HTML5.</li>
      <li>The difference between HTML 4.01, XHTML, and HTML5.</li>
      <li>Why semantic HTML and accessibility matter.</li>
      <li>What the HTML Living Standard means today.</li>
    </ul>
  </div>

  {/* Origins */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      1. The Beginning of the World Wide Web
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      Before the World Wide Web, sharing information between computers
      was less convenient. Researchers needed a way to publish documents
      and connect related information so that people could access it from
      different computers.
    </p>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      In 1989, Tim Berners-Lee proposed a system for sharing information
      over the Internet while working at CERN, a European particle physics
      research organization. His work led to the development of the World
      Wide Web.
    </p>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      The Web brought together several important ideas: HTML for structuring
      documents, HTTP for transferring web resources, and URLs for identifying
      resources. A web browser could request a document from a web server
      and display the received content to a user.
    </p>

    <div className="mt-5 border-l-4 border-orange-500 bg-orange-50 p-5">
      <p className="font-bold text-slate-900">Important distinction</p>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        The Internet and the World Wide Web are not the same thing. The
        Internet is the underlying network infrastructure. The Web is a
        system of linked resources that operates over that infrastructure.
        HTML helps structure many of those web resources.
      </p>
    </div>
  </div>

  {/* Creator */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      2. Who Created HTML?
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      HTML was created by Tim Berners-Lee around 1990 as part of his work
      on the World Wide Web. It provided a way to describe the structure
      of a document and link it to other documents.
    </p>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      The early version of HTML was intentionally simple. It supported
      document headings, paragraphs, lists, and hyperlinks. These features
      were sufficient for the original goal: allowing researchers to
      navigate between related documents.
    </p>

    <h4 className="mt-6 font-bold text-slate-900">
      Example: A simple early-web document
    </h4>

    <CodeExample
      title="Early HTML"
      code={`<title>Research Notes</title>
<h1>Research Notes</h1>
<p>Welcome to my document.</p>
<p>
  Read the
  <a href="https://example.com">related document</a>.
</p>`}
      output={`Research Notes

Research Notes

Welcome to my document.

Read the related document.`}
    />

    <p className="mt-4 text-sm leading-7 text-slate-600">
      This example demonstrates the original idea behind HTML: organize
      information into a readable document and use hyperlinks to connect
      it to other resources. It is a simplified illustration, not a complete
      historical copy of the original HTML implementation.
    </p>
  </div>

  {/* Timeline */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      3. Evolution of HTML: Complete Timeline
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      HTML did not become the modern web language in a single day. It
      developed through proposals, specifications, browser implementations,
      and improvements to web standards.
    </p>

    <div className="mt-6 space-y-0 border-l-2 border-slate-200 pl-5">
      <div className="relative border-b border-slate-200 pb-6">
        <span className="absolute -left-[27px] top-1 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">1989</p>
        <h4 className="mt-1 font-bold text-slate-900">
          Proposal for the World Wide Web
        </h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Tim Berners-Lee proposed a system for linking and sharing
          information at CERN. This work laid the foundation for the Web.
        </p>
      </div>

      <div className="relative border-b border-slate-200 py-6">
        <span className="absolute -left-[27px] top-7 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">1990–1991</p>
        <h4 className="mt-1 font-bold text-slate-900">
          Early HTML and the first website
        </h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Early HTML documents and web software were developed. The first
          website explained the World Wide Web project and how to use it.
        </p>
      </div>

      <div className="relative border-b border-slate-200 py-6">
        <span className="absolute -left-[27px] top-7 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">1993</p>
        <h4 className="mt-1 font-bold text-slate-900">
          HTML specifications begin to emerge
        </h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Early documentation helped describe HTML's elements and behavior
          as interest in the Web increased.
        </p>
      </div>

      <div className="relative border-b border-slate-200 py-6">
        <span className="absolute -left-[27px] top-7 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">1995</p>
        <h4 className="mt-1 font-bold text-slate-900">HTML 2.0</h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          HTML 2.0, described in RFC 1866, helped establish a common
          specification for the HTML features in use at that time.
        </p>
      </div>

      <div className="relative border-b border-slate-200 py-6">
        <span className="absolute -left-[27px] top-7 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">1997</p>
        <h4 className="mt-1 font-bold text-slate-900">HTML 3.2</h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          HTML 3.2 standardized widely used features, including tables,
          scripting support, and presentational elements.
        </p>
      </div>

      <div className="relative border-b border-slate-200 py-6">
        <span className="absolute -left-[27px] top-7 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">1997–1999</p>
        <h4 className="mt-1 font-bold text-slate-900">
          HTML 4.0 and HTML 4.01
        </h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          These standards improved support for style sheets, scripting,
          internationalization, and accessibility. HTML 4.01 was published
          in December 1999.
        </p>
      </div>

      <div className="relative border-b border-slate-200 py-6">
        <span className="absolute -left-[27px] top-7 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">2000</p>
        <h4 className="mt-1 font-bold text-slate-900">XHTML 1.0</h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          XHTML reformulated HTML 4.0 using XML rules. It encouraged
          well-formed markup, including properly nested elements and
          correctly written attributes.
        </p>
      </div>

      <div className="relative border-b border-slate-200 py-6">
        <span className="absolute -left-[27px] top-7 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">2004–2008</p>
        <h4 className="mt-1 font-bold text-slate-900">
          Work on HTML5 expands
        </h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Work on a new generation of HTML grew around the need for richer
          web applications, native audio and video, improved document
          semantics, and more capable browser APIs.
        </p>
      </div>

      <div className="relative border-b border-slate-200 py-6">
        <span className="absolute -left-[27px] top-7 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">2014</p>
        <h4 className="mt-1 font-bold text-slate-900">
          HTML5 becomes a W3C Recommendation
        </h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          The W3C published HTML5 as a Recommendation, marking a major
          milestone for modern web development.
        </p>
      </div>

      <div className="relative py-6">
        <span className="absolute -left-[27px] top-7 h-3 w-3 border-2 border-orange-500 bg-white" />
        <p className="text-sm font-bold text-orange-600">Today</p>
        <h4 className="mt-1 font-bold text-slate-900">
          HTML Living Standard
        </h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          HTML continues to evolve through the Living Standard maintained
          by WHATWG. Instead of treating HTML as a language that stops at
          one numbered version, the standard is updated as the Web evolves.
        </p>
      </div>
    </div>
  </div>

  {/* Versions */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      4. Major HTML Versions Explained
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      Different versions of HTML introduced, standardized, or clarified
      features used by browsers. The following overview highlights the
      major milestones.
    </p>

    <div className="mt-5 overflow-x-auto border border-slate-200">
      <table className="w-full min-w-[600px] border-collapse text-left text-sm">
        <thead className="bg-slate-100 text-slate-900">
          <tr>
            <th className="border-b border-slate-200 p-4">Version</th>
            <th className="border-b border-slate-200 p-4">Year</th>
            <th className="border-b border-slate-200 p-4">Importance</th>
          </tr>
        </thead>
        <tbody className="text-slate-600">
          <tr>
            <td className="border-b border-slate-200 p-4 font-semibold">HTML 2.0</td>
            <td className="border-b border-slate-200 p-4">1995</td>
            <td className="border-b border-slate-200 p-4">A common specification for early HTML.</td>
          </tr>
          <tr>
            <td className="border-b border-slate-200 p-4 font-semibold">HTML 3.2</td>
            <td className="border-b border-slate-200 p-4">1997</td>
            <td className="border-b border-slate-200 p-4">Standardized commonly used browser features.</td>
          </tr>
          <tr>
            <td className="border-b border-slate-200 p-4 font-semibold">HTML 4.0</td>
            <td className="border-b border-slate-200 p-4">1997</td>
            <td className="border-b border-slate-200 p-4">Improved CSS, scripting, and accessibility support.</td>
          </tr>
          <tr>
            <td className="border-b border-slate-200 p-4 font-semibold">HTML 4.01</td>
            <td className="border-b border-slate-200 p-4">1999</td>
            <td className="border-b border-slate-200 p-4">A revised version of HTML 4.0.</td>
          </tr>
          <tr>
            <td className="border-b border-slate-200 p-4 font-semibold">XHTML 1.0</td>
            <td className="border-b border-slate-200 p-4">2000</td>
            <td className="border-b border-slate-200 p-4">Applied XML syntax rules to HTML 4.0.</td>
          </tr>
          <tr>
            <td className="border-b border-slate-200 p-4 font-semibold">HTML5</td>
            <td className="border-b border-slate-200 p-4">2014</td>
            <td className="border-b border-slate-200 p-4">Major milestone for modern web content and applications.</td>
          </tr>
          <tr>
            <td className="p-4 font-semibold">HTML Living Standard</td>
            <td className="p-4">Ongoing</td>
            <td className="p-4">Continuously maintained specification for HTML.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-4 text-xs leading-6 text-slate-500">
      Note: These dates refer to major publication milestones, not necessarily
      the first appearance of every feature associated with a version.
    </p>
  </div>

  {/* HTML 4 vs HTML5 */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      5. HTML 4.01 vs HTML5
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      HTML 4.01 was designed in an era when many websites relied on external
      plug-ins and presentational markup. HTML5 introduced standardized
      elements and APIs that made it easier to build richer web experiences
      directly in modern browsers.
    </p>

    <div className="mt-5 grid gap-5 md:grid-cols-2">
      <div className="border border-slate-200 p-5">
        <h4 className="font-bold text-slate-900">HTML 4.01</h4>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
          <li>Published in 1999.</li>
          <li>Used elements such as headings, paragraphs, and tables.</li>
          <li>Supported style sheets and scripting.</li>
          <li>Some presentational elements were widely used.</li>
        </ul>
      </div>

      <div className="border border-slate-200 p-5">
        <h4 className="font-bold text-slate-900">HTML5</h4>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
          <li>Published as a W3C Recommendation in 2014.</li>
          <li>Introduced semantic elements such as header, nav, and article.</li>
          <li>Standardized audio and video elements.</li>
          <li>Added capabilities for modern web applications.</li>
        </ul>
      </div>
    </div>

    <CodeExample
      title="HTML5 Semantic Structure"
      code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
  </header>

  <nav>
    <a href="#about">About</a>
  </nav>

  <main>
    <article id="about">
      <h2>About Us</h2>
      <p>Welcome to our website.</p>
    </article>
  </main>

  <footer>
    <p>Copyright 2026</p>
  </footer>
</body>
</html>`}
      output={`My Website

About

About Us
Welcome to our website.

Copyright 2026`}
    />
  </div>

  {/* Semantic HTML */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      6. Why Semantic HTML Was Important
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      Semantic HTML uses elements that communicate the purpose of their
      content. For example, a nav element identifies a navigation area,
      while a main element identifies the page's primary content.
    </p>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      Semantic elements make documents easier to understand for developers
      and can improve navigation for assistive technologies. They also help
      search engines interpret page structure. Semantic markup does not
      automatically make a site accessible or guarantee better rankings;
      it is one part of building a well-structured website.
    </p>

    <CodeExample
      title="Generic vs Semantic HTML"
      code={`<!-- Generic structure -->
<div class="header">
  <h1>Learning Hub</h1>
</div>

<!-- Semantic structure -->
<header>
  <h1>Learning Hub</h1>
</header>`}
      output={`Both examples can display a heading.
The semantic version communicates
that the content belongs to a page header.`}
    />
  </div>

  {/* XHTML */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      7. What Was XHTML?
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      XHTML stands for Extensible HyperText Markup Language. It reformulated
      HTML using XML syntax rules. Developers were expected to write
      well-formed markup, close elements correctly, nest elements properly,
      and quote attribute values.
    </p>

    <CodeExample
      title="XHTML-Style Markup"
      code={`<p class="intro">Hello World</p>
<br />
<img src="logo.png" alt="Website logo" />`}
      output={`The paragraph is explicitly closed.
The br and img elements use XML-style
self-closing syntax.`}
    />

    <p className="mt-4 text-sm leading-7 text-slate-600">
      Modern HTML also benefits from correctly nested elements and quoted
      attributes. However, HTML and XHTML have different parsing rules.
      A document served as HTML is parsed using HTML rules; XHTML served
      as XML follows XML parsing rules.
    </p>
  </div>

  {/* Living Standard */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      8. What Is the HTML Living Standard?
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      HTML continues to evolve. The WHATWG maintains the HTML Living Standard,
      which documents the language and how browsers are expected to process
      it. This approach allows the standard to evolve over time instead of
      relying only on a sequence of numbered versions.
    </p>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      Browser vendors implement web standards and work to maintain
      interoperability. New features and clarifications can be added
      through the standards process, although support may vary depending
      on the feature and browser version.
    </p>

    <div className="mt-5 border border-slate-200 p-5">
      <h4 className="font-bold text-slate-900">Remember These Points</h4>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
        <li>HTML is not frozen at HTML5.</li>
        <li>WHATWG maintains the HTML Living Standard.</li>
        <li>Browsers implement HTML specifications.</li>
        <li>Developers should check compatibility for newer features.</li>
      </ul>
    </div>
  </div>

  {/* Try it yourself */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      9. Practical Exercise
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-600">
      Create a small web page that represents a simple document from the
      early Web. It should contain a heading, two paragraphs, and a
      hyperlink to another page.
    </p>

    <h4 className="mt-5 font-bold text-slate-900">Your Tasks</h4>
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
      <li>Create a file named history-practice.html.</li>
      <li>Add a heading describing the World Wide Web.</li>
      <li>Write a paragraph explaining why hyperlinks are useful.</li>
      <li>Add a second paragraph about sharing information.</li>
      <li>Create a link using the a element and its href attribute.</li>
      <li>Open the file in your browser and test the link.</li>
    </ul>

    <CodeExample
      title="Exercise Solution"
      code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>History of the Web</title>
</head>
<body>
  <h1>History of the Web</h1>

  <p>The Web connects information across documents.</p>

  <p>Hyperlinks help readers move between related pages.</p>

  <a href="https://www.w3.org/">Visit W3C</a>
</body>
</html>`}
      output={`History of the Web

The Web connects information across documents.

Hyperlinks help readers move between related pages.

Visit W3C`}
    />
  </div>

  {/* Summary */}
  <div className="mt-10 border border-slate-200 bg-slate-50 p-5 sm:p-6">
    <h3 className="text-lg font-bold text-slate-900">
      Lesson Summary
    </h3>

    <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
      <li>Tim Berners-Lee developed HTML as part of the creation of the Web.</li>
      <li>Early HTML focused on document structure and hyperlinks.</li>
      <li>HTML 2.0, 3.2, 4.0, and 4.01 marked important standardization milestones.</li>
      <li>XHTML applied XML syntax rules to HTML.</li>
      <li>HTML5 brought major improvements for semantic structure and multimedia.</li>
      <li>The HTML Living Standard continues to evolve.</li>
    </ul>

    <div className="mt-6 border-t border-slate-200 pt-5">
      <p className="font-bold text-slate-900">Key takeaway</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        HTML evolved from a simple way to link documents into a foundational
        language for modern web content. Understanding its history helps
        explain why semantic elements, browser standards, and accessible
        document structure matter today.
      </p>
    </div>
  </div>

  <LessonActions
    title="History of HTML"
    query="history of HTML Tim Berners-Lee HTML versions HTML5 explained"
  />
</section>

          {/* LESSON 03 */}
          <section
            id="html-vs-html5"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={3} title="HTML vs HTML5" duration="6 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              HTML5 is the commonly used name for a generation of HTML that
              introduced modern web features. Today, HTML evolves as a
              Living Standard.
            </p>

            <h3 className="mt-8 font-bold">Key Concepts</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>Semantic elements include header, nav, main and article.</li>
              <li>Audio and video can be embedded directly.</li>
              <li>Canvas supports graphics drawn using JavaScript.</li>
              <li>Modern forms support email, date and number input types.</li>
            </ul>

            <CodeExample
              title="HTML vs HTML5"
              code={`<header>
  <h1>My Website</h1>
</header>
<main>
  <p>Built with modern HTML.</p>
</main>`}
              output={"My Website\nBuilt with modern HTML."}
            />

            <LessonActions
              title="HTML vs HTML5"
              query="HTML vs HTML5 explained"
            />
          </section>

          {/* LESSON 04 */}
          <section
            id="how-websites-work"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={4} title="How Websites Work" duration="7 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              Websites work through communication between your browser
              and web servers. The browser requests resources and receives
              responses that it can render.
            </p>

            <h3 className="mt-8 font-bold">Key Concepts</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>The browser requests a URL.</li>
              <li>DNS helps resolve a domain name to an IP address.</li>
              <li>The browser sends an HTTP or HTTPS request.</li>
              <li>The server responds with HTML and other resources.</li>
              <li>The browser processes the resources and displays the page.</li>
            </ul>

            <CodeExample
              title="How Websites Work"
              code={`Browser
   |
   | HTTP/HTTPS request
   v
Web Server
   |
   | HTML response
   v
Browser displays the page`}
              output={"Browser → Request → Server\nBrowser ← HTML response ← Server"}
            />

            <LessonActions
              title="How Websites Work"
              query="how websites work browser server DNS HTTP tutorial"
            />
          </section>

          {/* LESSON 05 */}
          <section
            id="browser-rendering"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={5} title="How Browsers Render HTML" duration="8 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              Browsers parse HTML into a Document Object Model (DOM), which
              represents the page as a tree of nodes.
            </p>

            <h3 className="mt-8 font-bold">Key Concepts</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>The browser parses HTML and builds the DOM.</li>
              <li>CSS determines how elements should look.</li>
              <li>JavaScript can interact with the DOM.</li>
              <li>The browser calculates layout and paints the page.</li>
            </ul>

            <CodeExample
              title="How Browsers Render HTML"
              code={`<body>
  <h1>Welcome</h1>
  <p>Learn how browsers work.</p>
</body>`}
              output={"body\n ├── h1: Welcome\n └── p: Learn how browsers work."}
            />

            <LessonActions
              title="How Browsers Render HTML"
              query="how browser renders HTML DOM CSS tutorial"
            />
          </section>

          {/* LESSON 06 */}
          <section
            id="setup-vscode"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={6} title="Setting Up VS Code" duration="6 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              Visual Studio Code is a code editor that helps you write,
              organize and debug HTML files.
            </p>

            <h3 className="mt-8 font-bold">Setup Steps</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>Install Visual Studio Code from its official website.</li>
              <li>Create a folder for your HTML practice.</li>
              <li>Open the folder in VS Code.</li>
              <li>Create a file named index.html.</li>
              <li>Use syntax highlighting and formatting features.</li>
            </ul>

            <CodeExample
              title="Setting Up VS Code"
              code={`my-first-website/
└── index.html`}
              output={"Project folder ready\nindex.html — your first HTML document"}
            />

            <LessonActions
              title="Setting Up VS Code"
              query="set up Visual Studio Code for HTML beginners"
            />
          </section>

          {/* LESSON 07 */}
          <section
            id="install-live-server"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={7} title="Installing Live Server" duration="5 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              Live Server is a VS Code extension that serves your files
              locally and can refresh the browser when files change.
            </p>

            <h3 className="mt-8 font-bold">Installation Steps</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>Open the Extensions panel in VS Code.</li>
              <li>Search for Live Server and install a trusted extension.</li>
              <li>Open index.html.</li>
              <li>Use the Go Live command if available.</li>
              <li>Your browser opens a local development URL.</li>
            </ul>

            <CodeExample
              title="Installing Live Server"
              code={`<!-- Save this in index.html -->
<h1>Live Server is running!</h1>`}
              output="Live Server is running!"
            />

            <LessonActions
              title="Installing Live Server"
              query="install and use Live Server VS Code HTML tutorial"
            />
          </section>

          {/* LESSON 08 */}
          <section
            id="first-html-file"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={8} title="Creating Your First HTML File" duration="5 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              An HTML file is a text document saved with the .html
              extension. A browser can open it and render its markup.
            </p>

            <h3 className="mt-8 font-bold">Steps</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>Create a file named index.html.</li>
              <li>Use the .html extension.</li>
              <li>Add a heading and a paragraph.</li>
              <li>Save the file and open it in a browser.</li>
            </ul>

            <CodeExample
              title="Creating Your First HTML File"
              code={`<!DOCTYPE html>
<html>
<body>
  <h1>My First Website</h1>
  <p>I am learning HTML.</p>
</body>
</html>`}
              output={"My First Website\nI am learning HTML."}
            />

            <LessonActions
              title="Creating Your First HTML File"
              query="create your first HTML file tutorial"
            />
          </section>

          {/* LESSON 09 */}
          <section
            id="first-html-page"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={9} title="Writing Your First HTML Page" duration="8 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              Build a complete HTML page with a document declaration,
              metadata, a title, a heading and a paragraph.
            </p>

            <h3 className="mt-8 font-bold">Key Concepts</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>Start with the HTML document declaration.</li>
              <li>Set the page language using the lang attribute.</li>
              <li>Add character encoding and viewport metadata.</li>
              <li>Place visible content inside the body element.</li>
            </ul>

            <CodeExample
              title="Writing Your First HTML Page"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>My first webpage is ready.</p>
</body>
</html>`}
              output={"Hello, World!\nMy first webpage is ready."}
            />

            <LessonActions
              title="Writing Your First HTML Page"
              query="write your first complete HTML webpage tutorial"
            />
          </section>

          {/* LESSON 10 */}
          <section
            id="html-boilerplate"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={10} title="HTML Boilerplate" duration="7 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              An HTML boilerplate is the standard starting structure
              for a new HTML document.
            </p>

            <h3 className="mt-8 font-bold">Key Concepts</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>DOCTYPE declares an HTML document.</li>
              <li>The html element is the root element.</li>
              <li>The head contains metadata and resource references.</li>
              <li>The body contains visible page content.</li>
              <li>The viewport meta tag helps configure mobile rendering.</li>
            </ul>

            <CodeExample
              title="HTML Boilerplate"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <!-- Your content goes here -->
</body>
</html>`}
              output="A correctly structured, empty HTML page."
            />

            <LessonActions
              title="HTML Boilerplate"
              query="HTML boilerplate explained for beginners"
            />
          </section>

          {/* LESSON 11 */}
          <section
            id="view-html-browser"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={11} title="Viewing HTML in a Browser" duration="4 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              You can view an HTML page by opening its file directly in
              a browser or serving it through a local development server.
            </p>

            <h3 className="mt-8 font-bold">Steps</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>Save your HTML file.</li>
              <li>Double-click it or use Open File in your browser.</li>
              <li>Alternatively, start a local development server.</li>
              <li>Refresh the page if automatic reloading is unavailable.</li>
              <li>Check the address bar to understand how the page is opened.</li>
            </ul>

            <CodeExample
              title="Viewing HTML in a Browser"
              code={`<!-- index.html -->
<h1>My Browser Test</h1>
<p>If you can read this, HTML is working.</p>`}
              output={"My Browser Test\nIf you can read this, HTML is working."}
            />

            <LessonActions
              title="Viewing HTML in a Browser"
              query="how to open HTML file in browser tutorial"
            />
          </section>

          {/* LESSON 12 */}
          <section
            id="devtools-basics"
            className="scroll-mt-8 border-b border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-12"
          >
            <LessonHeading number={12} title="Developer Tools Basics" duration="8 min" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              Browser Developer Tools help you inspect HTML, debug
              problems, examine styles and understand how a webpage behaves.
            </p>

            <h3 className="mt-8 font-bold">Key Concepts</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-600">
              <li>Open Developer Tools using F12 or Ctrl+Shift+I in many browsers.</li>
              <li>Use Elements or Inspector to explore the DOM.</li>
              <li>Use Console to inspect JavaScript errors.</li>
              <li>Use Network to examine resource requests.</li>
              <li>Use responsive device mode to test different viewport sizes.</li>
            </ul>

            <CodeExample
              title="Developer Tools Basics"
              code={`// Open the browser console and run:
console.log("Hello from DevTools!");`}
              output="Hello from DevTools!"
            />

            <LessonActions
              title="Developer Tools Basics"
              query="browser developer tools basics for beginners"
            />
          </section>

          {/* COURSE FOOTER */}
          <footer className="bg-[#101318] px-5 py-10 text-white sm:px-8 lg:px-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              Module 01
            </span>

            <h2 className="mt-3 text-2xl font-black">
              {progress === 100
                ? "All lessons completed!"
                : "Keep building your foundation."}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              {completed.length} of 12 lessons completed. Continue
              practising to strengthen your HTML fundamentals.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-6 flex items-center gap-2 border border-slate-600 px-5 py-3 text-sm font-bold hover:border-orange-400 hover:text-orange-400"
            >
              <ArrowUp size={16} />
              Back to top
            </button>

            <div className="mt-8 border-t border-slate-700 pt-5 text-xs text-slate-500">
              HTML Learning Path · Getting Started
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}