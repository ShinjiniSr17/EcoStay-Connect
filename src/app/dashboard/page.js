import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-20 px-10 text-center">
        <h1 className="text-5xl font-bold text-emerald-700 mb-6">
          Dashboard 
        </h1>

        <p className="text-lg text-gray-600">
          Future booking details, favourite stays and trip history
          will be displayed here.
        </p>
      </main>

      <Footer />
    </>
  );
}