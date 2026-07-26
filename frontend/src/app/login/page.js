"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message);
      return;
    }

    localStorage.setItem("token", data.token);

    toast.success("Login Successful!");

    router.push("/dashboard");

  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
async function handleGoogleLogin() {
  await signIn("google", {
    callbackUrl: "/dashboard",
  });
}

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleLogin}
            >
              Login
            </Button>
            <button
  onClick={handleGoogleLogin}
  className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
>
  Sign in with Google
</button>
<p className="text-center text-gray-500 mt-8">
  Don't have an account?{" "}
  <Link
    href="/register"
    className="text-emerald-600 font-semibold hover:underline"
  >
    Create Account
  </Link>
</p>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}