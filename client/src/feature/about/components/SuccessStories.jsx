export default function SuccessStories() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-yellow-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Success <span className="text-yellow-500">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Real stories of hope, healing, and transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-yellow-400 to-blue-400 transform sm:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-0">
            {/* Story 1 */}
            <div className="relative flex items-start sm:items-center -mb-24 sm:-mb-28">
              <div className="absolute left-4 sm:left-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg transform sm:-translate-x-1/2 z-10"></div>
              <div className="ml-16 sm:ml-0 sm:w-1/2 sm:pr-12 sm:text-right">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 sm:border-l-0 sm:border-r-4 border-blue-600">
                  <img
                    src="/ethiopian-patient-smiling-after-receiving-healthca.jpg"
                    alt="Patient success story"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Abebe's Journey to Health</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      After receiving treatment at our mobile clinic, Abebe recovered from a chronic illness and
                      returned to work, supporting his family once again.
                    </p>
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg">
                      Healthcare Program
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="relative flex items-start sm:items-center -mb-24 sm:-mb-28">
              <div className="absolute left-4 sm:left-1/2 w-5 h-5 bg-yellow-500 rounded-full border-4 border-white shadow-lg transform sm:-translate-x-1/2 z-10"></div>
              <div className="ml-16 sm:ml-0 sm:w-1/2 sm:pl-12 sm:ml-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-yellow-500">
                  <img
                    src="/ethiopian-young-woman-student-studying-with-books.jpg"
                    alt="Student success story"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Meron's Educational Dream</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Through our scholarship program, Meron completed her nursing degree and now serves her community
                      as a healthcare professional.
                    </p>
                    <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-lg">
                      Education Program
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3 */}
            <div className="relative flex items-start sm:items-center -mb-16">
              <div className="absolute left-4 sm:left-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg transform sm:-translate-x-1/2 z-10"></div>
              <div className="ml-16 sm:ml-0 sm:w-1/2 sm:pr-12 sm:text-right">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 sm:border-l-0 sm:border-r-4 border-blue-600">
                  <img
                    src="/ethiopian-family-smiling-together-happy.jpg"
                    alt="Family success story"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Tewodros' New Beginning</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Our vocational training helped Tewodros start his own business, providing stable income for his
                      family of six.
                    </p>
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-xs font-semibold rounded-lg">
                      Economic Empowerment
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
