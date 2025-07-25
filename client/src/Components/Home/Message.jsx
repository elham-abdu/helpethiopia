import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Message() {
  return (
    <div className="py-6 sm:py-10 px-6 md:px-12 lg:px-24 bg-gray-100 font-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto text-center"
      >
        <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-[#233875] mb-8 leading-tight">
          <span className="text-[#233875]]">Partner with Us</span> - Register
          your company as our donor or sponsor and make a lasting impact.
        </h2>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="inline-block"
        >
          <Link to="/register">
            <button className="px-8 py-3 text-xs sm:text-sm md:text-lg font-semibold bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#233875] rounded-lg cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl">
              Become a Partner
            </button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-[#233875] text-xs sm:text-sm md:text-sm"
        >
          Your support helps us continue our mission of transforming healthcare
          in Ethiopia.
        </motion.p>
      </motion.div>
    </div>
  );
}
