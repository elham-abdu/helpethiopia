import {
  FaHandHoldingHeart,
  FaShieldAlt,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <FaHandHoldingHeart className="text-[#233875] w-5 h-5 sm:w-6 sm:h-6 md:h-8 md:w-8" />
    ),
    title: "Ye'Eteye Charity",
    description:
      "Our charitable initiative has helped over 1000 patients who struggled to cover their medical bills, primarily from rural areas. We currently operate at Tikur Anbessa Specialised Hospital with recent expansion to Zewditu Memorial Hospital.",
    bgColor: "bg-[#233875]/5",
    borderColor: "border-[#233875]/20",
    hoverColor: "hover:bg-[#233875]/10",
  },
  {
    icon: (
      <FaShieldAlt className="text-[#2E7D32] w-5 h-5 sm:w-6 sm:h-6 md:h-8 md:w-8" />
    ),
    title: "Quality Improvement",
    description:
      "HELP Ethiopia demonstrates commitment to continuous improvement by implementing impactful programs focusing on streamlining healthcare processes, enriching data-driven decision-making, and optimizing patient experience.",
    bgColor: "bg-[#2E7D32]/5",
    borderColor: "border-[#2E7D32]/20",
    hoverColor: "hover:bg-[#2E7D32]/10",
  },
  {
    icon: (
      <FaGraduationCap className="text-[#6A1B9A] w-5 h-5 sm:w-6 sm:h-6 md:h-8 md:w-8" />
    ),
    title: "Education & Leadership",
    description:
      "We invest in the future by empowering the next generation of Ethiopians to become effective healthcare leaders through comprehensive training programs and mentorship initiatives.",
    bgColor: "bg-[#6A1B9A]/5",
    borderColor: "border-[#6A1B9A]/20",
    hoverColor: "hover:bg-[#6A1B9A]/10",
  },
];

const ServiceCard = ({
  icon,
  title,
  description,
  bgColor,
  borderColor,
  hoverColor,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        hover: { duration: 0.2 },
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`${bgColor} ${borderColor} ${hoverColor} rounded-2xl p-4 sm:p-6 md:p-8 font-text border shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col`}
    >
      <div className="flex justify-center">
        <div className="p-2 sm:p-3 md:p-4 rounded-full bg-white shadow-sm border border-gray-100">
          {icon}
        </div>
      </div>
      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mt-6 mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed flex-grow">
        {description}
      </p>
      <div className="mt-8 text-center">
        <button className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-md text-[#233875] hover:text-[#1a2b5f] transition-colors duration-200 cursor-pointer group">
          Learn more
          <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1 w-2 h-2 sm:w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
};

export default function Service() {
  return (
    <div className="pt-3 pb-8 sm:pt-6 sm:pb-16 px-6 md:px-12 lg:px-24 bg-gray-100 font-text">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl sm:px-12 md:px-0 mx-auto leading-relaxed">
            Delivering comprehensive healthcare solutions through focused
            initiatives that make a lasting impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
