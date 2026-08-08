export default function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Professionals Trained",
    },
    {
      number: "200+",
      title: "Enterprise Clients",
    },
    {
      number: "5K+",
      title: "Hours of Learning Delivered",
    },
  ];

  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl p-8 text-center shadow hover:shadow-lg transition"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-700 font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}