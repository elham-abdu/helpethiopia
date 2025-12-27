import university from "../../../assets/AAU logo.png";
import hospital from "../../../assets/TkurAnbesa logo.jpg";

const partners = [
  {
    src: university,
    alt: "Addis Ababa University Logo",
    name: "Addis Ababa University",
    description: "Academic partner providing research and training support",
    color: "blue",
  },
  {
    src: hospital,
    alt: "Tikur Anbesa Hospital Logo",
    name: "Tikur Anbesa Hospital",
    description: "Clinical partner for patient care and medical training",
    color: "gold",
  },
];

export default function Partner() {
  return (
    <div className="py-8 md:py-16 px-6 md:px-12 lg:px-24 bg-bg font-text">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkblue mb-2">
            Our Trusted Partners
          </h2>
          <p className="text-darkgray text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Collaborating with leading institutions to deliver exceptional
            healthcare services
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center max-w-3xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl border-2 ${
                partner.color === "gold"
                  ? "border-gold hover:border-gold/70"
                  : "border-blue hover:border-blue/70"
              } bg-white shadow-sm hover:shadow-md h-full cursor-pointer transition-all duration-300`}
            >
              <div className="h-18 md:h-30 flex items-center mb-4">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain px-4"
                />
              </div>
              <h3
                className={`text-base md:text-lg font-semibold text-${
                  partner.color === "gold" ? "gold" : "blue"
                } text-center mb-2`}
              >
                {partner.name}
              </h3>
              <p className="text-darkgray text-xs md:text-sm text-center">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
