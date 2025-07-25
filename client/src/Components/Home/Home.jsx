// Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#233875] to-[#1a2b5f] font-text">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#FFDE59] blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-[#FFDE59] blur-3xl"
      ></motion.div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-xs sm:text-sm md:text-base bg-[#FFDE59] text-[#233875] rounded-full font-semibold shadow-md">
              1000+ Patients Helped
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-6xl py-4 font-bold mb-16 leading-tight font-text"
          >
            <span className="text-[#FFDE59]">HELP Ethiopia</span>:{" "}
            <br className="hidden md:block" />
            Unlocking Potential, Building Healthcare!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-6 md:pt-2"
          >
            <Link
              to="/about-us"
              className="px-8 py-4 text-xs sm:text-sm md:text-lg bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#233875] font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Learn About Our Work
            </Link>
            <Link
              to="/donate"
              className="px-8 py-4 text-xs sm:text-sm md:text-lg bg-transparent border-1 md:border-2 border-[#FFDE59] hover:bg-[#FFDE59]/10 text-[#FFDE59] fot-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Support Our Mission
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce w-6 h-12 md:w-8 md:h-14 border-3 md:border-4 border-[#FFDE59] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 md:w-2 md:h-4 bg-[#FFDE59] mt-2 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
