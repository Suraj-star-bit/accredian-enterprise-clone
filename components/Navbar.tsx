"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
            A
          </div>

          <div>
            <h1 className="font-bold text-xl text-blue-700">
              Accredian
            </h1>

            <p className="text-xs text-gray-500">
              Enterprise
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-gray-700">
          <Link href="#home" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="#companies" className="hover:text-blue-600 transition">
            Programs
          </Link>

          <Link href="#benefits" className="hover:text-blue-600 transition">
            Enterprise
          </Link>

          <Link href="#testimonials" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link href="#contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Right Button */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Icon */}
        <button className="lg:hidden" aria-label="Open menu">
          <Menu size={30} />
        </button>

      </div>
    </nav>
  );
}