
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Lightbulb,
  ListChecks,
  PlayCircle,
} from "lucide-react";

const lessons = [
  {
    id: "html-elements",
    title: "HTML Elements",
    duration: "8 min",
  },
  {
    id: "html-tags",
    title: "HTML Tags",
    duration: "7 min",
  },
  {
    id: "html-attributes",
    title: "HTML Attributes",
    duration: "10 min",
  },
  {
    id: "headings-paragraphs",
    title: "Headings and Paragraphs",
    duration: "8 min",
  },
  {
    id: "text-formatting",
    title: "Text Formatting Elements",
    duration: "10 min",
  },
  {
    id: "comments",
    title: "HTML Comments",
    duration: "5 min",
  },
  {
    id: "block-inline",
    title: "Block and Inline Elements",
    duration: "10 min",
  },
  {
    id: "nesting",
    title: "Nesting HTML Elements",
    duration: "8 min",
  },
  {
    id: "entities",
    title: "HTML Entities",
    duration: "7 min",
  },
  {
    id: "practice",
    title: "Practice and Assessment",
    duration: "15 min",
  },
];

const CodeExample = ({ title, code, output }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Copy failed. Please copy the code manually.");
    }
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between gap-3">
        <h4 className="flex items-center gap-2 font-bold text-slate-900">
          <Code2 size={18} className="text-orange-500" />
          {title}
        </h4>

        <button
          type="button"
          onClick={copyCode}
          className="flex items-center gap-2 border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>

      <pre className="mt-3 overflow-x-auto border border-slate-800 bg-[#11151c] p-5 text-sm leading-7 text-slate-100">
        <code>{code}</code>
      </pre>

      {output && (
        <div className="mt-4 border border-slate-200 bg-slate-50 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
            Expected Output
          </p>
          <pre className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

const LessonHeading = ({ number, title, duration }) => (
  <div className="border-b border-slate-200 pb-6">
    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-orange-600">
      <span>Lesson {number}</span>
      <span className="text-slate-300">/</span>
      <span>{duration}</span>
    </div>

    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
      {title}
    </h2>
  </div>
);

export default function HtmlFundamentals() {
  const navigate = useNavigate();

  const [activeLesson, setActiveLesson] = useState("html-elements");
  const [completed, setCompleted] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentIndex = lessons.findIndex(
    (lesson) => lesson.id === activeLesson
  );

  const currentLesson = lessons[currentIndex];

  const progress = Math.round(
    (completed.length / lessons.length) * 100
  );

  const openLesson = (id) => {
    setActiveLesson(id);
    setShowAnswer(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const toggleComplete = (id) => {
    setCompleted((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const goToNextLesson = () => {
    if (currentIndex < lessons.length - 1) {
      openLesson(lessons[currentIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-16 max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={() =>
              navigate("/courses/web-development/html")
            }
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-orange-600"
          >
            <ArrowLeft size={17} />
            HTML Course
          </button>

          <div className="flex items-center gap-2 text-sm font-semibold">
            <BookOpen size={17} className="text-orange-500" />
            <span>HTML Fundamentals</span>
          </div>

          <span className="text-sm font-bold text-orange-600">
            {progress}%
          </span>
        </div>

        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-orange-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[290px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside className="border-b border-slate-200 bg-white lg:sticky lg:top-[69px] lg:h-[calc(100vh-69px)] lg:overflow-y-auto lg:border-b-0 lg:border-r">
          <div className="p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-600">
              HTML Course
            </p>

            <h1 className="mt-3 text-xl font-bold">
              HTML Fundamentals
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Learn the essential building blocks of HTML with examples
              and hands-on exercises.
            </p>

            <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
              <span>{completed.length} of {lessons.length} completed</span>
              <span>{progress}%</span>
            </div>

            <div className="mt-2 h-1.5 bg-slate-100">
              <div
                className="h-full bg-orange-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="border-t border-slate-200 p-3">
            {lessons.map((lesson, index) => {
              const isActive = activeLesson === lesson.id;
              const isCompleted = completed.includes(lesson.id);

              return (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => openLesson(lesson.id)}
                  className={`flex w-full items-start gap-3 border-l-2 px-3 py-3 text-left transition ${
                    isActive
                      ? "border-orange-500 bg-orange-50 text-orange-700"
                      : "border-transparent text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span className="mt-0.5 shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 size={17} className="text-green-600" />
                    ) : (
                      <span className="flex h-[17px] w-[17px] items-center justify-center border border-slate-300 text-[10px]">
                        {index + 1}
                      </span>
                    )}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-5">
                      {lesson.title}
                    </span>
                    <span className="mt-1 block text-xs text-slate-400">
                      {lesson.duration}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 bg-white">
          <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-12 lg:px-12">
            {/* LESSON 1 */}
            <section
              id="html-elements"
              className="scroll-mt-24 border-b border-slate-200 pb-12"
            >
              <LessonHeading
                number={1}
                title="HTML Elements"
                duration="8 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                An HTML element is a fundamental building block of an
                HTML document. It usually consists of an opening tag,
                content, and a closing tag. Elements tell the browser
                how different pieces of content are structured.
              </p>

              <h3 className="mt-7 text-xl font-bold">Anatomy of an Element</h3>

              <CodeExample
                title="HTML Element"
                code={`<p>Hello, World!</p>`}
                output="Hello, World!"
              />

              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <p><strong className="text-slate-900">Opening tag:</strong> <code>&lt;p&gt;</code> begins the paragraph.</p>
                <p><strong className="text-slate-900">Content:</strong> <code>Hello, World!</code> is the paragraph text.</p>
                <p><strong className="text-slate-900">Closing tag:</strong> <code>&lt;/p&gt;</code> marks the end of the paragraph.</p>
              </div>

              <h3 className="mt-7 text-xl font-bold">More Examples</h3>

              <CodeExample
                title="Common Elements"
                code={`<h1>Welcome</h1>
<p>This is a paragraph.</p>
<strong>Important text</strong>
<a href="https://example.com">Visit Example</a>`}
                output={`Welcome
This is a paragraph.
Important text
Visit Example`}
              />

              <div className="mt-6 border-l-4 border-orange-500 bg-orange-50 p-4">
                <p className="flex items-center gap-2 font-bold">
                  <Lightbulb size={17} className="text-orange-600" />
                  Remember
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  An element is not always made of three parts. Some
                  elements, such as <code>&lt;br&gt;</code> and
                  <code> &lt;img&gt;</code>, are void elements and do
                  not have closing tags.
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleComplete("html-elements")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("html-elements")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* LESSON 2 */}
            <section
              id="html-tags"
              className="scroll-mt-24 border-b border-slate-200 py-12"
            >
              <LessonHeading
                number={2}
                title="HTML Tags"
                duration="7 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                HTML tags are keywords enclosed in angle brackets.
                They identify the type of content or structure an
                element represents. Most elements use opening and
                closing tags.
              </p>

              <CodeExample
                title="Opening and Closing Tags"
                code={`<h1>My Website</h1>
<p>Learn HTML step by step.</p>
<div>A container for content.</div>`}
                output={`My Website
Learn HTML step by step.
A container for content.`}
              />

              <h3 className="mt-7 text-xl font-bold">Types of Tags</h3>

              <div className="mt-4 space-y-4">
                <div className="border border-slate-200 p-4">
                  <h4 className="font-bold">Paired Tags</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    These generally have an opening tag and a closing
                    tag, such as <code>&lt;p&gt;</code> and
                    <code> &lt;/p&gt;</code>.
                  </p>
                </div>

                <div className="border border-slate-200 p-4">
                  <h4 className="font-bold">Void Elements</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    These cannot contain child content and have no
                    closing tag. Examples include <code>&lt;br&gt;</code>,
                    <code> &lt;hr&gt;</code>, <code>&lt;img&gt;</code>,
                    and <code>&lt;input&gt;</code>.
                  </p>
                </div>
              </div>

              <CodeExample
                title="Void Element Examples"
                code={`<p>First line<br>Second line</p>
<hr>
<img src="photo.jpg" alt="A landscape">`}
                output={`First line
Second line
A horizontal divider
An image, if photo.jpg is available`}
              />

              <button
                type="button"
                onClick={() => toggleComplete("html-tags")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("html-tags")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* LESSON 3 */}
            <section
              id="html-attributes"
              className="scroll-mt-24 border-b border-slate-200 py-12"
            >
              <LessonHeading
                number={3}
                title="HTML Attributes"
                duration="10 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                Attributes provide additional information about an
                element. They are written in the opening tag and
                commonly use a name-value pair.
              </p>

              <CodeExample
                title="Using Attributes"
                code={`<a href="https://example.com" target="_blank">
  Visit Example
</a>

<img
  src="photo.jpg"
  alt="A mountain landscape"
  width="400"
>

<p class="intro">Welcome to my website.</p>`}
                output={`A link to Example
An image with alternative text and width
A paragraph with the intro class`}
              />

              <h3 className="mt-7 text-xl font-bold">Common Attributes</h3>

              <div className="mt-4 overflow-x-auto border border-slate-200">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border-b border-slate-200 p-3">Attribute</th>
                      <th className="border-b border-slate-200 p-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr>
                      <td className="border-b border-slate-200 p-3 font-mono">href</td>
                      <td className="border-b border-slate-200 p-3">Specifies a link destination.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 p-3 font-mono">src</td>
                      <td className="border-b border-slate-200 p-3">Specifies a resource URL.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 p-3 font-mono">alt</td>
                      <td className="border-b border-slate-200 p-3">Provides alternative text for an image.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 p-3 font-mono">class</td>
                      <td className="border-b border-slate-200 p-3">Assigns one or more CSS classes.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-200 p-3 font-mono">id</td>
                      <td className="border-b border-slate-200 p-3">Identifies an element within a document.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono">title</td>
                      <td className="p-3">Provides advisory information about an element.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 border-l-4 border-orange-500 bg-orange-50 p-4">
                <p className="font-bold">Important rule</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Put attributes inside the opening tag. Quote attribute
                  values consistently, and always provide meaningful
                  alternative text for informative images.
                </p>
              </div>

              <button
                type="button"
                onClick={() => toggleComplete("html-attributes")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("html-attributes")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* LESSON 4 */}
            <section
              id="headings-paragraphs"
              className="scroll-mt-24 border-b border-slate-200 py-12"
            >
              <LessonHeading
                number={4}
                title="Headings and Paragraphs"
                duration="8 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                Headings organize content into a clear hierarchy.
                HTML provides six heading levels, from
                <code> &lt;h1&gt;</code> to <code>&lt;h6&gt;</code>.
                Paragraphs use the <code>&lt;p&gt;</code> element.
              </p>

              <CodeExample
                title="Heading Hierarchy"
                code={`<h1>Web Development</h1>
<p>Learn how websites are built.</p>

<h2>Frontend Development</h2>
<p>Frontend development focuses on the user interface.</p>

<h3>HTML</h3>
<p>HTML structures web content.</p>`}
                output={`Web Development
Learn how websites are built.

Frontend Development
Frontend development focuses on the user interface.

HTML
HTML structures web content.`}
              />

              <h3 className="mt-7 text-xl font-bold">Best Practices</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Use headings according to their structural hierarchy.</li>
                <li>Use paragraphs for blocks of prose.</li>
                <li>Do not choose a heading level only because of its default font size.</li>
                <li>Use CSS to control visual size and spacing.</li>
              </ul>

              <button
                type="button"
                onClick={() => toggleComplete("headings-paragraphs")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("headings-paragraphs")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* LESSON 5 */}
            <section
              id="text-formatting"
              className="scroll-mt-24 border-b border-slate-200 py-12"
            >
              <LessonHeading
                number={5}
                title="Text Formatting Elements"
                duration="10 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                HTML provides elements for expressing meaning and
                emphasis in text. Some elements communicate importance,
                while others represent quotations, inserted text,
                deleted text, or technical content.
              </p>

              <CodeExample
                title="Text Formatting"
                code={`<p><strong>Important information</strong></p>
<p><em>Emphasized text</em></p>
<p><mark>Highlighted text</mark></p>
<p><del>Old price: ₹999</del></p>
<p>New price: <ins>₹799</ins></p>
<p>Water formula: H<sub>2</sub>O</p>
<p>Square: x<sup>2</sup></p>
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>`}
                output={`Important information
Emphasized text
Highlighted text
Old price: ₹999
New price: ₹799
Water formula: H₂O
Square: x²
Press Ctrl + S to save.`}
              />

              <h3 className="mt-7 text-xl font-bold">Semantic Meaning Matters</h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Use <code>&lt;strong&gt;</code> for strong importance
                and <code>&lt;em&gt;</code> for stress emphasis. Use
                <code> &lt;b&gt;</code> or <code>&lt;i&gt;</code> when
                their intended meaning fits. Do not rely on formatting
                alone to communicate critical information.
              </p>

              <button
                type="button"
                onClick={() => toggleComplete("text-formatting")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("text-formatting")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* LESSON 6 */}
            <section
              id="comments"
              className="scroll-mt-24 border-b border-slate-200 py-12"
            >
              <LessonHeading
                number={6}
                title="HTML Comments"
                duration="5 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                Comments allow developers to leave notes inside HTML
                source code. Browsers do not display comments as normal
                page content.
              </p>

              <CodeExample
                title="Writing Comments"
                code={`<!-- Main page heading -->
<h1>Learning HTML</h1>

<!-- This paragraph introduces the course -->
<p>Welcome to the course.</p>`}
                output={`Learning HTML

Welcome to the course.`}
              />

              <div className="mt-5 border border-slate-200 p-5">
                <h4 className="font-bold">Good Uses of Comments</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  <li>Explain a complex section of markup.</li>
                  <li>Separate large document sections.</li>
                  <li>Leave helpful notes for teammates.</li>
                </ul>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Never store passwords, API keys, private data, or secrets
                in comments. Anyone who can inspect the page source may
                be able to read them.
              </p>

              <button
                type="button"
                onClick={() => toggleComplete("comments")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("comments")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* LESSON 7 */}
            <section
              id="block-inline"
              className="scroll-mt-24 border-b border-slate-200 py-12"
            >
              <LessonHeading
                number={7}
                title="Block and Inline Elements"
                duration="10 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                In traditional browser layout, block elements generally
                begin on a new line and occupy the available width.
                Inline elements participate in the surrounding line of
                text. CSS can change how elements are displayed.
              </p>

              <CodeExample
                title="Block and Inline Examples"
                code={`<div>This is a block container.</div>
<p>This is a paragraph.</p>

<p>
  Learn <strong>HTML</strong> and
  <a href="https://example.com">visit this link</a>.
</p>`}
                output={`This is a block container.
This is a paragraph.

Learn HTML and visit this link.`}
              />

              <h3 className="mt-7 text-xl font-bold">Common Examples</h3>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="border border-slate-200 p-4">
                  <h4 className="font-bold">Common block elements</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>,
                    <code> &lt;section&gt;</code>,
                    <code> &lt;article&gt;</code>,
                    <code> &lt;h1&gt;</code>
                  </p>
                </div>

                <div className="border border-slate-200 p-4">
                  <h4 className="font-bold">Common inline elements</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>,
                    <code> &lt;strong&gt;</code>,
                    <code> &lt;em&gt;</code>
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                These are common default behaviors, not unchangeable
                rules. For example, CSS <code>display: block</code>,
                <code> inline</code>, and <code>inline-block</code>
                can change layout behavior.
              </p>

              <button
                type="button"
                onClick={() => toggleComplete("block-inline")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("block-inline")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* LESSON 8 */}
            <section
              id="nesting"
              className="scroll-mt-24 border-b border-slate-200 py-12"
            >
              <LessonHeading
                number={8}
                title="Nesting HTML Elements"
                duration="8 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                Nesting means placing one HTML element inside another.
                Correct nesting keeps the document structure predictable
                and helps browsers, developers, and assistive technologies
                interpret the content.
              </p>

              <CodeExample
                title="Correct Nesting"
                code={`<article>
  <h2>HTML Basics</h2>
  <p>
    Learn <strong>HTML fundamentals</strong>
    step by step.
  </p>
</article>`}
                output={`HTML Basics

Learn HTML fundamentals step by step.`}
              />

              <h3 className="mt-7 text-xl font-bold">Incorrect Nesting</h3>

              <CodeExample
                title="Avoid Crossing Elements"
                code={`<!-- Incorrect nesting -->
<p><strong>Important text</p></strong>

<!-- Correct nesting -->
<p><strong>Important text</strong></p>`}
                output={`Always close nested elements
in the correct structural order.`}
              />

              <p className="mt-5 text-sm leading-7 text-slate-600">
                A useful rule is to close the most recently opened
                element first, where a closing tag is required.
                HTML parsers may repair some invalid markup, but
                relying on browser error recovery is not good practice.
              </p>

              <button
                type="button"
                onClick={() => toggleComplete("nesting")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("nesting")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* LESSON 9 */}
            <section
              id="entities"
              className="scroll-mt-24 border-b border-slate-200 py-12"
            >
              <LessonHeading
                number={9}
                title="HTML Entities"
                duration="7 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                HTML character references let you represent special
                characters in markup. Named references begin with an
                ampersand and end with a semicolon. Numeric references
                use a decimal or hexadecimal character code.
              </p>

              <CodeExample
                title="Common Character References"
                code={`<p>5 &lt; 10</p>
<p>10 &gt; 5</p>
<p>Tom &amp; Jerry</p>
<p>&copy; 2026 My Website</p>
<p>&quot;Hello HTML&quot;</p>`}
                output={`5 < 10
10 > 5
Tom & Jerry
© 2026 My Website
"Hello HTML"`}
              />

              <h3 className="mt-7 text-xl font-bold">Why Use Them?</h3>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Represent less-than and greater-than characters in markup.</li>
                <li>Display symbols such as copyright and registered marks.</li>
                <li>Represent characters that are awkward to type directly.</li>
              </ul>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Modern HTML supports many Unicode characters directly
                when the document uses an appropriate character encoding,
                usually UTF-8. Character references are still useful
                in contexts where special characters could be interpreted
                as markup.
              </p>

              <button
                type="button"
                onClick={() => toggleComplete("entities")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("entities")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* LESSON 10 */}
            <section
              id="practice"
              className="scroll-mt-24 py-12"
            >
              <LessonHeading
                number={10}
                title="Practice and Assessment"
                duration="15 min"
              />

              <p className="mt-6 text-base leading-8 text-slate-600">
                Use this exercise to test your understanding of tags,
                elements, attributes, headings, paragraphs, links,
                and text formatting.
              </p>

              <div className="mt-6 border border-slate-200 p-5">
                <div className="flex items-center gap-2">
                  <ListChecks size={19} className="text-orange-500" />
                  <h3 className="text-lg font-bold">Your Challenge</h3>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Create a personal introduction page with these
                  requirements:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  <li>Use an h1 heading for your name.</li>
                  <li>Add a paragraph describing yourself.</li>
                  <li>Use strong and em to emphasize relevant text.</li>
                  <li>Add a link to a website you like.</li>
                  <li>Add a comment describing your page.</li>
                  <li>Use a proper HTML document structure.</li>
                </ul>

                <button
                  type="button"
                  onClick={() => setShowAnswer((value) => !value)}
                  className="mt-5 flex items-center gap-2 border border-orange-500 px-4 py-3 text-sm font-semibold text-orange-700 hover:bg-orange-50"
                >
                  {showAnswer ? "Hide Solution" : "Show Solution"}
                  <ArrowRight size={16} />
                </button>

                {showAnswer && (
                  <div className="mt-4">
                    <CodeExample
                      title="Practice Solution"
                      code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Introduction</title>
</head>
<body>
  <!-- Personal introduction -->
  <h1>My Name</h1>

  <p>
    Hello! I am learning
    <strong>HTML</strong> and
    <em>web development</em>.
  </p>

  <p>
    Visit
    <a href="https://developer.mozilla.org/">
      MDN Web Docs
    </a>
    to learn more.
  </p>
</body>
</html>`}
                      output={`My Name

Hello! I am learning HTML and web development.

Visit MDN Web Docs to learn more.`}
                    />
                  </div>
                )}
              </div>

              <div className="mt-8 border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold">Fundamentals Checklist</h3>

                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {[
                    "I understand the difference between a tag and an element.",
                    "I can write and use HTML attributes.",
                    "I can organize text with headings and paragraphs.",
                    "I understand basic text formatting elements.",
                    "I can write comments and nest elements correctly.",
                    "I can use HTML character references.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-green-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => toggleComplete("practice")}
                className="mt-7 flex items-center gap-2 border border-slate-200 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <CheckCircle2 size={17} />
                {completed.includes("practice")
                  ? "Completed — Undo"
                  : "Mark Lesson Complete"}
              </button>
            </section>

            {/* Footer Navigation */}
            <div className="mt-10 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() =>
                  navigate("/courses/web-development/html")
                }
                className="flex items-center justify-center gap-2 border border-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                <ArrowLeft size={17} />
                HTML Course
              </button>

              <button
                type="button"
                onClick={() => {
                  if (currentLesson) {
                    toggleComplete(currentLesson.id);
                  }

                  navigate(
                    "/courses/web-development/html/document-structure"
                  );
                }}
                className="flex items-center justify-center gap-2 bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Next Module: Document Structure
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="mt-8 border border-slate-200 p-5">
              <div className="flex items-start gap-3">
                <PlayCircle
                  size={21}
                  className="mt-0.5 shrink-0 text-orange-500"
                />
                <div>
                  <h3 className="font-bold">Keep Practicing</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Create small HTML pages, inspect their source,
                    and experiment with different elements. Practice
                    makes HTML syntax and document structure easier
                    to understand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
