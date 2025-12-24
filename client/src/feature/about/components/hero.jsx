import heroImage from "../../../assets/aboutUs_hero.jpg";


export default function Hero() {
  return (
    <section className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] flex items-start justify-center overflow-hidden">
      {/* Background Image */}
      <img
         src={heroImage}
        alt="HELP Ethiopia Community Support"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-yellow-700/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mt-6 sm:mt-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-2xl">
          <span className="text-yellow-400">About </span>
          <span className="text-blue-800 inline-block transition-transform duration-300 hover:scale-105">
            HELP Ethiopia
          </span>
        </h1>

        <p className="text-white/95 text-base sm:text-lg md:text-xl font-medium leading-relaxed drop-shadow-xl mb-3">
          A non-profit organization committed to strengthening communities in Ethiopia through
          healthcare, education, leadership, and sustainable development.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            className="
              px-8 py-3 
              bg-blue-700
              text-white
              font-bold 
              rounded-full 
              shadow-xl
              hover:bg-blue-600 hover:shadow-2xl hover:scale-105
              active:bg-white active:text-blue-800
              transition-all duration-300 
              text-lg
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
