"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import Link from "next/link";
import toast from "react-hot-toast";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!email || !password) {
      toast.error("Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5001/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (data.message) {
          toast.error(data.message);
        } else if (data.errors) {
          toast.error(data.errors[0].msg);
        } else {
          toast.error("Registration failed.");
        }
        return;
      }

      toast.success("Account created successfully!");

      setTimeout(() => {
        router.push("/login");
      }, 1200);

    } catch (error) {
      console.error(error);
      toast.error("Server Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 px-4">

        <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-3">
            Create Account 🌿
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Join EcoStay Connect and explore sustainable travel.
          </p>

          <div className="space-y-5">

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>

          </div>

          <p className="text-center text-gray-500 mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-emerald-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </main>

      <Footer />
    </>
  );
}