export default function Mission() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 z-10 pb-14">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-2xl p-7 text-center border-2 border-blue-200 hover:shadow-xl transition-shadow duration-300">
          <div className="w-18 h-18 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
            🎯
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Empower communities in Ethiopia with accessible healthcare, quality education,
            and sustainable development programs.
          </p>
        </div>

        {/* Vision (Highlighted) */}
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl shadow-2xl p-8 text-center transform sm:-translate-y-6 hover:-translate-y-8 transition-all duration-300 ring-4 ring-yellow-300">
          <div className="w-18 h-18 mx-auto mb-4 flex items-center justify-center rounded-full bg-white text-yellow-600 shadow-xl">
            🌍
          </div>
          <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">Our Vision</h3>
          <p className="text-white leading-relaxed drop-shadow-md">
            A healthier, more educated, and empowered Ethiopia where every individual can thrive.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl shadow-2xl p-7 text-center border-2 border-blue-200 hover:shadow-xl transition-shadow duration-300">
          <div className="w-18 h-18 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
            ⭐
          </div>
          <h3 className="text-xl font-bold text-blue-700 mb-3">Our Values</h3>
          <ul className="text-gray-700 space-y-2 text-left inline-block">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
              Integrity
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
              Compassion
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
              Collaboration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
              Community Empowerment
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
