import AAUImage from "../../../assets/AAU logo.png";
import TkurAnbesaImage from "../../../assets/TkurAnbesa logo.jpg";

const TrustedPartners = () => {
  const partners = [
    {
      name: "Addis Ababa University",
      description:
        "Collaborating on medical research, student exchange programs, and academic excellence in healthcare education",
      color: "blue",
    },
    {
      name: "Tikur Anbesa Hospital",
      description:
        "Partnering on specialized medical training, patient referrals, and advanced healthcare delivery systems",
      color: "yellow",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Our Trusted <span className="text-yellow-500">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Working together with leading organizations to amplify our impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-white border-2 ${
                partner.color === "blue"
                  ? "border-blue-300 hover:border-blue-500"
                  : "border-yellow-300 hover:border-yellow-400"
              } rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex justify-center mb-6">
                <img
                  src={index === 0 ? AAUImage : TkurAnbesaImage}
                  alt={`${partner.name} Logo`}
                  className="w-36 h-36 object-contain" // same larger size for both
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{partner.name}</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-600 text-base mb-5">Interested in partnering with us?</p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
