
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "fundamentals", label: "AI Fundamentals" },
  { id: "ml", label: "Machine Learning" },
  { id: "dl", label: "Deep Learning" },
  { id: "genai", label: "Generative AI" },
  { id: "agents", label: "Agentic AI" },
  { id: "cv", label: "Computer Vision" },
  { id: "nlp", label: "NLP & Language Models" },
  { id: "rl", label: "Reinforcement Learning" },
  { id: "engineering", label: "AI Engineering & MLOps" },
  { id: "safety", label: "AI Safety & Security" },
];

const topics = {
  fundamentals: {
    heading: "AI Fundamentals",
    description: "Build a strong foundation in Artificial Intelligence.",
    items: [
      ["Introduction to AI", "introduction-to-ai"],
      ["History of AI", "history-of-ai"],
      ["Intelligent Agents", "intelligent-agents"],
      ["AI Search Algorithms", "ai-search-algorithms"],
      ["Knowledge Representation", "knowledge-representation"],
      ["Logic & Reasoning", "logic-reasoning"],
      ["Problem Solving in AI", "ai-problem-solving"],
      ["AI Mathematics", "ai-mathematics"],
      ["Probability for AI", "probability-for-ai"],
    ],
  },

  ml: {
    heading: "Machine Learning",
    description: "Learn how machines discover patterns and make predictions.",
    items: [
      ["ML Fundamentals", "ml-fundamentals"],
      ["Supervised Learning", "supervised-learning"],
      ["Unsupervised Learning", "unsupervised-learning"],
      ["Regression Algorithms", "regression"],
      ["Classification Algorithms", "classification"],
      ["Clustering Algorithms", "clustering"],
      ["Decision Trees & Random Forest", "decision-trees-random-forest"],
      ["Feature Engineering", "feature-engineering"],
      ["Model Evaluation", "model-evaluation"],
      ["Scikit-learn", "scikit-learn"],
      ["ML Projects", "ml-projects"],
    ],
  },

  dl: {
    heading: "Deep Learning",
    description: "Explore neural networks and modern deep learning architectures.",
    items: [
      ["Neural Networks", "neural-networks"],
      ["Backpropagation", "backpropagation"],
      ["TensorFlow", "tensorflow"],
      ["PyTorch", "pytorch"],
      ["Convolutional Neural Networks", "cnn"],
      ["Recurrent Neural Networks", "rnn"],
      ["Transformers Architecture", "transformers"],
      ["Attention Mechanism", "attention-mechanism"],
      ["Transfer Learning", "transfer-learning"],
      ["Deep Learning Projects", "deep-learning-projects"],
    ],
  },

  genai: {
    heading: "Generative AI",
    description: "Learn to build applications that generate text, images and code.",
    items: [
      ["Generative AI Fundamentals", "generative-ai-fundamentals"],
      ["Large Language Models (LLMs)", "llms"],
      ["Prompt Engineering", "prompt-engineering"],
      ["LLM APIs", "llm-apis"],
      ["Retrieval-Augmented Generation (RAG)", "rag"],
      ["Vector Databases", "vector-databases"],
      ["Embeddings & Semantic Search", "embeddings-semantic-search"],
      ["Fine-tuning LLMs", "llm-fine-tuning"],
      ["AI Image Generation", "ai-image-generation"],
      ["Local LLMs & Ollama", "local-llms"],
      ["Generative AI Projects", "generative-ai-projects"],
    ],
  },

  agents: {
    heading: "Agentic AI",
    description: "Build AI agents that use tools, memory and multi-step workflows.",
    items: [
      ["Introduction to AI Agents", "ai-agents"],
      ["Agent Architecture", "agent-architecture"],
      ["Tool Calling & Function Calling", "tool-calling"],
      ["Agent Memory & Context", "agent-memory"],
      ["Planning & Reasoning", "agent-planning"],
      ["Multi-Agent Systems", "multi-agent-systems"],
      ["AI Agent Frameworks", "agent-frameworks"],
      ["LangChain & LangGraph", "langchain-langgraph"],
      ["AI Workflows & Automation", "ai-workflows"],
      ["Agent Evaluation", "agent-evaluation"],
      ["Build AI Agents", "build-ai-agents"],
    ],
  },

  cv: {
    heading: "Computer Vision",
    description: "Teach machines to understand images and videos.",
    items: [
      ["Computer Vision Fundamentals", "cv-fundamentals"],
      ["Image Processing", "image-processing"],
      ["Image Classification", "image-classification"],
      ["Object Detection", "object-detection"],
      ["Image Segmentation", "image-segmentation"],
      ["OpenCV", "opencv"],
      ["YOLO Models", "yolo"],
      ["Face & Gesture Recognition", "face-gesture-recognition"],
      ["Video Understanding", "video-understanding"],
      ["Vision AI Projects", "vision-ai-projects"],
    ],
  },

  nlp: {
    heading: "NLP & Language Models",
    description: "Understand how computers process human language.",
    items: [
      ["NLP Fundamentals", "nlp-fundamentals"],
      ["Text Preprocessing", "text-preprocessing"],
      ["Tokenization", "tokenization"],
      ["Text Classification", "text-classification"],
      ["Sentiment Analysis", "sentiment-analysis"],
      ["Named Entity Recognition", "ner"],
      ["Word Embeddings", "word-embeddings"],
      ["Language Models", "language-models"],
      ["Speech Recognition", "speech-recognition"],
      ["NLP Projects", "nlp-projects"],
    ],
  },

  rl: {
    heading: "Reinforcement Learning",
    description: "Learn how AI improves through actions, rewards and feedback.",
    items: [
      ["RL Fundamentals", "rl-fundamentals"],
      ["Agents, States & Rewards", "agents-states-rewards"],
      ["Markov Decision Processes", "mdp"],
      ["Q-Learning", "q-learning"],
      ["Deep Q-Networks", "dqn"],
      ["Policy Gradient Methods", "policy-gradient"],
      ["Reward Design", "reward-design"],
      ["RL Environments", "rl-environments"],
      ["Robotics & RL", "robotics-rl"],
      ["RL Projects", "rl-projects"],
    ],
  },

  engineering: {
    heading: "AI Engineering & MLOps",
    description: "Deploy, monitor and scale reliable AI applications.",
    items: [
      ["AI Application Development", "ai-app-development"],
      ["Model Deployment", "model-deployment"],
      ["FastAPI for AI", "fastapi-ai"],
      ["AI APIs & Backend Integration", "ai-api-integration"],
      ["MLOps Fundamentals", "mlops"],
      ["Experiment Tracking", "experiment-tracking"],
      ["Model Monitoring", "model-monitoring"],
      ["Docker for AI", "docker-ai"],
      ["Cloud AI Deployment", "cloud-ai-deployment"],
      ["LLM Evaluation & Testing", "llm-evaluation"],
      ["AI Projects for Production", "production-ai-projects"],
    ],
  },

  safety: {
    heading: "AI Safety & Security",
    description: "Build AI systems that are safer, more reliable and responsible.",
    items: [
      ["Responsible AI", "responsible-ai"],
      ["AI Ethics & Fairness", "ai-ethics"],
      ["Bias & Explainability", "bias-explainability"],
      ["AI Privacy & Data Protection", "ai-privacy"],
      ["LLM Security", "llm-security"],
      ["Prompt Injection", "prompt-injection"],
      ["AI Guardrails", "ai-guardrails"],
      ["Hallucination & Reliability", "hallucination-reliability"],
      ["AI Evaluation & Red Teaming", "ai-red-teaming"],
    ],
  },
};

export default function AIMLDropdown() {
  const [activeCategory, setActiveCategory] = useState("fundamentals");

  const activeData = topics[activeCategory];

  return (
    <div
      className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-[#FAF9F7] shadow-xl"
      onMouseLeave={() => setActiveCategory("fundamentals")}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12">
        {/* LEFT CATEGORY SIDEBAR */}
        <aside className="col-span-4 bg-[#EEEDEA] px-5 py-7 md:col-span-3 md:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
            Artificial Intelligence
          </p>

          <div className="space-y-1">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group flex w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-left text-sm transition-all ${
                    isActive
                      ? "bg-white font-semibold text-[#F0440A] shadow-sm"
                      : "text-gray-700 hover:bg-white/70 hover:text-[#F0440A]"
                  }`}
                >
                  <span>{category.label}</span>

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
              Explore AI & ML
            </p>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              {activeData.heading}
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              {activeData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {activeData.items.map(([label, slug]) => (
              <a
                key={slug}
                href={`/courses/ai-ml/${slug}`}
                className="group flex min-h-12 items-center justify-between gap-3 border-b border-gray-200/70 py-3 text-sm text-gray-700 transition-colors hover:text-[#F0440A]"
              >
                <span>{label}</span>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-[#F0440A]"
                />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 rounded-xl bg-white p-5 sm:flex-row sm:items-center">
            <div>
              <h4 className="font-semibold text-gray-900">
                Start your AI journey
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                From fundamentals to production-ready AI projects.
              </p>
            </div>

            <a
              href="/courses/ai-ml"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F0440A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#D83B08]"
            >
              Explore All AI Courses
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
