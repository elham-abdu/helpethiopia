const Impact = () => {
  const stats = [
    {
      number: "50,000+",
      label: "Lives Impacted",
      description: "Individuals directly benefited from our programs",
    },
    {
      number: "120+",
      label: "Communities Served",
      description: "Villages and towns reached across Ethiopia",
    },
    {
      number: "5,000+",
      label: "Students Supported",
      description: "Children receiving education assistance",
    },
    {
      number: "30+",
      label: "Healthcare Facilities",
      description: "Clinics and health centers established",
    },
  ]

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Through dedication and community partnership, we continue to create measurable change across Ethiopia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-yellow-100"
            >
              <div className="text-4xl font-bold text-yellow-500 mb-2">{stat.number}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
          <div className="flex items-start gap-4">
            <svg className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sustainable Development Goals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our work aligns with the UN Sustainable Development Goals, focusing on health, education, clean water,
                and economic growth to create lasting positive change in Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
