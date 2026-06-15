import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20 px-10 text-center">
        <h1 className="text-5xl font-bold text-emerald-700 mb-6">
          About EcoStay Connect 🌿
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          EcoStay Connect is a sustainable travel platform that helps
          travellers discover eco-friendly stays including cabins,
          cottages, homestays and nature retreats.
        </p>
      </main>

      <Footer />
    </>
  );
}