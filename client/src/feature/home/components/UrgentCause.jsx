const UrgentCauses = () => {
  return (
    <section className="bg-yellow-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Urgent Causes
          </h2>
          <p className="text-gray-700 mb-6">
            Millions need immediate help due to drought, conflict, and poverty.
            Your support can save lives today.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
            Support a Cause
          </button>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <ul className="space-y-4 text-gray-700">
            <li>🚨 Emergency Relief</li>
            <li>🍞 Hunger & Nutrition</li>
            <li>💧 Clean Water Access</li>
            <li>🎒 Education Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UrgentCauses;
