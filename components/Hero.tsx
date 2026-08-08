"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#eef5ff] pt-36 pb-20 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Corporate Learning Solutions
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-4">
            Solutions for Your{" "}
            <span className="text-blue-600">
              Enterprise
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Empower your workforce with industry-relevant learning
            programs designed to improve productivity and business
            growth.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>Tailored Solutions</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>Industry Experts</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>Hands-on Learning</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>Certification</span>
            </div>

          </div>

          <div className="mt-10 flex gap-4 flex-wrap">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition">
              Enquire Now
            </button>

            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition">
              Learn More
            </button>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/images/Hero.jpeg"
            alt="Corporate Learning"
            width={550}
            height={450}
            className="rounded-xl"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}