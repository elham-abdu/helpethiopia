import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUsers, FaHandsHelping, FaClinicMedical } from "react-icons/fa";

export default function Stats() {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#233875] to-[#1a2b5f] font-text">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-white mb-6">
            Our <span className="text-[#FFDE59]">Impact</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl sm:px-12 md:px-0  mx-auto leading-relaxed">
            Measuring success through tangible results that transform lives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Active Programs */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl text-center border border-white/10 hover:border-[#FFDE59]/30 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="p-2 sm:p-3 md:p-4 rounded-full bg-[#FFDE59] text-[#233875]">
                <FaClinicMedical className="w-5 h-5 sm:w-6 sm-h-6 md:h-8 md:w-8" />
              </div>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              <CountUp
                start={0}
                end={10}
                duration={3}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-medium text-white/90">
              Active Programs
            </p>
          </motion.div>

          {/* Volunteers */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl text-center border border-white/10 hover:border-[#FFDE59]/30 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="p-2 sm:p-3 md:p-4 rounded-full bg-[#FFDE59] text-[#233875]">
                <FaUsers className="w-5 h-5 sm:w-6 sm-h-6 md:h-8 md:w-8" />
              </div>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              <CountUp
                start={0}
                end={100}
                duration={3}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-medium text-white/90">
              Dedicated Volunteers
            </p>
          </motion.div>

          {/* Patients Helped */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl text-center border border-white/10 hover:border-[#FFDE59]/30 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="p-2 sm:p-3 md:p-4 rounded-full bg-[#FFDE59] text-[#233875]">
                <FaHandsHelping className="w-5 h-5 sm:w-6 sm-h-6 md:h-8 md:w-8" />
              </div>
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              <CountUp
                start={0}
                end={1000}
                duration={3}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-medium text-white/90">
              Patients Helped
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
