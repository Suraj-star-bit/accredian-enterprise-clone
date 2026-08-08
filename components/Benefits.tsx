export default function Benefits() {
  const benefits = [
    {
      title: "Tailored Learning",
      description: "Training programs customized for your organization's goals.",
    },
    {
      title: "Industry Experts",
      description: "Learn directly from experienced professionals and mentors.",
    },
    {
      title: "Hands-on Projects",
      description: "Practical learning with real-world business scenarios.",
    },
    {
      title: "Flexible Delivery",
      description: "Online, offline, or hybrid training as per your needs.",
    },
    {
      title: "Performance Tracking",
      description: "Measure employee progress with detailed analytics.",
    },
    {
      title: "Certification",
      description: "Industry-recognized certificates after successful completion.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          The Accredian Edge
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Everything your enterprise needs to build a future-ready workforce.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                {index + 1}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}