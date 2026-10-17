
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "cloud", label: "Cloud Computing" },
  { id: "devops", label: "DevOps" },
  { id: "cs", label: "Computer Science" },
  { id: "career", label: "Career Preparation" },
];

const topics = {
  cybersecurity: [
    ["Security Fundamentals", "Understand core security principles."],
    ["Networking Basics", "Learn essential networking concepts."],
    ["Linux Fundamentals", "Work with Linux systems."],
    ["Web Security", "Understand common web vulnerabilities."],
    ["Cryptography Basics", "Learn encryption fundamentals."],
    ["Security Monitoring", "Explore monitoring and defense."],
    ["Ethical Hacking Basics", "Study authorized security testing."],
    ["Digital Forensics", "Understand digital evidence."],
    ["Security Projects", "Practice in safe lab environments."],
  ],
  cloud: [
    ["Cloud Fundamentals", "Understand cloud computing concepts."],
    ["AWS Basics", "Explore core AWS services."],
    ["Microsoft Azure", "Learn Azure cloud concepts."],
    ["Google Cloud", "Explore Google Cloud services."],
    ["Cloud Storage", "Understand cloud storage solutions."],
    ["Cloud Networking", "Learn cloud network fundamentals."],
    ["Serverless Computing", "Explore serverless architectures."],
    ["Cloud Deployment", "Deploy applications to the cloud."],
    ["Cloud Projects", "Build practical cloud solutions."],
  ],
  devops: [
    ["Linux & Shell", "Automate tasks using shell commands."],
    ["Git & GitHub", "Manage code and collaboration."],
    ["Docker", "Package apps in containers."],
    ["Kubernetes", "Understand container orchestration."],
    ["CI/CD", "Automate testing and deployments."],
    ["GitHub Actions", "Create automated workflows."],
    ["Infrastructure as Code", "Automate infrastructure configuration."],
    ["Monitoring", "Observe application health and performance."],
    ["DevOps Projects", "Practice deployment workflows."],
  ],
  cs: [
    ["Operating Systems", "Understand how operating systems work."],
    ["Computer Networks", "Learn networking concepts and protocols."],
    ["DBMS", "Master database fundamentals."],
    ["Computer Architecture", "Understand computer hardware organization."],
    ["Software Engineering", "Learn software development processes."],
    ["OOP Concepts", "Explore object-oriented design."],
    ["System Design Basics", "Understand scalable system architecture."],
    ["Distributed Systems", "Explore systems across multiple machines."],
    ["CS Fundamentals", "Strengthen core computer science knowledge."],
  ],
  career: [
    ["Data Structures & Algorithms", "Prepare for coding interviews."],
    ["Aptitude", "Practice quantitative and logical reasoning."],
    ["Resume Building", "Present your skills effectively."],
    ["LinkedIn Profile", "Build your professional presence."],
    ["GitHub Portfolio", "Showcase your projects."],
    ["Technical Interviews", "Practice technical interview questions."],
    ["Mock Interviews", "Prepare through realistic practice."],
    ["Internship Preparation", "Get ready to apply for internships."],
    ["Placement Roadmap", "Plan your placement preparation."],
  ],
};

export default function MoreDropdown() {
  const [activeCategory, setActiveCategory] = useState("cybersecurity");
  const activeTopics = topics[activeCategory] || [];

  return (
    <div className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-[#FAF9F7] shadow-xl">
      <div className="grid min-h-[390px] grid-cols-1 md:grid-cols-[250px_1fr]">
        <aside className="flex flex-col border-r border-gray-200 bg-[#EEEDEA] p-6">
          <p className="mb-5 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
            More Learning Paths
          </p>

          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onMouseEnter={() => setActiveCategory(category.id)}
                onFocus={() => setActiveCategory(category.id)}
                onClick={() => setActiveCategory(category.id)}
                className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm transition ${
                  activeCategory === category.id
                    ? "bg-white font-semibold text-[#F0440A] shadow-sm"
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
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F0440A]">
              Explore More
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {categories.find((item) => item.id === activeCategory)?.label}
              <span className="ml-2 text-gray-400">→</span>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Develop practical skills for technology and career growth.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
            {activeTopics.map(([title, description]) => (
              <a
                key={title}
                href={`/courses/${activeCategory}/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                className="group block"
              >
                <h4 className="text-sm font-medium text-gray-900 transition-colors group-hover:text-[#F0440A]">
                  {title}
                </h4>
                <p className="mt-1.5 max-w-xs text-xs leading-5 text-gray-500 sm:text-[13px]">
                  {description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
