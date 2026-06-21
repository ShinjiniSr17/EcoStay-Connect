"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import toast from "react-hot-toast";

export default function Login() {
  const handleLogin = () => {
    toast.success("Login Successful!");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 px-4">

        <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-8">
            Welcome Back 🌿
          </h1>

          <div className="space-y-5">

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleLogin}
            >
              Login
            </Button>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}