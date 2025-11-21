export default function ITServicesSection() {
  return (
    <section
      className="relative bg-black text-white py-16"
      style={{
        backgroundImage: "url('/whychoose2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Our IT Support & IT Solutions Portfolio
        </h2>

        <div className="w-24 h-1 bg-white/50 mx-auto mt-4 mb-12"></div>

        {/* 3 Column Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-lg">
          
          {/* Column 1 */}
          <div className="space-y-4">
            {[
              "IT Support Service",
              "Onsite IT Resource",
              "Managed Security",
              "Structured Cabling",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-orange-400 text-2xl">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {[
              "Managed Website",
              "Server Support",
              "CCTV Systems",
              "Cloud Backup",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            {[
              "Video Conferencing",
              "PABX Systems",
              "Office IT Setups",
              "Biometric Systems",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
