"use client";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
  async function fetchStays() {
    try {
      const response = await fetch("http://localhost:5001/api/stays");

      if (!response.ok) {
        throw new Error("Failed to fetch stays");
      }

      const data = await response.json();
      console.log(data);

      setStays(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  fetchStays();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />

      <section className="grid md:grid-cols-2 gap-6 p-10">

      {loading && <h2>Loading stays...</h2>}

      {error && <h2>{error}</h2>}

      {!loading && !error &&
      stays.map((stay) => (
        <Card
        key={stay.id}
        title={stay.name}
        description={`${stay.location} • ₹${stay.price}/night`}
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        />
    ))
  }

      </section>

      <Footer />
    </>
  );
}