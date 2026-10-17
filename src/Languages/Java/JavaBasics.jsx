
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Terminal,
} from "lucide-react";

const lessons = [
  {
  title: "What is Java?",
  content: (
    <>
      <p>
        Java is a high-level, class-based, general-purpose programming
        language. It was developed by James Gosling and his team at
        Sun Microsystems and officially released in 1995.
      </p>

      <p>
        Java is widely used to develop backend applications, enterprise
        software, banking systems, Android applications, cloud services,
        and large-scale software systems. It is known for its
        object-oriented approach, platform independence, security
        features, and automatic memory management.
      </p>

      <h3>Why Learn Java?</h3>
      <ul>
        <li>Object-oriented programming</li>
        <li>Platform independence through the JVM</li>
        <li>Automatic memory management and garbage collection</li>
        <li>Strong type checking and exception handling</li>
        <li>Rich standard library and development ecosystem</li>
        <li>Widely used in backend and enterprise development</li>
        <li>Excellent language for learning DSA and problem-solving</li>
      </ul>

      <h3>Your First Java Program</h3>
      <pre><code>{`public class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`}</code></pre>

      <h3>Understanding the Code</h3>
      <ul>
        <li>
          <code>public class HelloJava</code> declares a class named
          HelloJava.
        </li>
        <li>
          <code>main()</code> is the standard entry point for launching
          this Java application.
        </li>
        <li>
          <code>System.out.println()</code> displays output in the
          console and moves to the next line.
        </li>
        <li>
          Java statements generally end with a semicolon (<code>;</code>).
        </li>
        <li>
          Java is case-sensitive, so <code>HelloJava</code> and
          <code>hellojava</code> are different identifiers.
        </li>
      </ul>

      <h3>How Java Works</h3>
      <p>
        Java source code is saved in a <code>.java</code> file.
        The Java compiler converts it into bytecode stored in
        <code>.class</code> files. The Java Virtual Machine (JVM)
        executes this bytecode on a compatible platform.
      </p>

      <pre><code>{`Source Code (.java)
        ↓
Java Compiler (javac)
        ↓
Bytecode (.class)
        ↓
Java Virtual Machine (JVM)
        ↓
Program Execution`}</code></pre>

      <h3>JDK, JRE, and JVM</h3>
      <ul>
        <li>
          <strong>JDK:</strong> Provides tools for developing,
          compiling, and running Java applications.
        </li>
        <li>
          <strong>JRE:</strong> Traditionally describes the runtime
          environment and libraries required to run Java applications.
        </li>
        <li>
          <strong>JVM:</strong> Loads and executes Java bytecode,
          manages memory, and supports garbage collection.
        </li>
      </ul>

      <h3>Key Features of Java</h3>
      <ul>
        <li>
          <strong>Object-oriented:</strong> Organizes programs using
          classes and objects.
        </li>
        <li>
          <strong>Platform-independent:</strong> Bytecode can run on
          compatible JVM implementations across different platforms.
        </li>
        <li>
          <strong>Statically typed:</strong> Types are checked during
          compilation, helping detect many errors early.
        </li>
        <li>
          <strong>Automatic memory management:</strong> Garbage
          collection reclaims memory from unreachable objects.
        </li>
        <li>
          <strong>Multithreaded:</strong> Supports concurrent
          execution using threads.
        </li>
        <li>
          <strong>Robust:</strong> Provides exception handling,
          type checking, and runtime checks.
        </li>
      </ul>

      <h3>Where Is Java Used?</h3>
      <ul>
        <li>Backend development with Spring Boot</li>
        <li>Enterprise and banking applications</li>
        <li>Android application development</li>
        <li>Cloud services and microservices</li>
        <li>Distributed systems and developer tools</li>
      </ul>

      <h3>Advantages of Java</h3>
      <ul>
        <li>Large community and ecosystem</li>
        <li>Extensive libraries and frameworks</li>
        <li>Automatic garbage collection</li>
        <li>Strong support for networking and concurrency</li>
        <li>Useful for DSA, competitive programming, and interviews</li>
      </ul>

      <h3>Java vs JavaScript</h3>
      <p>
        Java and JavaScript are different programming languages.
        Java is commonly used for backend services and enterprise
        applications, whereas JavaScript is widely used for interactive
        web interfaces and server-side development through Node.js.
      </p>

      <h3>Practice Exercise</h3>
      <p>
        Write a Java program that prints your name, age, and the
        programming language you are learning.
      </p>

      <pre><code>{`public class Practice {
    public static void main(String[] args) {
        String name = "Your Name";
        int age = 20;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Learning: Java");
    }
}`}</code></pre>

      <h3>Summary</h3>
      <p>
        Java is a versatile programming language built around
        object-oriented design, static typing, and JVM-based execution.
        Start with variables, data types, operators, conditions, loops,
        and methods before moving to object-oriented programming,
        collections, exception handling, and advanced Java concepts.
      </p>
    </>
  ),
  code: `public class HelloJava {
    public static void main(String[] args) {
        System.out.println("I am learning Java!");
    }
}`,
},
  {
    title: "JDK, JRE and JVM",
    content: (
      <>
        <p>
          These three terms describe important parts of the Java ecosystem.
        </p>
        <ul>
          <li><b>JDK:</b> Tools used to develop Java programs, including the compiler.</li>
          <li><b>JRE:</b> The traditional runtime environment for running Java applications.</li>
          <li><b>JVM:</b> Executes Java bytecode.</li>
        </ul>
        <p>
          Modern Java distributions may package runtime components differently,
          but the JVM remains central to the traditional Java execution model.
        </p>
      </>
    ),
    code: `Main.java → Java compiler → Main.class → JVM`,
  },
  {
    title: "Your First Java Program",
    content: (
      <>
        <p>
          A Java program can define a class and a main method as its entry
          point. The following example prints a message to the console.
        </p>
        <h3>Understand the code</h3>
        <ul>
          <li><b>class Main:</b> Declares a class named Main.</li>
          <li><b>main:</b> The conventional application entry point.</li>
          <li><b>println:</b> Prints text and moves to a new line.</li>
          <li><b>Semicolon:</b> Terminates the statement.</li>
        </ul>
      </>
    ),
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  },
  {
    title: "Variables and Data Types",
    content: (
      <>
        <p>
          A variable is a named storage location. Java uses declared types
          to determine what kind of value a variable can hold.
        </p>
        <h3>Common primitive types</h3>
        <ul>
          <li><b>int:</b> Whole numbers</li>
          <li><b>double:</b> Decimal numbers</li>
          <li><b>char:</b> A single UTF-16 code unit</li>
          <li><b>boolean:</b> true or false</li>
          <li><b>long:</b> Larger-range integer values</li>
          <li><b>float:</b> Single-precision floating-point values</li>
        </ul>
      </>
    ),
    code: `public class Main {
    public static void main(String[] args) {
        String name = "Rahul";
        int age = 20;
        double marks = 85.5;
        boolean learningJava = true;

        System.out.println(name);
        System.out.println(age);
        System.out.println(marks);
        System.out.println(learningJava);
    }
}`,
  },
  {
    title: "Operators",
    content: (
      <>
        <p>
          Operators perform calculations, comparisons and logical operations.
        </p>
        <ul>
          <li><b>Arithmetic:</b> +, -, *, /, %</li>
          <li><b>Comparison:</b> ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
          <li><b>Logical:</b> &amp;&amp;, ||, !</li>
          <li><b>Assignment:</b> =, +=, -=, *=</li>
        </ul>
      </>
    ),
    code: `int a = 10;
int b = 3;

System.out.println(a + b);  // 13
System.out.println(a - b);  // 7
System.out.println(a * b);  // 30
System.out.println(a / b);  // 3
System.out.println(a % b);  // 1`,
  },
  {
    title: "Conditions and Loops",
    content: (
      <>
        <p>
          Conditions let a program make decisions. Loops repeat a block
          of code while a condition or iteration rule permits it.
        </p>
        <ul>
          <li><b>if-else:</b> Executes code based on a condition.</li>
          <li><b>switch:</b> Selects between multiple cases.</li>
          <li><b>for:</b> Commonly used when iteration is controlled by a counter.</li>
          <li><b>while:</b> Repeats while a condition is true.</li>
        </ul>
      </>
    ),
    code: `int age = 20;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
  },
  {
    title: "Methods",
    content: (
      <>
        <p>
          A method groups reusable instructions. Methods can accept parameters
          and return a value to the caller.
        </p>
        <ul>
          <li><b>void:</b> Indicates no return value.</li>
          <li><b>Parameters:</b> Inputs declared in the method definition.</li>
          <li><b>return:</b> Returns a result from a method.</li>
        </ul>
      </>
    ),
    code: `public class Main {
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(10, 20);
        System.out.println(result); // 30
    }
}`,
  },
];

const questions = [
  {
    question: "Who executes Java bytecode?",
    options: ["JDK", "JVM", "Javadoc", "Java compiler"],
    answer: 1,
  },
  {
    question: "Which type stores true or false?",
    options: ["int", "char", "boolean", "double"],
    answer: 2,
  },
  {
    question: "What is the output of 10 / 3 using int values?",
    options: ["3.33", "3", "1", "An error"],
    answer: 1,
  },
];

export default function JavaBasics() {
  const [activeLesson, setActiveLesson] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const lesson = lessons[activeLesson];

  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#222]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white px-5 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            SYNARCH<span className="text-[#F0440A]">.</span>
          </Link>

          <Link
            to="/courses/java"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#F0440A]"
          >
            <ArrowLeft size={16} />
            Java Course
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-8 lg:grid-cols-[250px_1fr]">
        {/* Sticky Sidebar */}
        <aside className="sticky top-24 h-fit self-start rounded-xl border bg-white p-4">
          <div className="mb-4 flex items-center gap-2">
            <BookOpen size={19} className="text-[#F0440A]" />
            <h2 className="font-semibold">Java Basics</h2>
          </div>

          <p className="mb-4 text-xs text-gray-500">
            MODULE 01 · {lessons.length} LESSONS
          </p>

          <div className="space-y-1">
            {lessons.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveLesson(index)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                  activeLesson === index
                    ? "bg-orange-50 font-semibold text-[#F0440A]"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </button>
            ))}
          </div>
        </aside>

        {/* Lesson Content */}
        <div className="min-w-0">
          <div className="mb-6">
            <p className="text-sm font-medium text-[#F0440A]">
              JAVA PROGRAMMING / BASICS
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              {lesson.title}
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Lesson {activeLesson + 1} of {lessons.length}
            </p>
          </div>

          <article className="rounded-xl border bg-white p-5 leading-7 sm:p-8">
            <div className="space-y-4 text-gray-600 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-gray-900 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
              {lesson.content}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl bg-[#20201E] text-white">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-sm">
                <Terminal size={16} className="text-[#F0440A]" />
                Example.java
              </div>

              <pre className="overflow-x-auto p-5 text-sm leading-7 text-green-300">
                <code>{lesson.code}</code>
              </pre>
            </div>

            <div className="mt-6 flex justify-between gap-3 border-t pt-5">
              <button
                type="button"
                disabled={activeLesson === 0}
                onClick={() => setActiveLesson((n) => n - 1)}
                className="rounded-lg border px-4 py-2 text-sm disabled:opacity-40"
              >
                Previous
              </button>

              <button
                type="button"
                disabled={activeLesson === lessons.length - 1}
                onClick={() => setActiveLesson((n) => n + 1)}
                className="flex items-center gap-2 rounded-lg bg-[#F0440A] px-4 py-2 text-sm text-white disabled:opacity-40"
              >
                Next Lesson <ArrowRight size={16} />
              </button>
            </div>
          </article>

          {/* Quiz */}
          <section className="mt-8 rounded-xl border bg-white p-5 sm:p-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#F0440A]" size={23} />
              <h2 className="text-xl font-bold">Test Your Knowledge</h2>
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Answer these questions to check your Java fundamentals.
            </p>

            <div className="mt-6 space-y-6">
              {questions.map((item, index) => (
                <div key={item.question}>
                  <p className="font-medium">
                    {index + 1}. {item.question}
                  </p>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {item.options.map((option, optionIndex) => {
                      const correct =
                        submitted && optionIndex === item.answer;

                      const wrong =
                        submitted &&
                        answers[index] === optionIndex &&
                        optionIndex !== item.answer;

                      return (
                        <button
                          key={option}
                          type="button"
                          disabled={submitted}
                          onClick={() =>
                            setAnswers((current) => ({
                              ...current,
                              [index]: optionIndex,
                            }))
                          }
                          className={`rounded-lg border p-3 text-left text-sm ${
                            correct
                              ? "border-green-500 bg-green-50"
                              : wrong
                              ? "border-red-400 bg-red-50"
                              : answers[index] === optionIndex
                              ? "border-[#F0440A] bg-orange-50"
                              : "border-gray-200 hover:border-gray-400"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {!submitted ? (
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length !== questions.length}
                className="mt-6 rounded-lg bg-[#222220] px-5 py-3 text-sm font-medium text-white disabled:opacity-40"
              >
                Check Answers
              </button>
            ) : (
              <div className="mt-6">
                <p className="font-semibold">
                  Score:{" "}
                  {
                    questions.filter(
                      (question, index) =>
                        answers[index] === question.answer
                    ).length
                  }{" "}
                  / {questions.length}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setAnswers({});
                    setSubmitted(false);
                  }}
                  className="mt-3 text-sm font-medium text-[#F0440A]"
                >
                  Try Again
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
