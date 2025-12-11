export default function WhoWeAre() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Who <span className="text-yellow-500">We Are</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            HELP Ethiopia is a multidisciplinary non-profit organization committed to transforming lives across
            Ethiopia. We bring together healthcare professionals, educators, community leaders, and volunteers who share
            a common vision of a brighter future for Ethiopian communities.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Our team works tirelessly to address critical needs in healthcare access, quality education, leadership
            development, and sustainable economic opportunities. Through evidence-based programs and community
            partnerships, we create lasting change that empowers individuals and strengthens communities.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-600">10+</div>
              <div className="text-xs sm:text-sm text-gray-600">Years of Impact</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-600">50K+</div>
              <div className="text-xs sm:text-sm text-gray-600">Lives Touched</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96">
          <img
            src="/ethiopian-healthcare-workers-helping-community.jpg"
            alt="HELP Ethiopia team members working with community"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/30 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
