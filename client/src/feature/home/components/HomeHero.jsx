import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/ethiopia1.jpg",
    title: "Together We Can Change Lives",
    subtitle: "Supporting vulnerable communities across Ethiopia",
  },
  {
    image: "/images/ethiopia2.jpg",
    title: "Hope Starts With Action",
    subtitle: "Your help provides food, shelter, and education",
  },
  {
    image: "/images/ethiopia3.jpg",
    title: "Stand With Ethiopia",
    subtitle: "Be the reason someone smiles today",
  },
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200">
            {slides[current].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition">
              Donate Now
            </button>
            <button className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
