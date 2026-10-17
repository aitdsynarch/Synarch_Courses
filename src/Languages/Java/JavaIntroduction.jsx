import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Coffee,
  Copy,
  Menu,
  Play,
  Terminal,
  X,
} from "lucide-react";

const lessons = [
  { id: "programming", title: "What Is Programming?" },
  { id: "java", title: "What Is Java?" },
  { id: "history", title: "History and Evolution of Java" },
  { id: "features", title: "Features of Java" },
  { id: "applications", title: "Real-World Applications" },
  { id: "comparison", title: "Java vs C vs C++ vs Python" },
  { id: "javascript", title: "Java vs JavaScript" },
  { id: "working", title: "How Java Works" },
  { id: "jdk-jre-jvm", title: "JDK vs JRE vs JVM" },
  { id: "installation", title: "Installing Java" },
  { id: "ide", title: "Installing an IDE" },
  { id: "first-program", title: "Your First Java Program" },
  { id: "compile-run", title: "Compiling and Running Code" },
  { id: "main-method", title: "Understanding main()" },
  { id: "comments", title: "Comments and Coding Conventions" },
  { id: "quiz", title: "Module Assessment" },
];

const javaCode = `public class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`;

const CodeBlock = ({ code, language = "java" }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-slate-800 bg-[#111827] text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-700 px-4 py-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Code2 size={15} />
          {language}
        </div>

        <button
          onClick={copyCode}
          className="flex items-center gap-2 rounded-md px-2 py-1 text-xs text-slate-300 transition hover:bg-slate-700"
        >
          {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre className="overflow-x-auto p-4 text-sm leading-7">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeading = ({ number, title, description }) => (
  <div className="mb-6">
    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-orange-600">
      <span className="rounded-md bg-orange-50 px-2.5 py-1">
        Lesson {number}
      </span>
      <span className="text-slate-400">•</span>
      <span>Beginner</span>
    </div>

    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
      {title}
    </h2>

    {description && (
      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        {description}
      </p>
    )}
  </div>
);

const InfoBox = ({ title = "Key takeaway", children }) => (
  <div className="my-5 rounded-xl border border-orange-100 bg-orange-50/70 p-4">
    <p className="mb-1 font-semibold text-orange-800">{title}</p>
    <div className="text-sm leading-7 text-slate-700">{children}</div>
  </div>
);

const Output = ({ children }) => (
  <div className="my-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
      Output
    </p>
    <pre className="whitespace-pre-wrap text-sm leading-6 text-slate-800">
      {children}
    </pre>
  </div>
);

function JavaIntroduction() {
  const [activeLesson, setActiveLesson] = useState("programming");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const goToLesson = (id) => {
    setActiveLesson(id);
    setSidebarOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const quiz = [
    {
      question: "What is the primary purpose of programming?",
      options: [
        "Giving instructions to a computer",
        "Designing monitors",
        "Increasing internet speed",
        "Manufacturing hardware",
      ],
      answer: 0,
      explanation:
        "Programming provides instructions that tell a computer how to perform tasks.",
    },
    {
      question: "Which tool compiles Java source code into bytecode?",
      options: ["JVM", "javac", "JRE", "Javadoc"],
      answer: 1,
      explanation: "javac is the Java compiler.",
    },
    {
      question: "Which component executes Java bytecode?",
      options: ["JDK alone", "Text editor", "JVM", "HTML"],
      answer: 2,
      explanation:
        "The JVM loads, verifies and executes Java bytecode.",
    },
    {
      question: "Which statement prints text in Java?",
      options: [
        "console.write()",
        "print.line()",
        "System.out.println()",
        "echo()",
      ],
      answer: 2,
      explanation:
        "System.out.println() prints text followed by a new line.",
    },
    {
      question: "Are Java and JavaScript the same language?",
      options: [
        "Yes",
        "No, they are different languages",
        "JavaScript is a Java library",
        "Java is a browser",
      ],
      answer: 1,
      explanation:
        "Java and JavaScript have different language designs and runtimes.",
    },
    {
      question: "Which kit is recommended for Java development?",
      options: ["JDK", "Only a text file", "Only HTML", "A browser only"],
      answer: 0,
      explanation:
        "The JDK includes the compiler and other development tools.",
    },
    {
      question: "Which symbol starts a single-line Java comment?",
      options: ["##", "<!-- -->", "//", "**"],
      answer: 2,
      explanation: "Java single-line comments begin with //.",
    },
    {
      question: "What is the traditional Java entry-point method called?",
      options: ["startProgram()", "main()", "runJava()", "initApp()"],
      answer: 1,
      explanation:
        "A traditional standalone Java application starts from main().",
    },
  ];

  const score = quiz.filter(
    (question, index) => answers[index] === question.answer
  ).length;



function LessonVideo({ videoUrl }) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
        <Play size={20} className="text-red-600" />
        Lesson Video
      </h3>

      <div className="aspect-video overflow-hidden rounded-lg bg-black">
        <iframe
          src={videoUrl.replace("watch?v=", "embed/")}
          title="Lesson Video"
          className="h-full w-full"
          allowFullScreen
        />
      </div>
    </div>
  );
}





  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white">
              <Coffee size={23} />
            </div>

            <div>
              <h1 className="font-bold tracking-tight text-slate-900">
                Java Programming
              </h1>
              <p className="text-xs text-slate-500">
                Module 1 · Introduction to Java
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700 sm:block">
              Beginner Level
            </span>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-lg border border-slate-200 p-2 lg:hidden"
              aria-label="Toggle lesson navigation"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
        {/* Sticky Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } sticky top-20 z-30 h-[calc(100vh-6rem)] overflow-y-auto border-r border-slate-200 bg-white py-6 pr-3 lg:block`}
        >
          <div className="mb-5 px-3">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              Course content
            </p>
            <h2 className="mt-2 text-lg font-bold text-slate-900">
              Introduction to Java
            </h2>
            <p className="mt-1 text-sm text-slate-500">15 lessons + quiz</p>
          </div>

          <div className="mb-5 px-3">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
              <span>Module overview</span>
              <span>Beginner</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[6%] rounded-full bg-orange-500" />
            </div>
          </div>

          <nav className="space-y-1" aria-label="Java lessons">
            {lessons.map((lesson, index) => {
              const isActive = activeLesson === lesson.id;

              return (
                <button
                  key={lesson.id}
                  onClick={() => goToLesson(lesson.id)}
                  className={`group flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                    isActive
                      ? "bg-orange-50 font-semibold text-orange-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs ${
                      isActive
                        ? "bg-orange-600 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    {index === 15 ? <CheckCircle2 size={14} /> : index + 1}
                  </span>

                  <span className="pt-0.5 leading-5">{lesson.title}</span>
                </button>
              );
            })}
          </nav>

          <div className="mx-2 mt-6 rounded-xl bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-slate-700">
              <BookOpen size={17} />
              <span className="text-sm font-semibold">Study tip</span>
            </div>
            <p className="text-xs leading-6 text-slate-500">
              Read each lesson, run the code examples, and complete the
              assignments before moving forward.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 py-8 sm:py-10">
          {/* Hero */}
          <section className="mb-10 overflow-hidden rounded-2xl bg-slate-950 p-6 text-white sm:p-10">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-orange-200">
                <BookOpen size={14} />
                MODULE 01
              </span>

              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
                Introduction to{" "}
                <span className="text-orange-400">Java</span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Start your Java journey from zero. Learn programming
                fundamentals, understand how Java works, set up your
                environment, and write your first program.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="rounded-lg border border-white/10 px-3 py-2">
                  <BookOpen className="mr-2 inline" size={14} />
                  15 lessons
                </span>
                <span className="rounded-lg border border-white/10 px-3 py-2">
                  <Terminal className="mr-2 inline" size={14} />
                  Hands-on coding
                </span>
                <span className="rounded-lg border border-white/10 px-3 py-2">
                  <CheckCircle2 className="mr-2 inline" size={14} />
                  Final quiz
                </span>
              </div>

              <button
                onClick={() => goToLesson("programming")}
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Start learning <ChevronRight size={17} />
              </button>
            </div>
          </section>

          {/* Learning Objectives */}
          <section className="mb-12 rounded-xl border border-slate-200 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Learning Objectives
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              After completing this module, you will be able to:
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Understand programming and Java fundamentals.",
                "Explain Java features and real-world applications.",
                "Differentiate JDK, JRE and JVM.",
                "Install Java and configure an IDE.",
                "Compile and run a Java program.",
                "Understand main(), comments and naming conventions.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-emerald-600"
                    size={17}
                  />
                  <span className="leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Lesson 1 */}
          <section
  id="programming"
  className="scroll-mt-24 border-b border-slate-200 pb-12"
>
<SectionHeading
  number={1}
  title="What Is Programming?"
  description="Understand how programming works and how software is created."
/>

<LessonVideo videoUrl="https://www.youtube.com/watch?v=yRpLlJmRo2w" />


  {/* Introduction */}
  <div className="space-y-4 text-[15px] leading-8 text-slate-600">
    <p>
      Programming is the process of designing and writing a set of
      instructions that tells a computer how to perform a particular task.
      These instructions are written using programming languages such as
      Java, C, C++, and Python.
    </p>

    <p>
      Computers can perform calculations, store information, process
      images, communicate over networks, and execute millions of
      operations. However, they need instructions that specify what
      operations to perform and in what order.
    </p>

    <p>
      A programmer analyzes a problem, develops a solution, converts that
      solution into code, tests the code, and improves it until the
      program produces the expected result.
    </p>
  </div>

  {/* Online Image */}
  <figure className="my-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
    <img
      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=85"
      alt="Programming code displayed on a computer screen"
      className="h-56 w-full object-cover sm:h-80"
      loading="lazy"
    />
    <figcaption className="px-4 py-3 text-sm leading-6 text-slate-500">
      Programming involves writing instructions that a computer can
      execute to perform a task.
    </figcaption>
  </figure>

  {/* Section 1.1 */}
  <div className="mt-10">
    <h3 className="text-xl font-bold text-slate-900">
      1.1 How Does Programming Work?
    </h3>

    <p className="mt-3 leading-8 text-slate-600">
      Programming begins with a problem. The programmer determines what
      information is needed, which operations must be performed, and
      what result should be produced.
    </p>

    <p className="mt-3 leading-8 text-slate-600">
      Consider a simple example: calculating the total price of two
      products. The computer must receive the prices, add them together,
      and display the total.
    </p>

    {/* Workflow */}
    <div className="my-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <h4 className="mb-5 font-bold text-slate-900">
        The Programming Workflow
      </h4>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            number: "01",
            title: "Input",
            description:
              "Collect the data required to solve the problem.",
            example: "Price A = 100",
          },
          {
            number: "02",
            title: "Processing",
            description:
              "Perform calculations or logical operations.",
            example: "100 + 200",
          },
          {
            number: "03",
            title: "Instructions",
            description:
              "Define the operations in a programming language.",
            example: "total = a + b",
          },
          {
            number: "04",
            title: "Output",
            description:
              "Display or return the calculated result.",
            example: "Total = 300",
          },
        ].map((item) => (
          <div
            key={item.number}
            className="rounded-xl border border-slate-200 p-4"
          >
            <span className="text-xs font-bold tracking-widest text-orange-600">
              STEP {item.number}
            </span>

            <h5 className="mt-3 font-bold text-slate-900">
              {item.title}
            </h5>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>

            <div className="mt-4 rounded-lg bg-slate-50 p-2 font-mono text-xs text-slate-700">
              {item.example}
            </div>
          </div>
        ))}
      </div>
    </div>

    <h4 className="mt-7 text-lg font-bold text-slate-900">
      Example: Calculating a Total
    </h4>

    <CodeBlock
      code={`public class TotalPrice {
    public static void main(String[] args) {
        int priceA = 100;
        int priceB = 200;

        int total = priceA + priceB;

        System.out.println("Total price: " + total);
    }
}`}
    />

    <Output>{`Total price: 300`}</Output>

    <p className="leading-8 text-slate-600">
      In this program, <code>priceA</code> and <code>priceB</code> store
      the input values. The addition operator calculates their sum,
      and <code>System.out.println()</code> displays the result.
    </p>
  </div>

  {/* Section 1.2 */}
  <div className="mt-12">
    <h3 className="text-xl font-bold text-slate-900">
      1.2 What Is a Computer Program?
    </h3>

    <p className="mt-3 leading-8 text-slate-600">
      A computer program is a collection of instructions written to
      accomplish a specific task. Programs can be small, such as a
      calculator, or large, such as a banking application or an
      operating system.
    </p>

    <p className="mt-3 leading-8 text-slate-600">
      Every program follows rules defined by its programming language.
      A program may receive input, process data, make decisions, repeat
      operations, and produce output.
    </p>

    <div className="my-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-slate-200 p-5">
        <h4 className="font-bold text-slate-900">
          Example: Calculator
        </h4>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          Accepts two numbers and an operator, performs the calculation,
          and displays the answer.
        </p>

        <div className="mt-4 rounded-lg bg-slate-50 p-3 font-mono text-sm">
          10 + 20 = 30
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 p-5">
        <h4 className="font-bold text-slate-900">
          Example: Student Management
        </h4>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          Stores student details, calculates marks, and displays
          academic records.
        </p>

        <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm">
          Student · Marks · Result
        </div>
      </div>
    </div>

    <h4 className="text-lg font-bold text-slate-900">
      Program vs Programming
    </h4>

    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[400px] text-left text-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-3">Program</th>
            <th className="px-4 py-3">Programming</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          <tr>
            <td className="px-4 py-3 leading-6 text-slate-600">
              The instructions or software created.
            </td>
            <td className="px-4 py-3 leading-6 text-slate-600">
              The process of designing and writing those instructions.
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 leading-6 text-slate-600">
              Example: a calculator application.
            </td>
            <td className="px-4 py-3 leading-6 text-slate-600">
              Example: writing the calculator's code.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Section 1.3 */}
  <div className="mt-12">
    <h3 className="text-xl font-bold text-slate-900">
      1.3 What Is an Algorithm?
    </h3>

    <p className="mt-3 leading-8 text-slate-600">
      An algorithm is a finite sequence of clear steps designed to
      solve a problem. Before writing code, programmers often create
      an algorithm to understand the logic of the solution.
    </p>

    <p className="mt-3 leading-8 text-slate-600">
      An algorithm is independent of any particular programming
      language. The same algorithm can be implemented in Java, C++,
      Python, or another suitable language.
    </p>

    <div className="my-5 rounded-xl border border-slate-200 p-5">
      <h4 className="font-bold text-slate-900">
        Algorithm: Add Two Numbers
      </h4>

      <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
        <li>Start the program.</li>
        <li>Read the first number.</li>
        <li>Read the second number.</li>
        <li>Add both numbers and store the result.</li>
        <li>Display the result.</li>
        <li>Stop the program.</li>
      </ol>
    </div>

    <h4 className="mt-7 text-lg font-bold text-slate-900">
      What Is Pseudocode?
    </h4>

    <p className="mt-3 leading-8 text-slate-600">
      Pseudocode expresses an algorithm in simple, structured
      language. It is not tied to the exact syntax of a programming
      language.
    </p>

    <CodeBlock
      language="text"
      code={`START
    INPUT firstNumber
    INPUT secondNumber
    total = firstNumber + secondNumber
    PRINT total
STOP`}
    />

    <InfoBox title="Remember">
      An algorithm describes the steps used to solve a problem.
      A program implements those steps using a programming language.
    </InfoBox>
  </div>

  {/* Section 1.4 */}
  <div className="mt-12">
    <h3 className="text-xl font-bold text-slate-900">
      1.4 What Is a Programming Language?
    </h3>

    <p className="mt-3 leading-8 text-slate-600">
      A programming language is a formal language with rules and
      syntax used to express instructions that a computer system can
      process. Different languages are designed with different
      goals, trade-offs, and areas of application.
    </p>

    <p className="mt-3 leading-8 text-slate-600">
      For example, Java is commonly used in backend and enterprise
      software, C is used in systems programming, C++ is used in
      performance-sensitive applications, and Python is widely used
      in automation and data science.
    </p>

    <h4 className="mt-7 text-lg font-bold text-slate-900">
      1.5 Types of Programming Languages
    </h4>

    <div className="mt-4 space-y-4">
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
          alt="Electronic circuit board representing low-level computing"
          className="h-48 w-full object-cover"
          loading="lazy"
        />

        <div className="p-5">
          <h5 className="font-bold text-slate-900">
            1. Machine Language
          </h5>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Machine language consists of binary-encoded instructions
            that a processor can execute. The exact instruction
            encoding depends on the processor architecture.
          </p>

          <CodeBlock
            language="text"
            code={`Example of binary notation:
10110000 01100001`}
          />

          <p className="text-sm leading-7 text-slate-600">
            Binary sequences like this illustrate binary notation;
            they do not represent a universal instruction across
            all processors.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
          alt="Computer hardware used in low-level software development"
          className="h-48 w-full object-cover"
          loading="lazy"
        />

        <div className="p-5">
          <h5 className="font-bold text-slate-900">
            2. Assembly Language
          </h5>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Assembly language uses symbolic instructions called
            mnemonics. An assembler translates these instructions
            into machine code for a particular architecture.
          </p>

          <CodeBlock
            language="asm"
            code={`MOV AX, 5
ADD AX, 3`}
          />

          <p className="text-sm leading-7 text-slate-600">
            This is illustrative assembly syntax. Actual syntax and
            registers depend on the target processor and assembler.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
          alt="High-level programming code on a monitor"
          className="h-48 w-full object-cover"
          loading="lazy"
        />

        <div className="p-5">
          <h5 className="font-bold text-slate-900">
            3. High-Level Languages
          </h5>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            High-level languages provide abstractions that make
            programming easier to read, write, and maintain. They
            commonly require a compiler, interpreter, or runtime to
            execute their instructions.
          </p>

          <CodeBlock
            code={`int firstNumber = 10;
int secondNumber = 20;

int total = firstNumber + secondNumber;

System.out.println(total);`}
          />

          <Output>30</Output>
        </div>
      </div>
    </div>
  </div>

  {/* Section 1.6 */}
  <div className="mt-12">
    <h3 className="text-xl font-bold text-slate-900">
      1.6 Compiler, Interpreter, and Assembler
    </h3>

    <p className="mt-3 leading-8 text-slate-600">
      Programs must be translated or processed in a form that the
      target execution environment can use. Different languages and
      toolchains accomplish this in different ways.
    </p>

    <div className="mt-5 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-slate-200 p-5">
        <h4 className="font-bold text-slate-900">Compiler</h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Translates source code into another representation, such
          as machine code or Java bytecode.
        </p>
        <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm">
          Java source → Bytecode
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 p-5">
        <h4 className="font-bold text-slate-900">Interpreter</h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Executes program instructions through a runtime that
          interprets the relevant representation.
        </p>
        <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm">
          Instructions → Execution
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 p-5 sm:col-span-2">
        <h4 className="font-bold text-slate-900">Assembler</h4>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Translates assembly-language instructions into machine
          code for a target architecture.
        </p>
        <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm">
          Assembly source → Machine code
        </div>
      </div>
    </div>

    <InfoBox title="How Java fits in">
      The Java compiler, javac, translates Java source code into
      bytecode. The JVM loads and executes that bytecode using its
      runtime execution mechanisms.
    </InfoBox>
  </div>

  {/* Section 1.7 */}
  <div className="mt-12">
    <h3 className="text-xl font-bold text-slate-900">
      1.7 Why Is Programming Important?
    </h3>

    <p className="mt-3 leading-8 text-slate-600">
      Programming allows people to transform ideas into working
      software. It is useful not only for software engineers but
      also for researchers, analysts, designers, and professionals
      who automate repetitive tasks.
    </p>

    <div className="my-5 grid gap-4 sm:grid-cols-2">
      {[
        {
          title: "Problem solving",
          description:
            "Break complex problems into smaller, manageable steps.",
        },
        {
          title: "Automation",
          description:
            "Automate repetitive tasks and reduce manual effort.",
        },
        {
          title: "Data processing",
          description:
            "Analyze, transform, and organize large amounts of data.",
        },
        {
          title: "Application development",
          description:
            "Build websites, mobile applications, and desktop software.",
        },
        {
          title: "Artificial intelligence",
          description:
            "Develop software for machine learning and intelligent systems.",
        },
        {
          title: "Career opportunities",
          description:
            "Build skills relevant to software engineering and technical roles.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-slate-200 p-4"
        >
          <h4 className="font-bold text-slate-900">{item.title}</h4>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Section 1.8 */}
  <div className="mt-12">
    <h3 className="text-xl font-bold text-slate-900">
      1.8 Your First Programming Exercise
    </h3>

    <p className="mt-3 leading-8 text-slate-600">
      Before moving to the next lesson, understand the following
      program and identify its input, processing, and output.
    </p>

    <CodeBlock
      code={`public class StudentResult {
    public static void main(String[] args) {
        int marks1 = 80;
        int marks2 = 90;
        int marks3 = 70;

        int total = marks1 + marks2 + marks3;
        double average = total / 3.0;

        System.out.println("Total marks: " + total);
        System.out.println("Average marks: " + average);
    }
}`}
    />

    <Output>{`Total marks: 240\nAverage marks: 80.0`}</Output>

    <h4 className="mt-6 font-bold text-slate-900">
      Understand the program
    </h4>

    <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
      <li>
        <strong>Input:</strong> Three integer variables representing
        marks.
      </li>
      <li>
        <strong>Processing:</strong> Add the marks and calculate the
        average.
      </li>
      <li>
        <strong>Output:</strong> Print the total and average.
      </li>
    </ul>

    <InfoBox title="Try it yourself">
      Change the three marks and predict the output before running
      the program. Then write a program that calculates the total
      and average of five subjects.
    </InfoBox>
  </div>

  {/* Summary */}
  <div className="mt-12 rounded-2xl border border-orange-100 bg-orange-50/60 p-5 sm:p-7">
    <h3 className="text-xl font-bold text-slate-900">
      Lesson Summary
    </h3>

    <ul className="mt-4 space-y-3">
      {[
        "Programming means writing instructions for a computer.",
        "A program is a collection of instructions that performs a task.",
        "An algorithm describes the steps used to solve a problem.",
        "Pseudocode describes logic without requiring exact language syntax.",
        "Machine, assembly, and high-level languages represent different levels of abstraction.",
        "Compilers, interpreters, and assemblers process code in different ways.",
        "Java source code is compiled into bytecode that runs on a JVM.",
      ].map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
          <CheckCircle2
            size={17}
            className="mt-1 shrink-0 text-orange-600"
          />
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* Practice Questions */}
  <div className="mt-10 rounded-2xl border border-slate-200 p-5 sm:p-7">
    <h3 className="text-xl font-bold text-slate-900">
      Practice Questions
    </h3>

    <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
      <li>Define programming in your own words.</li>
      <li>What is the difference between a program and an algorithm?</li>
      <li>What are input, processing, and output?</li>
      <li>Explain machine language, assembly language, and high-level languages.</li>
      <li>What is the role of a compiler?</li>
      <li>Write an algorithm to calculate the area of a rectangle.</li>
      <li>Write a Java program to calculate the sum of two numbers.</li>
      <li>Explain how programming helps automate everyday tasks.</li>
    </ol>
  </div>
</section>

          {/* Lesson 2 */}
          <section id="java" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={2}
              title="What Is Java?"
              description="Java is a high-level, general-purpose, class-based programming language used to build many kinds of software."
            />

            <h3 className="text-lg font-bold">2.1 Introduction to Java</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Java was originally developed at Sun Microsystems. Oracle later
              acquired Sun Microsystems. Java is widely used in backend
              development, enterprise applications, and many other software
              systems.
            </p>

            <h3 className="mt-7 text-lg font-bold">2.2 A simple Java program</h3>
            <CodeBlock code={javaCode} />
            <Output>Hello, Java!</Output>

            <h3 className="mt-7 text-lg font-bold">2.3 Why is Java popular?</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
              <li>Object-oriented programming support.</li>
              <li>Strong static type checking.</li>
              <li>Automatic memory management.</li>
              <li>Rich standard libraries and tools.</li>
              <li>Multithreading and concurrency support.</li>
              <li>JVM-based portability and runtime optimizations.</li>
            </ul>

            <InfoBox>
              Java is a versatile language that can be used to build software
              ranging from small programs to large enterprise systems.
            </InfoBox>
          </section>

          {/* Lesson 3 */}
          <section id="history" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={3}
              title="History and Evolution of Java"
              description="Java evolved from an early 1990s project into a widely used programming platform."
            />

            <h3 className="text-lg font-bold">3.1 Origin of Java</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Java development began at Sun Microsystems in the early 1990s.
              James Gosling and his team worked on the project, which was
              initially called Oak. The language was later renamed Java and
              publicly introduced in 1995.
            </p>

            <h3 className="mt-7 text-lg font-bold">3.2 Important milestones</h3>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Year</th>
                    <th className="px-4 py-3 font-semibold">Milestone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["1991", "Green Project began."],
                    ["1995", "Java was publicly introduced."],
                    ["1996", "JDK 1.0 was released."],
                    ["2004", "Java 5 introduced generics and annotations."],
                    ["2014", "Java 8 introduced lambda expressions and Stream API."],
                    ["2017", "Java 9 introduced the module system."],
                    ["2018", "Java 11 LTS was released."],
                    ["2021", "Java 17 LTS was released."],
                    ["2023", "Java 21 LTS was released."],
                    ["2025", "Java 25 LTS was released."],
                  ].map(([year, event]) => (
                    <tr key={year} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-orange-700">
                        {year}
                      </td>
                      <td className="px-4 py-3 leading-6 text-slate-600">
                        {event}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <InfoBox>
              LTS means Long-Term Support. Available updates and support
              periods depend on the Java vendor and distribution.
            </InfoBox>
          </section>

          {/* Lesson 4 */}
          <section id="features" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={4}
              title="Features of Java"
              description="Java provides language and runtime features that make it useful for building maintainable software."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Simple", "Familiar syntax influenced by C and C++, with fewer low-level memory operations exposed directly."],
                ["Object-oriented", "Organize software around classes, objects, interfaces and composition."],
                ["Platform-independent bytecode", "Compile source code into bytecode that can run on compatible JVM implementations."],
                ["Secure", "Bytecode verification and runtime checks help support safer execution."],
                ["Robust", "Static type checking, exceptions and managed memory help catch and handle errors."],
                ["Multithreaded", "Support concurrent execution using threads and concurrency APIs."],
                ["Portable", "Standardized behavior helps programs work across compatible environments."],
                ["High performance", "JIT compilation can optimize frequently executed code."],
                ["Garbage collection", "The runtime can reclaim memory occupied by unreachable objects."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-bold">Example: Object-oriented Java</h3>
            <CodeBlock
              code={`class Student {
    String name = "Rahul";

    void display() {
        System.out.println(name);
    }
}`}
            />
            <Output>Rahul is the value displayed when display() is called on a Student object.</Output>
          </section>

          {/* Lesson 5 */}
          <section id="applications" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={5}
              title="Real-World Applications of Java"
              description="Java is used in a variety of production systems and software development environments."
            />

            <div className="space-y-4">
              {[
                {
                  title: "Banking and financial systems",
                  description:
                    "Transaction processing, account management, payment services and enterprise backend systems.",
                  tag: "Finance",
                },
                {
                  title: "Backend development",
                  description:
                    "REST APIs, authentication systems, database-driven applications and microservices.",
                  tag: "Web",
                },
                {
                  title: "Android development",
                  description:
                    "Android applications and parts of the Android ecosystem. Kotlin is also widely used for modern Android development.",
                  tag: "Mobile",
                },
                {
                  title: "Big data and distributed systems",
                  description:
                    "Java-based tools and ecosystems, including Hadoop-related technologies.",
                  tag: "Data",
                },
                {
                  title: "Desktop and enterprise software",
                  description:
                    "Internal business applications, management tools, developer tools and desktop utilities.",
                  tag: "Enterprise",
                },
                {
                  title: "Cloud and server applications",
                  description:
                    "Scalable backend services, messaging systems, APIs and distributed applications.",
                  tag: "Cloud",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-xl border border-slate-200 p-5 sm:flex-row sm:items-start"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    <Code2 size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <InfoBox title="Practice task">
              Choose one real-world application and explain how Java could be
              used to build part of that system.
            </InfoBox>
          </section>

          {/* Lesson 6 */}
          <section id="comparison" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={6}
              title="Java vs C vs C++ vs Python"
              description="Each programming language has different strengths. The right choice depends on the project and its requirements."
            />

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[650px] text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    {["Feature", "Java", "C", "C++", "Python"].map((head) => (
                      <th key={head} className="px-4 py-3 font-semibold text-slate-700">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Level", "High-level", "Low-level / middle-level classification varies", "High-level", "High-level"],
                    ["Execution", "JVM bytecode", "Usually native compilation", "Usually native compilation", "Commonly interpreted/runtime-based"],
                    ["Memory", "Automatic GC", "Mostly manual", "Manual and RAII/smart pointers", "Automatic memory management"],
                    ["Style", "Class-based OOP and more", "Procedural", "Multi-paradigm", "Multi-paradigm"],
                    ["Typing", "Static", "Static", "Static", "Dynamic by default"],
                    ["Common uses", "Enterprise and backend", "Systems and embedded", "Games and systems", "AI/ML and automation"],
                  ].map((row) => (
                    <tr key={row[0]} className="align-top hover:bg-slate-50">
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`px-4 py-3 leading-6 ${
                            i === 0
                              ? "font-semibold text-slate-900"
                              : "text-slate-600"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-7 text-lg font-bold">Which language should you choose?</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
              <li><strong>Java:</strong> OOP, enterprise software and backend systems.</li>
              <li><strong>C:</strong> Systems programming and low-level concepts.</li>
              <li><strong>C++:</strong> Games, systems and performance-critical software.</li>
              <li><strong>Python:</strong> AI/ML, data science and automation.</li>
            </ul>
          </section>

          {/* Lesson 7 */}
          <section id="javascript" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={7}
              title="Java vs JavaScript"
              description="Despite their similar names, Java and JavaScript are different programming languages with different runtimes and common uses."
            />

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[500px] text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Feature</th>
                    <th className="px-4 py-3">Java</th>
                    <th className="px-4 py-3">JavaScript</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Typing", "Statically typed", "Dynamically typed by default"],
                    ["Runtime", "JVM", "Browser engine or JavaScript runtime"],
                    ["Common uses", "Enterprise backend and applications", "Interactive websites and backend services"],
                    ["File extensions", ".java and .class", ".js and .mjs"],
                    ["Object model", "Classes and objects", "Prototype-based; also supports class syntax"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className="px-4 py-3 leading-6 text-slate-600">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-7 text-lg font-bold">Java example</h3>
            <CodeBlock
              code={`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java");
    }
}`}
            />

            <h3 className="mt-7 text-lg font-bold">JavaScript example</h3>
            <CodeBlock
              language="javascript"
              code={`console.log("Hello from JavaScript");`}
            />

            <InfoBox>
              JavaScript is not a shorter version of Java. Their syntax,
              execution environments and programming models differ.
            </InfoBox>
          </section>

          {/* Lesson 8 */}
          <section id="working" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={8}
              title="How Java Works"
              description="A Java program usually moves through compilation, bytecode generation, class loading and execution."
            />

            <div className="mx-auto max-w-2xl space-y-2">
              {[
                ["01", "Java source code", "HelloJava.java"],
                ["02", "Java compiler", "javac compiles the source"],
                ["03", "Bytecode", "HelloJava.class"],
                ["04", "Java Virtual Machine", "Loads, verifies and executes bytecode"],
                ["05", "Program output", "The requested task is performed"],
              ].map(([number, title, description], index) => (
                <div key={number}>
                  <div className="rounded-xl border border-slate-200 p-4 text-center">
                    <span className="text-xs font-bold text-orange-600">{number}</span>
                    <h3 className="mt-1 font-bold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{description}</p>
                  </div>
                  {index < 4 && (
                    <div className="flex justify-center py-1 text-orange-500">
                      <ChevronRight className="rotate-90" size={22} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h3 className="mt-7 text-lg font-bold">Compile and run</h3>
            <CodeBlock
              language="bash"
              code={`javac HelloJava.java
java HelloJava`}
            />

            <InfoBox>
              The JVM can use an interpreter and Just-In-Time (JIT) compilation
              to execute and optimize code. Compatible JVM implementations
              allow the same bytecode to run on different operating systems.
            </InfoBox>
          </section>

          {/* Lesson 9 */}
          <section id="jdk-jre-jvm" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={9}
              title="JDK vs JRE vs JVM"
              description="These three terms describe different parts of the Java development and runtime ecosystem."
            />

            <div className="space-y-4">
              {[
                {
                  name: "JVM",
                  full: "Java Virtual Machine",
                  description:
                    "Loads, verifies and executes bytecode. It also supports runtime services such as garbage collection.",
                },
                {
                  name: "JRE",
                  full: "Java Runtime Environment",
                  description:
                    "In traditional terminology, it includes the JVM and runtime libraries required to run Java applications.",
                },
                {
                  name: "JDK",
                  full: "Java Development Kit",
                  description:
                    "Provides development tools such as javac, the java launcher and other utilities, along with runtime components.",
                },
              ].map((item) => (
                <div key={item.name} className="rounded-xl border border-slate-200 p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 font-bold text-orange-700">
                      {item.name}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.full}</h3>
                      <p className="text-xs text-slate-500">{item.name}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-7 text-lg font-bold">Quick comparison</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Component</th>
                    <th className="px-4 py-3">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-3 font-semibold">JVM</td>
                    <td className="px-4 py-3">Execute bytecode</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">JRE</td>
                    <td className="px-4 py-3">Traditional runtime package</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">JDK</td>
                    <td className="px-4 py-3">Develop, compile and run Java programs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <InfoBox>
              For modern Java development, install a JDK. Separate JRE
              installers are not provided by every modern Java distribution.
            </InfoBox>
          </section>

          {/* Lesson 10 */}
          <section id="installation" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={10}
              title="Installing Java and Setting Up the Environment"
              description="Install a JDK so you can compile and run Java programs from your computer."
            />

            <div className="space-y-6">
              <div>
                <h3 className="font-bold">Step 1: Download a JDK</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Choose a supported LTS release from one of these official
                  sources.
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://www.oracle.com/java/technologies/downloads/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-700"
                  >
                    Oracle Java Downloads ↗
                  </a>
                  <a
                    href="https://adoptium.net/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-700"
                  >
                    Eclipse Temurin ↗
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold">Step 2: Install the JDK</h3>
                <ol className="mt-2 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-600">
                  <li>Download the installer for your operating system.</li>
                  <li>Open it and follow the installation instructions.</li>
                  <li>Complete the installation.</li>
                  <li>Open a new terminal or PowerShell window.</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold">Step 3: Verify installation</h3>
                <CodeBlock
                  language="bash"
                  code={`java -version
javac -version`}
                />
                <p className="text-sm leading-7 text-slate-600">
                  Both commands should display version information.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Step 4: Configure JAVA_HOME on Windows</h3>
                <ol className="mt-2 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-600">
                  <li>Search for Environment Variables in the Start menu.</li>
                  <li>Open the environment variables settings.</li>
                  <li>Set JAVA_HOME to your installed JDK directory.</li>
                  <li>Add the JDK bin directory to PATH if needed.</li>
                  <li>Open a new terminal and verify both commands again.</li>
                </ol>

                <CodeBlock
                  language="text"
                  code={`JAVA_HOME=C:\\Program Files\\Java\\jdk-25`}
                />
                <p className="text-sm leading-7 text-slate-600">
                  This is an example path. Use the actual directory on your
                  computer.
                </p>
              </div>
            </div>
          </section>

          {/* Lesson 11 */}
          <section id="ide" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={11}
              title="Installing and Configuring an IDE"
              description="An Integrated Development Environment combines code editing and development tools in one application."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: "IntelliJ IDEA",
                  description:
                    "Popular Java IDE with code completion, debugging and project tools.",
                  url: "https://www.jetbrains.com/idea/download/",
                },
                {
                  name: "Eclipse IDE",
                  description:
                    "Java development environment with debugging and plugin support.",
                  url: "https://eclipseide.org/",
                },
                {
                  name: "Visual Studio Code",
                  description:
                    "Lightweight editor with Java support through extensions.",
                  url: "https://code.visualstudio.com/",
                },
              ].map((ide) => (
                <div key={ide.name} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">{ide.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {ide.description}
                  </p>
                  <a
                    href={ide.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
                  >
                    Official download <ChevronRight size={15} />
                  </a>
                </div>
              ))}
            </div>

            <h3 className="mt-7 text-lg font-bold">Basic IDE setup</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-6 leading-7 text-slate-600">
              <li>Install the JDK.</li>
              <li>Download and install an IDE.</li>
              <li>Create a Java project.</li>
              <li>Select the installed JDK as the project SDK.</li>
              <li>Create a Java class and write your code.</li>
              <li>Use the Run button to execute the program.</li>
            </ol>
          </section>

          {/* Lesson 12 */}
          <section id="first-program" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={12}
              title="Your First Java Program"
              description="Write, compile and execute a simple Java program."
            />

            <h3 className="font-bold">Step 1: Create the file</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Create a file named <code className="rounded bg-slate-100 px-1.5 py-0.5">HelloJava.java</code>.
            </p>

            <h3 className="mt-6 font-bold">Step 2: Write the code</h3>
            <CodeBlock code={javaCode} />
            <Output>Hello, Java!</Output>

            <h3 className="mt-7 text-lg font-bold">Step 3: Understand the code</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Element</th>
                    <th className="px-4 py-3">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["public", "An access modifier."],
                    ["class", "Declares a class."],
                    ["HelloJava", "The class name."],
                    ["main()", "The traditional entry-point method."],
                    ["String[] args", "Receives command-line arguments."],
                    ["System.out.println()", "Prints text followed by a new line."],
                    ["{ }", "Define code blocks."],
                  ].map(([term, meaning]) => (
                    <tr key={term}>
                      <td className="px-4 py-3 font-mono text-orange-700">{term}</td>
                      <td className="px-4 py-3 text-slate-600">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-7 font-bold">Step 4: Run the program</h3>
            <CodeBlock
              language="bash"
              code={`javac HelloJava.java
java HelloJava`}
            />

            <h3 className="mt-7 font-bold">Step 5: Experiment</h3>
            <CodeBlock
              code={`System.out.println("Welcome to SYNARCH!");`}
            />
            <Output>Welcome to SYNARCH!</Output>

            <InfoBox title="Practice task">
              Write a program that prints your name, college and branch.
            </InfoBox>
          </section>

          {/* Lesson 13 */}
          <section id="compile-run" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={13}
              title="Compiling and Running Java Code"
              description="Learn how source code becomes bytecode and how to execute the resulting program."
            />

            <h3 className="font-bold">13.1 Compilation</h3>
            <p className="mt-2 leading-7 text-slate-600">
              The Java compiler checks source code and produces bytecode when
              compilation succeeds.
            </p>
            <CodeBlock language="bash" code={`javac HelloJava.java`} />

            <h3 className="mt-6 font-bold">13.2 Execution</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Use the Java launcher to start the compiled class.
            </p>
            <CodeBlock language="bash" code={`java HelloJava`} />

            <h3 className="mt-7 text-lg font-bold">13.3 Common errors</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[450px] text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Error</th>
                    <th className="px-4 py-3">Possible reason</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["javac is not recognized", "JDK or PATH configuration issue."],
                    ["File not found", "Terminal is in the wrong directory."],
                    ["Class not found", "Incorrect class name or classpath."],
                    ["';' expected", "A semicolon may be missing."],
                    ["Public class filename error", "Filename does not match the public class name."],
                  ].map(([error, reason]) => (
                    <tr key={error}>
                      <td className="px-4 py-3 font-medium text-slate-800">{error}</td>
                      <td className="px-4 py-3 leading-6 text-slate-600">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-7 font-bold">13.4 Source-file mode</h3>
            <p className="mt-2 leading-7 text-slate-600">
              Modern Java versions can also run a simple source file directly.
            </p>
            <CodeBlock language="bash" code={`java HelloJava.java`} />

            <InfoBox>
              For traditional compilation practice, use javac and java as
              separate commands. The java launcher normally takes the class
              name without the .class extension.
            </InfoBox>
          </section>

          {/* Lesson 14 */}
          <section id="main-method" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={14}
              title="Understanding the main() Method"
              description="The main method is the traditional entry point for a standalone Java application."
            />

            <CodeBlock
              code={`public static void main(String[] args) {
    System.out.println("Program started");
}`}
            />

            <div className="mt-5 space-y-3">
              {[
                ["public", "Makes the method accessible to the Java launcher."],
                ["static", "Allows the method to be called without creating an instance of the class."],
                ["void", "Indicates that the method returns no value."],
                ["main", "The recognized entry-point method name."],
                ["String[] args", "An array that receives command-line arguments."],
              ].map(([keyword, description]) => (
                <div key={keyword} className="flex gap-4 rounded-lg border border-slate-200 p-4">
                  <code className="min-w-32 text-sm font-semibold text-orange-700">
                    {keyword}
                  </code>
                  <p className="text-sm leading-6 text-slate-600">{description}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-bold">Example: Command-line arguments</h3>
            <CodeBlock
              code={`public class Main {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.out.println("Hello, " + args[0]);
        } else {
            System.out.println("Hello, student!");
        }
    }
}`}
            />

            <h3 className="mt-6 font-bold">Run the program</h3>
            <CodeBlock
              language="bash"
              code={`javac Main.java
java Main JavaStudent`}
            />
            <Output>Hello, JavaStudent</Output>

            <InfoBox>
              Always use the recognized entry-point signature when learning
              traditional Java application structure.
            </InfoBox>
          </section>

          {/* Lesson 15 */}
          <section id="comments" className="scroll-mt-24 border-b border-slate-200 py-10">
            <SectionHeading
              number={15}
              title="Java Comments and Coding Conventions"
              description="Comments explain code, while coding conventions help keep projects readable and consistent."
            />

            <h3 className="text-lg font-bold">15.1 Single-line comment</h3>
            <CodeBlock
              code={`// This is a single-line comment
int age = 21;`}
            />

            <h3 className="mt-7 text-lg font-bold">15.2 Multi-line comment</h3>
            <CodeBlock
              code={`/*
 This is a multi-line comment.
 It can span several lines.
*/
int marks = 90;`}
            />

            <h3 className="mt-7 text-lg font-bold">15.3 Documentation comment</h3>
            <CodeBlock
              code={`/**
 * Calculates the sum of two numbers.
 */
public int add(int a, int b) {
    return a + b;
}`}
            />
            <p className="text-sm leading-7 text-slate-600">
              Documentation comments can be used by Javadoc to generate API
              documentation.
            </p>

            <h3 className="mt-8 text-lg font-bold">15.4 Naming conventions</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Element</th>
                    <th className="px-4 py-3">Convention</th>
                    <th className="px-4 py-3">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Class", "PascalCase", "StudentDetails"],
                    ["Method", "lower camelCase", "calculateTotal()"],
                    ["Variable", "lower camelCase", "totalMarks"],
                    ["Constant", "UPPER_SNAKE_CASE", "MAX_SIZE"],
                    ["Package", "Usually lowercase", "com.synarch.java"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className="px-4 py-3 text-slate-600">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-8 font-bold">15.5 Good coding practices</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-slate-600">
              <li>Use meaningful names for variables and methods.</li>
              <li>Keep indentation and formatting consistent.</li>
              <li>Break complex logic into manageable methods.</li>
              <li>Avoid unnecessary comments.</li>
              <li>Match the public class name with its filename.</li>
              <li>Write readable code and handle errors appropriately.</li>
            </ul>

            <h3 className="mt-7 font-bold">Example: Clean Java code</h3>
            <CodeBlock
              code={`public class Student {
    private static final int MAX_MARKS = 100;

    public static void main(String[] args) {
        String studentName = "Aman";
        int marks = 85;

        System.out.println(studentName);
        System.out.println(marks + "/" + MAX_MARKS);
    }
}`}
            />
            <Output>{`Aman\n85/100`}</Output>
          </section>

          {/* Quiz */}
          <section id="quiz" className="scroll-mt-24 py-10">
            <SectionHeading
              number="Final"
              title="Module Assessment"
              description="Test your understanding of Java fundamentals before moving to the next module."
            />

            <div className="mb-6 rounded-xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Java Fundamentals Quiz</p>
              <p className="mt-1 text-sm text-slate-600">
                {Object.keys(answers).length} of {quiz.length} questions answered
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-orange-500 transition-all"
                  style={{
                    width: `${(Object.keys(answers).length / quiz.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="space-y-6">
              {quiz.map((question, index) => (
                <div
                  key={question.question}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <p className="font-semibold leading-6 text-slate-900">
                    <span className="mr-2 text-orange-600">{index + 1}.</span>
                    {question.question}
                  </p>

                  <div className="mt-4 space-y-2">
                    {question.options.map((option, optionIndex) => {
                      const selected = answers[index] === optionIndex;
                      const correct = question.answer === optionIndex;

                      let optionStyle =
                        "border-slate-200 hover:border-slate-300";

                      if (selected) {
                        optionStyle = "border-orange-500 bg-orange-50";
                      }

                      if (submitted && correct) {
                        optionStyle = "border-emerald-500 bg-emerald-50";
                      } else if (submitted && selected && !correct) {
                        optionStyle = "border-red-400 bg-red-50";
                      }

                      return (
                        <button
                          key={option}
                          disabled={submitted}
                          onClick={() =>
                            setAnswers((old) => ({
                              ...old,
                              [index]: optionIndex,
                            }))
                          }
                          className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition ${optionStyle}`}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span className="flex-1 leading-6">{option}</span>

                          {submitted && correct && (
                            <CheckCircle2
                              className="shrink-0 text-emerald-600"
                              size={17}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {question.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="mt-6 rounded-xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">Your final score</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {score}/{quiz.length}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {score === quiz.length
                    ? "Excellent! You answered every question correctly."
                    : "Review the explanations and try again to improve your score."}
                </p>

                <button
                  onClick={() => {
                    setAnswers({});
                    setSubmitted(false);
                  }}
                  className="mt-4 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold hover:bg-slate-50"
                >
                  Try again
                </button>
              </div>
            ) : (
              <button
                disabled={Object.keys(answers).length !== quiz.length}
                onClick={() => setSubmitted(true)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Submit answers <ChevronRight size={18} />
              </button>
            )}
          </section>

          {/* Assignments */}
          <section className="mb-10 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              Practice
            </span>
            <h2 className="mt-3 text-2xl font-bold">Module Assignments</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Complete these practical tasks to strengthen your understanding
              of the fundamentals.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Write a Java program that prints your introduction.",
                "Create a program that calculates sum, difference and product.",
                "Explain the keywords in main() using comments.",
                "Install the JDK and run java -version and javac -version.",
                "Write five differences between Java and JavaScript.",
              ].map((task, index) => (
                <Assignment key={task} number={index + 1} task={task} />
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="font-semibold">Module completion criteria</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                You should be able to configure a Java environment, compile and
                run a basic program, and explain the roles of the JDK, JRE and
                JVM.
              </p>
            </div>
          </section>

          {/* Bottom navigation */}
          <div className="flex items-center justify-between gap-4 border-t border-slate-200 py-6">
            <button
              onClick={() => goToLesson("programming")}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              <ChevronLeft size={17} />
              Start of module
            </button>

            <button
              onClick={() => goToLesson("quiz")}
              className="flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700"
            >
              Take quiz <Play size={16} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function Assignment({ number, task }) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-4 transition hover:bg-white/5">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        className="mt-1 h-4 w-4 accent-orange-500"
      />
      <span
        className={`text-sm leading-6 ${
          checked ? "text-slate-500 line-through" : "text-slate-200"
        }`}
      >
        <span className="mr-2 font-semibold text-orange-400">
          {String(number).padStart(2, "0")}.
        </span>
        {task}
      </span>
    </label>
  );
}

export default JavaIntroduction;