export default function ITServicesSection() {
  return (
    <section
      className="relative bg-black text-white py-7 md:py-16"
      style={{
        backgroundImage: "url('/whychoose2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center leading-snug">
          Our IT Support & IT Solutions Portfolio
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-orange-400 mx-auto mt-3 mb-4 sm:mb-14"></div>

        {/* Grid Section */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 sm:gap-10
          text-base sm:text-lg
        ">

          {/* Column 1 */}
          <div className="space-y-2 md:space-y-4">
            {[
              "IT Support Service",
              "Onsite IT Resource",
              "Managed Security",
              "Structured Cabling",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-orange-400 text-2xl leading-none">✔</span>
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className=" space-y-2 md:space-y-4">
            {[
              "Managed Website",
              "Server Support",
              "CCTV Systems",
              "Cloud Backup",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-400 text-2xl leading-none">✔</span>
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-2 md:space-y-4">
            {[
              "Video Conferencing",
              "PABX Systems",
              "Office IT Setups",
              "Biometric Systems",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-400 text-2xl leading-none">✔</span>
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
