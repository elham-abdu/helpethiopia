const news = [
  {
    title: "Emergency Food Aid Delivered",
    desc: "Hundreds of families received urgent food support in drought-hit areas.",
  },
  {
    title: "Back to School Program",
    desc: "Children returned to school with supplies and hope.",
  },
  {
    title: "Clean Water Initiative",
    desc: "New wells now provide clean water for rural communities.",
  },
];

const News = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
