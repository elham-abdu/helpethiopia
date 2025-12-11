const Mission = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 -mt-8 z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Mission Card */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
          <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-blue-300 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeWidth="16"/>
              <circle cx="128" cy="128" r="48" fill="none" stroke="currentColor" strokeWidth="16"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Empower communities in Ethiopia with quality healthcare, education, and sustainable development programs.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
          <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-indigo-300 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeWidth="16"/>
              <path d="M16 128s48-80 112-80 112 80 112 80-48 80-112 80-112-80-112-80z" fill="none" stroke="currentColor" strokeWidth="16"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            A healthier, more educated, and empowered Ethiopia where every individual can thrive.
          </p>
        </div>

        {/* Values Card */}
        <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
          <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-red-300 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128 224s-96-56-96-136a64 64 0 0 1 128 0 64 64 0 0 1 128 0c0 80-96 136-96 136z" fill="none" stroke="currentColor" strokeWidth="16"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Our Values</h3>
          <ul className="text-gray-700 text-sm sm:text-base list-disc list-inside space-y-1">
            <li>Integrity</li>
            <li>Compassion</li>
            <li>Collaboration</li>
            <li>Community Empowerment</li>
          </ul>
        </div>

        {/* Goals Card */}
        <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
          <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-teal-300 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M64 192v-64l32 32 32-32v64" fill="none" stroke="currentColor" strokeWidth="16"/>
              <path d="M128 160h64v64H64v-64h64z" fill="none" stroke="currentColor" strokeWidth="16"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Our Goals</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Partner with local organizations to create sustainable social and economic impact in communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
