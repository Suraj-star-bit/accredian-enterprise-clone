"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What corporate training programs do you offer?",
      answer:
        "We offer customized learning programs in technology, management, data science, AI, cloud computing, cybersecurity, and leadership.",
    },
    {
      question: "Can the training be customized?",
      answer:
        "Yes. Every program is tailored according to your company's goals and employee skill levels.",
    },
    {
      question: "Is the training online or offline?",
      answer:
        "We provide online, offline, and hybrid learning models based on your requirements.",
    },
    {
      question: "Do employees receive certificates?",
      answer:
        "Yes. Learners receive industry-recognized certificates after successful completion.",
    },
  ];

  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Find answers to the most common questions.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl mb-4 overflow-hidden"
          >
            <button
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className="w-full flex justify-between items-center p-5 font-semibold text-left"
            >
              {faq.question}

              <span className="text-2xl">
                {active === index ? "-" : "+"}
              </span>
            </button>

            {active === index && (
              <div className="px-5 pb-5 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}