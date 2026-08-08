import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              Accredian
            </h2>

            <p className="mt-4 text-gray-300">
              Empowering enterprises through world-class corporate learning
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Programs</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Contact
            </h3>

            <p className="text-gray-300">
              support@accredian.com
            </p>

            <p className="text-gray-300 mt-2">
              +91 98765 43210
            </p>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-3xl">
              <FaFacebook />
              <FaLinkedin />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 Accredian. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}