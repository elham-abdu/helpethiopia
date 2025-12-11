export default function Hero() {
  return (
    <section className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/ethiopian-community-people-working-together-helpin.jpg"
        alt="HELP Ethiopia Charity Work"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg">
          About HELP Ethiopia
        </h1>
        <p className="mt-2 sm:mt-3 text-white text-sm sm:text-base md:text-lg font-light leading-relaxed drop-shadow-md">
          We are a multidisciplinary non-profit organization dedicated to empowering communities in Ethiopia through
          healthcare, education, leadership, and sustainable development.
        </p>
      </div>
    </section>
  )
}
