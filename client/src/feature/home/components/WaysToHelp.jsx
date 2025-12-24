const WaysToHelp = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Ways You Can Help
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Donate", "Volunteer", "Spread Awareness"].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 rounded-xl hover:border-yellow-400 transition"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {item}
              </h3>
              <p className="text-gray-600">
                Your contribution makes real change happen.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToHelp;
