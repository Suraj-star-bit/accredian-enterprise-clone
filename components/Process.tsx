export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Skill Gap Analysis",
      description:
        "Understand your team's current skills and identify learning requirements.",
    },
    {
      step: "02",
      title: "Customized Learning Plan",
      description:
        "Create a personalized training roadmap aligned with business goals.",
    },
    {
      step: "03",
      title: "Training Delivery",
      description:
        "Conduct live sessions, self-paced learning, and practical workshops.",
    },
    {
      step: "04",
      title: "Assessment & Certification",
      description:
        "Evaluate learning outcomes and award industry-recognized certificates.",
    },
  ];

  return (
    <section className="py-20 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          How It Works
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          A simple and structured process to upskill your workforce.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                {step.step}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}