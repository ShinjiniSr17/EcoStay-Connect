"use client";

import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Loader from "../../components/ui/Loader";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-10">

        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-emerald-400 text-center mb-6">
          Dashboard
        </h1>

        {loading ? (
          <Loader />
        ) : (
          <>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              Future booking details, favourite stays and trip history
              will be displayed here.
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
                  My Bookings
                </h2>
                <p>
                  No bookings yet.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
                <h2 className="text-xl font-semibold mb-2">
                  Favourite Stays
                </h2>
                <p>
                  Save eco stays you love.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
                <h2 className="text-xl font-semibold mb-2">
                  Trip History
                </h2>
                <p>
                  Your previous trips will appear here.
                </p>
              </div>

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