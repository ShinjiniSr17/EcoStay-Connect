"use client";

import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-emerald-700 dark:text-emerald-400">
        🌿 EcoStay Connect
      </h1>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 font-medium text-gray-700 dark:text-gray-200">

        <Link href="/" className="hover:text-emerald-600">
          Home
        </Link>

        <Link href="/about" className="hover:text-emerald-600">
          About
        </Link>

        <Link href="/dashboard" className="hover:text-emerald-600">
          Dashboard
        </Link>

        <Link href="/login" className="hover:text-emerald-600">
          Login
        </Link>

      </div>

      {/* Theme Toggle + Sign In */}
      <div className="flex items-center gap-4">

        <ThemeToggle />

        <Link
          href="/login"
          className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition"
        >
          Sign In
        </Link>

      </div>

    </nav>
  );
}