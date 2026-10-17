
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const pixelBlocks = [
  { col: 2, row: 0, color: "orange" },
  { col: 1, row: 1, color: "light" },
  { col: 3, row: 1, color: "orange" },
  { col: 0, row: 2, color: "orange" },
  { col: 2, row: 2, color: "orange" },
  { col: 4, row: 2, color: "light" },
  { col: 1, row: 3, color: "orange" },
  { col: 3, row: 3, color: "light" },
  { col: 2, row: 4, color: "orange" },
];

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-6 py-20 md:px-10 lg:grid-cols-2 lg:px-12 lg:py-24">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#F0440A]" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F0440A] sm:text-sm">
              Student-Driven Tech Community
            </span>
          </div>

          <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl">
            Build skills.
            <br />
            <span className="text-[#F0440A]">Create impact.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-gray-500 sm:text-lg">
            Learn technology, build real-world projects, and prepare for
            internships and placements with a community that moves forward
            together.
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#what-we-do"
              className="inline-flex items-center gap-3 rounded-full bg-[#F0440A] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#d83b08]"
            >
              Explore SYNARCH
              <ArrowRight size={18} />
            </a>

            <a
              href="https://your-website.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-black/50 pb-1 text-sm font-semibold text-black transition-colors hover:border-[#F0440A] hover:text-[#F0440A]"
            >
              Discover what we do
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-gray-100 pt-7">
            <div>
              <p className="text-lg font-bold text-black">Learn</p>
              <p className="mt-1 text-sm text-gray-500">
                Industry-ready skills
              </p>
            </div>

            <div>
              <p className="text-lg font-bold text-black">Build</p>
              <p className="mt-1 text-sm text-gray-500">
                Real-world projects
              </p>
            </div>

            <div>
              <p className="text-lg font-bold text-black">Grow</p>
              <p className="mt-1 text-sm text-gray-500">
                Career opportunities
              </p>
            </div>
          </div>
        </motion.div>

        {/* Animated Pixel Blocks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center"
        >
          {/* Background Circles */}
          <div className="absolute h-[85%] w-[85%] rounded-full border border-orange-100" />

          <div className="absolute h-[65%] w-[65%] rounded-full border border-orange-100" />

          {/* Pixel Grid */}
          <div className="relative grid grid-cols-5 gap-2 sm:gap-3">
            {pixelBlocks.map((block, index) => (
              <motion.span
                key={`${block.col}-${block.row}`}
                style={{
                  gridColumn: block.col + 1,
                  gridRow: block.row + 1,
                }}
                initial={{ opacity: 0.3, scale: 0.9 }}
                animate={{
                  opacity: [1, 0.25, 1],
                  scale: [1, 0.92, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 0.18,
                }}
                className={`h-12 w-12 rounded-xl sm:h-16 sm:w-16 ${
                  block.color === "light"
                    ? "bg-orange-100"
                    : "bg-[#F0440A]"
                }`}
              />
            ))}
          </div>

          {/* Floating Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-6 right-0 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl shadow-gray-100 sm:right-2"
          >
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
