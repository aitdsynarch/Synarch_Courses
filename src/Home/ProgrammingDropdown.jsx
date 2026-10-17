
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const languages = [
  { id: "c", label: "C Programming" },
  { id: "cpp", label: "C++" },
  { id: "java", label: "Java" },
  { id: "python", label: "Python" },
  { id: "javascript", label: "JavaScript" },
  { id: "rust", label: "Rust" },
];

const topics = {
  c: [
    ["Introduction to C", "Learn the basics and structure of C."],
    ["Variables & Data Types", "Understand variables, types and constants."],
    ["Operators", "Learn arithmetic, logical and relational operators."],
    ["Conditional Statements", "Use if, else and switch statements."],
    ["Loops", "Master for, while and do-while loops."],
    ["Functions", "Write reusable functions in C."],
    ["Arrays & Strings", "Work with arrays and character strings."],
    ["Pointers", "Understand memory addresses and pointers."],
    ["Structures & Files", "Learn structures and file handling."],
  ],
  cpp: [
    ["C++ Fundamentals", "Start with syntax, variables and data types."],
    ["Functions", "Learn functions, parameters and overloading."],
    ["Pointers & References", "Understand memory and references."],
    ["Object-Oriented Programming", "Learn classes, objects and inheritance."],
    ["Constructors & Destructors", "Manage object initialization and cleanup."],
    ["STL", "Use vectors, maps, sets and other containers."],
    ["Templates", "Write reusable generic code."],
    ["Exception Handling", "Handle runtime errors effectively."],
    ["C++ Projects", "Apply your knowledge through projects."],
  ],
  java: [
    ["Java Fundamentals", "Learn syntax, variables and data types."],
    ["Control Flow", "Work with conditions and loops."],
    ["Object-Oriented Programming", "Understand classes, objects and inheritance."],
    ["Strings & Arrays", "Process strings and collections of values."],
    ["Collections Framework", "Learn List, Set, Map and more."],
    ["Exception Handling", "Handle errors using exceptions."],
    ["Multithreading", "Understand concurrent programming."],
    ["File Handling", "Read and write files in Java."],
    ["Java Projects", "Build practical Java applications."],
  ],
  python: [
    ["Python Fundamentals", "Start with syntax and basic programming."],
    ["Variables & Data Types", "Work with numbers, strings and collections."],
    ["Conditions & Loops", "Control program execution."],
    ["Functions & Modules", "Organize reusable Python code."],
    ["Lists, Tuples & Dictionaries", "Master Python's core collections."],
    ["OOP in Python", "Learn classes, objects and inheritance."],
    ["File Handling", "Read and write files."],
    ["Libraries & Packages", "Work with Python's package ecosystem."],
    ["Python Projects", "Build practical applications."],
  ],
  javascript: [
    ["JavaScript Fundamentals", "Learn syntax, variables and data types."],
    ["Functions & Scope", "Understand functions, closures and scope."],
    ["Arrays & Objects", "Work with common JavaScript data structures."],
    ["DOM Manipulation", "Make web pages interactive."],
    ["Events", "Handle user interactions in the browser."],
    ["Promises & Async/Await", "Work with asynchronous operations."],
    ["ES6+ Features", "Explore modern JavaScript syntax."],
    ["APIs & Fetch", "Connect your application to APIs."],
    ["JavaScript Projects", "Build interactive web applications."],
  ],
  rust: [
    ["Rust Fundamentals", "Learn syntax and basic programming."],
    ["Ownership & Borrowing", "Understand Rust's memory model."],
    ["Structs & Enums", "Model data with custom types."],
    ["Pattern Matching", "Use match and conditional patterns."],
    ["Error Handling", "Work with Result and Option."],
    ["Collections", "Use vectors, strings and hash maps."],
    ["Traits & Generics", "Write reusable and flexible code."],
    ["Concurrency", "Explore safe concurrent programming."],
    ["Rust Projects", "Build practical systems applications."],
  ],
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ProgrammingDropdown() {
  const [activeLanguage, setActiveLanguage] = useState("c");
  const [mobileLanguage, setMobileLanguage] = useState(null);

  const activeTopics = topics[activeLanguage] || [];
  const selectedLanguage = languages.find(
    (language) => language.id === activeLanguage
  );

  const handleLanguageClick = (languageId) => {
    setActiveLanguage(languageId);
    setMobileLanguage((current) =>
      current === languageId ? null : languageId
    );
  };

  return (
    <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-[#FAF9F7] shadow-xl">

      {/* MOBILE ACCORDION */}
      <div className="max-h-[75vh] overflow-y-auto px-4 py-4 md:hidden">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
          Programming Languages
        </p>

        <div className="space-y-2">
          {languages.map((language) => {
            const isOpen = mobileLanguage === language.id;

            return (
              <div
                key={language.id}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen
                    ? "border-orange-200 bg-white"
                    : "border-gray-200 bg-white/60"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => handleLanguageClick(language.id)}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-left text-sm transition-all ${
                    isOpen
                      ? "bg-white font-semibold text-[#F0440A] shadow-sm"
                      : "text-gray-700 hover:bg-white/70 hover:text-[#F0440A]"
                  }`}
                >
                  <span>{language.label}</span>

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
                      Explore concepts, strengthen fundamentals and build
                      projects with {language.label}.
                    </p>

                    <div className="space-y-1">
                      {topics[language.id].map(([title, description]) => (
                        <Link
                          key={title}
                          to={`/courses/${language.id}/${slugify(title)}`}
                          onClick={() => setMobileLanguage(null)}
                          className="group flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#F0440A]"
                        >
                          <span>{title}</span>
                          <ArrowRight
                            size={14}
                            className="shrink-0 text-gray-400 group-hover:text-[#F0440A]"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Link
          to="/courses/programming"
          onClick={() => setMobileLanguage(null)}
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#F0440A] px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D83B08]"
        >
          Explore All Programming Courses
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* DESKTOP: SAME AS WEB DEVELOPMENT */}
      <div className="mx-auto hidden max-w-7xl grid-cols-12 md:grid">

        {/* LEFT SIDEBAR */}
        <aside className="col-span-4 bg-[#EEEDEA] px-5 py-7 md:col-span-3 md:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
            Programming Languages
          </p>

          <div className="space-y-1">
            {languages.map((language) => {
              const isActive = activeLanguage === language.id;

              return (
                <button
                  key={language.id}
                  type="button"
                  onMouseEnter={() => setActiveLanguage(language.id)}
                  onFocus={() => setActiveLanguage(language.id)}
                  onClick={() => setActiveLanguage(language.id)}
                  className={`group flex w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-left text-sm transition-all ${
                    isActive
                      ? "bg-white font-semibold text-[#F0440A] shadow-sm"
                      : "text-gray-700 hover:bg-white/70 hover:text-[#F0440A]"
                  }`}
                >
                  <span>{language.label}</span>

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

        {/* RIGHT TOPICS PANEL */}
        <div className="col-span-8 px-5 py-7 md:col-span-9 md:px-10 lg:px-12">
          <div className="mb-7 border-b border-gray-200 pb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F0440A]">
              Learn & Practice
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {selectedLanguage?.label}
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Explore concepts, strengthen fundamentals and build projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {activeTopics.map(([title, description]) => (
              <Link
                key={title}
                to={`/courses/${activeLanguage}/${slugify(title)}`}
                className="group flex min-h-12 items-center justify-between gap-3 border-b border-gray-200/70 py-3 text-sm text-gray-700 transition-colors hover:text-[#F0440A]"
              >
                <span>{title}</span>

                <ArrowRight
                  size={14}
                  className="shrink-0 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-[#F0440A]"
                />
              </Link>
            ))}
          </div>

          {/* BOTTOM CTA — MATCHES WEB DEVELOPMENT */}
          <div className="mt-8 flex flex-col justify-between gap-4 rounded-xl bg-white p-5 sm:flex-row sm:items-center">
            <div>
              <h4 className="font-semibold text-gray-900">
                Start your programming journey
              </h4>

              <p className="mt-1 text-sm text-gray-500">
                From programming fundamentals to practical projects.
              </p>
            </div>

            <Link
              to="/courses/programming"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F0440A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D83B08]"
            >
              Explore All Courses
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}