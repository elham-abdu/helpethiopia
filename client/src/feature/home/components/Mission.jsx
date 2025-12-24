const Mission = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We are committed to improving lives across Ethiopia by providing
            food, education, healthcare, and emergency support to vulnerable
            communities.
          </p>
          <p className="text-gray-600">
            Through compassion, transparency, and action, we empower people to
            build a better future.
          </p>
        </div>

        {/* Highlight Box */}
        <div className="bg-yellow-100 border-l-8 border-yellow-400 p-8 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Why We Exist
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Fight hunger and poverty</li>
            <li>✔ Support education for children</li>
            <li>✔ Respond to emergencies fast</li>
            <li>✔ Build sustainable communities</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
