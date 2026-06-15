import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-50 to-teal-50">

        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
            Welcome Back 🌿
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-xl mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-xl mb-6"
          />

          <button className="w-full bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700">
            Login
          </button>

        </div>

      </main>

      <Footer />
    </>
  );
}