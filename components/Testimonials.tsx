export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "TCS",
      text: "Accredian helped our employees improve their technical skills through structured learning programs.",
    },
    {
      name: "Priya Mehta",
      company: "Infosys",
      text: "The learning experience was excellent. The mentors were knowledgeable and the sessions were highly engaging.",
    },
    {
      name: "Ankit Verma",
      company: "IBM",
      text: "The customized corporate training program perfectly matched our team's requirements.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What Our Clients Say
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Hear from organizations that partnered with Accredian.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <p className="text-gray-600 italic">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <p className="text-blue-600">
                  {item.company}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}