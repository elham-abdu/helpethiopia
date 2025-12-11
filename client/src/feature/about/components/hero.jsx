const Hero = () => {
  return (
    <section className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="../../../assets/aboutushero.jpg" // optimized image
        alt="HELP Ethiopia Charity Work"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Hero Content */}
      <div className="relative text-center px-4 sm:px-6 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-serif">
          About HELP Ethiopia
        </h1>
        <p className="mt-3 text-white text-base sm:text-lg md:text-xl font-light leading-relaxed">
          We are a multidisciplinary non-profit organization dedicated to empowering communities in Ethiopia
          through healthcare, education, leadership, and sustainable development.
        </p>
      </div>
    </section>
  );
};

export default Hero;
