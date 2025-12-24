export default function Story() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-yellow-500">Story</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            A journey of compassion, dedication, and transformative impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* The Beginning Card */}
          <div className="group bg-white rounded-xl p-8 border-2 border-blue-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-5 shadow-md">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Beginning</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Founded by passionate Ethiopian diaspora professionals who recognized the critical need for comprehensive
              community development programs.
            </p>
          </div>

          {/* Growth Card */}
          <div className="group bg-white rounded-xl p-8 border-2 border-yellow-300 hover:border-yellow-400 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mb-5 shadow-md">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Growing Impact</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Expanded our reach to multiple regions across Ethiopia, establishing mobile health clinics and vocational
              training centers.
            </p>
          </div>

          {/* Today Card */}
          <div className="group bg-gradient-to-br from-blue-600 to-yellow-500 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1 ring-2 ring-blue-300">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 shadow-md">
              <svg
                className="w-7 h-7 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Today & Beyond</h3>
            <p className="text-base text-white leading-relaxed">
              We continue to innovate and expand our programs, leveraging technology and partnerships to create
              sustainable solutions for Ethiopian communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
