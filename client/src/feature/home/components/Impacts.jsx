const impacts = [
  { value: "50K+", label: "Lives Impacted" },
  { value: "120+", label: "Communities Supported" },
  { value: "300+", label: "Volunteers" },
  { value: "10+", label: "Years of Service" },
];

const Impacts = () => {
  return (
    <section className="bg-blue-900 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Our Impact So Far
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impacts.map((item, index) => (
            <div key={index} className="bg-blue-800 p-8 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impacts;
