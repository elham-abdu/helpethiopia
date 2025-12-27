import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialData = [
  {
    id: 1,
    message:
      "This platform has completely changed the way we deliver healthcare in rural Ethiopia. The impact has been incredible! We've seen a 40% increase in patient reach since partnering with HELP Ethiopia.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&auto=format&fit=crop&q=60",
    name: "Dr. Samuel Kebede",
    role: "Medical Director, Addis Ababa Hospital",
  },
  {
    id: 2,
    message:
      "HELP Ethiopia's training programs transformed our nursing staff's capabilities. Their approach to capacity building is exceptional. We've reduced medical errors by 35% after their intervention.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&auto=format&fit=crop&q=60",
    name: "Sister Alemitu Worku",
    role: "Head Nurse, Tikur Anbessa Hospital",
  },
  {
    id: 3,
    message:
      "As a donor, I'm consistently impressed by HELP Ethiopia's transparency and impact. Every dollar goes directly to those in need. Their mobile clinics have provided care to over 10,000 patients in remote areas.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=60",
    name: "Ato Yohannes Assefa",
    role: "Corporate Partner, Sunshine Foundation",
  },
  {
    id: 4,
    message:
      "The medical equipment donated by HELP Ethiopia saved countless lives in our community hospital. Their support extends beyond material aid - they provide comprehensive training and follow-up.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&auto=format&fit=crop&q=60",
    name: "Dr. Meseret Abebe",
    role: "Rural Health Coordinator, Oromia Region",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [direction, setDirection] = useState(1);
  const testimonialRef = useRef(null);

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
    setAutoPlay(false);
  };

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    setAutoPlay(false);
  };

  const goToTestimonial = (idx) => {
    setDirection(idx > index ? 1 : -1);
    setIndex(idx);
    setAutoPlay(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 font-text">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto sm:px-12 md:px-0 leading-relaxed">
            Hear from our partners, volunteers, and beneficiaries about the
            impact of our work
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" ref={testimonialRef}>
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg w-full relative overflow-hidden">
            <div className="absolute top-8 left-8 text-[#FFDE59] opacity-10">
              <Quote className="w-24 h-24" />
            </div>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={testimonialData[index].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="flex justify-center mb-8">
                  <Quote className="text-[#233875] rotate-180 w-6 h-6 md:h-8 md:w-8" />
                </div>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl">
                  {testimonialData[index].message}
                </p>

                <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                    <img
                      src={testimonialData[index].image}
                      alt={testimonialData[index].name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 sm:border-3 md:border-4 border-[#FFDE59]"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#233875] text-white rounded-full p-2">
                      <Quote className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                      {testimonialData[index].name}
                    </h3>
                    <p className="text-[#233875] font-medium text-xs md:text-sm pt-2">
                      {testimonialData[index].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#233875] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#233875]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#233875] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#233875]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer" />
          </button>
        </div>

        <div className="flex justify-center mt-8 md:mt-10 space-x-1 md:space-x-3">
          {testimonialData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => goToTestimonial(idx)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === idx
                  ? "bg-[#233875] w-4 md:w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
