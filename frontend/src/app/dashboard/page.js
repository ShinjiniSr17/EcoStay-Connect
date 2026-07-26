"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Loader from "../../components/ui/Loader";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [stays, setStays] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
  async function loadDashboard() {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      // Fetch logged-in user
      const userResponse = await fetch("http://localhost:5001/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!userResponse.ok) {
        throw new Error("Session expired. Please login again.");
      }

      const userData = await userResponse.json();
      setUser(userData);

      // Fetch stays
      const staysResponse = await fetch("http://localhost:5001/api/stays");

      if (!staysResponse.ok) {
        throw new Error("Unable to fetch stays.");
      }

      const staysData = await staysResponse.json();
      setStays(staysData);

    } catch (err) {
      setError(err.message);
      localStorage.removeItem("token");
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }

  loadDashboard();
}, [router]);


  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-10">

        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-emerald-400 text-center mb-3">
          Welcome Back 👋
        </h1>

         <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          {user?.email}
        </p>

        {loading ? (
          <Loader />
        ) : error ? (
          <div className="flex justify-center items-center py-20">
           <p className="text-red-600 text-lg">{error}</p>
          </div>
         ) : ( 
          <>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
  Manage your eco stays, explore destinations, and generate personalized AI travel plans.
</p>

            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
              "
            >

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
  <h2 className="text-xl font-semibold mb-2">
    Total Eco Stays
  </h2>

  <p className="text-4xl font-bold text-emerald-600">
    {stays.length}
  </p>
</div>
<div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
  <h2 className="text-xl font-semibold mb-2">
    Account
  </h2>

  <p>{user?.email}</p>
</div>
<div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
  <h2 className="text-xl font-semibold mb-2">
    AI Planner
  </h2>

  <p>Create personalized eco-friendly itineraries.</p>
</div>



              

            </div>

            <div className="mt-12">
  <h2 className="text-2xl font-bold mb-6">
    Recent Eco Stays
  </h2>

  {stays.length === 0 ? (
    <p>No stays available.</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stays.slice(0, 3).map((stay) => (
        <div
          key={stay._id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow p-5"
        >
          <img
            src={stay.image}
            alt={stay.name}
            className="w-full h-48 object-cover rounded-lg"
          />

          <h3 className="mt-4 text-xl font-semibold">
            {stay.name}
          </h3>

          <p className="text-gray-600">
            {stay.location}
          </p>

          <p className="text-emerald-600 font-bold mt-2">
            ₹{stay.price}/night
          </p>
        </div>
      ))}
    </div>
  )}
</div>

            <div className="flex justify-center mt-12">
              <Button
                onClick={() => setOpen(true)}
              >
                Book Eco Stay
              </Button>
            </div>

            <Modal
              isOpen={open}
              onClose={() => setOpen(false)}
              title="Booking Confirmation"
            >
              <p className="mb-4">
                Thank you for choosing EcoStay Connect!
              </p>
            </Modal>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}