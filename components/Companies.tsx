export default function Companies() {
  const companies = [
    "Reliance",
    "HCL",
    "IBM",
    "CRIF",
    "Bayer",
    "ADP",
  ];

  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Trusted by Leading Enterprises
        </h2>

        <p className="mt-4 text-gray-600">
          Organizations across industries trust Accredian to upskill their workforce.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-lg transition"
            >
              <span className="text-xl font-semibold text-gray-700">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}