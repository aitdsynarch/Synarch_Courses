
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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

  const activeTopics = topics[activeLanguage] || [];
  const selectedLanguage = languages.find(
    (language) => language.id === activeLanguage
  );

  return (
    <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-[#FAF9F7] shadow-xl">
      <div className="grid min-h-[390px] grid-cols-1 md:grid-cols-[250px_1fr]">
        {/* Languages Sidebar */}
        <aside className="flex flex-col border-r border-gray-200 bg-[#EEEDEA] p-6">
          <p className="mb-5 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            Programming Languages
          </p>

          <div className="space-y-1">
            {languages.map((language) => (
              <button
                key={language.id}
                type="button"
                onMouseEnter={() => setActiveLanguage(language.id)}
                onFocus={() => setActiveLanguage(language.id)}
                onClick={() => setActiveLanguage(language.id)}
                className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm transition ${
                  activeLanguage === language.id
                    ? "bg-white font-semibold text-[#F0440A] shadow-sm"
                    : "text-gray-700 hover:bg-white/70"
                }`}
              >
                {language.label}
                <ArrowRight size={15} />
              </button>
            ))}
          </div>

          <Link
            to="/courses/programming"
            className="mt-7 flex items-center justify-between bg-[#262522] px-4 py-4 text-sm font-semibold text-white transition hover:bg-[#F0440A] md:mt-auto"
          >
            Explore all courses
            <ArrowRight size={16} />
          </Link>
        </aside>

        {/* Topics */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F0440A]">
              Learn & Practice
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {selectedLanguage?.label}
              <span className="ml-2 text-gray-400">→</span>
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Explore concepts, strengthen fundamentals and build projects.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
            {activeTopics.map(([title, description]) => (
              <Link
                key={title}
                to={`/courses/${activeLanguage}/${slugify(title)}`}
                className="group block"
              >
                <h4 className="text-sm font-medium text-gray-900 transition-colors group-hover:text-[#F0440A]">
                  {title}
                </h4>

                <p className="mt-1.5 max-w-xs text-xs leading-5 text-gray-500 sm:text-[13px]">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
