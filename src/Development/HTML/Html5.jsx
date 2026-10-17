
import { useState } from "react";
import { BookOpen, Code2, Copy, Check } from "lucide-react";
import HtmlNav from "./HtmlNav";
import Navbar from "../../Home/Navbar";

export default function Html5() {
  const [copied, setCopied] = useState(false);

  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to HTML.</p>
</body>
</html>`;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Unable to copy code:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] text-gray-900">
      <Navbar/>
      <HtmlNav/>
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F0440A]">
            <Code2 size={15} />
            Web Development / HTML
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learn HTML
            <span className="text-[#F0440A]">.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Learn the fundamentals of HTML and create your first web page.
            Start with the basics and build your understanding step by step.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-lg border border-gray-200 bg-[#FAF9F7] px-3 py-2 text-sm text-gray-600">
              Beginner Friendly
            </span>
            <span className="rounded-lg border border-gray-200 bg-[#FAF9F7] px-3 py-2 text-sm text-gray-600">
              Code Examples
            </span>
            <span className="rounded-lg border border-gray-200 bg-[#FAF9F7] px-3 py-2 text-sm text-gray-600">
              HTML5
            </span>
          </div>
        </div>
      </header>

     
      
    </div>
  );
}