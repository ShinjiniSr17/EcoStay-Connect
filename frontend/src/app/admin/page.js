"use client";


import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const API = "http://localhost:5001/api/stays";

export default function AdminPage() {
  const router = useRouter();
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null);

  // Fetch all stays
  async function fetchStays() {
    try {
      const res = await fetch(API);

      if (!res.ok) {
        throw new Error("Failed to fetch stays");
      }

      const data = await res.json();
      setStays(data);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    router.push("/login");
    return;
  }

  fetchStays();

}, [router]);

  // Handle form input
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Edit button
  function handleEdit(stay) {
    setEditingId(stay._id);

    setFormData({
      name: stay.name,
      location: stay.location,
      price: stay.price,
      rating: stay.rating,
      image: stay.image,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Cancel editing
  function handleCancel() {
    setEditingId(null);

    setFormData({
      name: "",
      location: "",
      price: "",
      rating: "",
      image: "",
    });
  }

  // Add / Update
  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      let response;

      if (editingId) {
        response = await fetch(`${API}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...formData,
            price: Number(formData.price),
            rating: Number(formData.rating),
          }),
        });
      } else {
        response = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...formData,
            price: Number(formData.price),
            rating: Number(formData.rating),
          }),
        });
      }

      if (!response.ok) {
        throw new Error("Operation failed");
      }

      alert(editingId ? "Stay Updated Successfully!" : "Stay Added Successfully!");

      handleCancel();

      fetchStays();

    } catch (err) {
      alert(err.message);
    }
  }

  // Delete Stay
  async function handleDelete(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this stay?"
    );
    const token = localStorage.getItem("token");

    if (!confirmDelete) return;

    try {
      const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
      Authorization: `Bearer ${token}`,
      },
    });

      if (!res.ok) {
        throw new Error("Failed to delete stay");
      }

      alert("Stay Deleted Successfully!");

      fetchStays();

    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-emerald-50">

      <h1 className="text-4xl font-bold text-center mb-10">
        EcoStay Admin Dashboard
      </h1>

      {/* FORM */}

      <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 transition duration-300 hover:shadow-2xl">

        <h2 className="text-2xl font-semibold mb-6">

          {editingId ? "Update Stay" : "Add New Stay"}

        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Stay Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-3"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded p-3"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border rounded p-3"
            required
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            className="border rounded p-3"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border rounded p-3 md:col-span-2"
            required
          />

          <button
            type="submit"
            className="bg-emerald-600 rounded-full hover:bg-emerald-700 transition text-white rounded py-3 md:col-span-2"
          >
            {editingId ? "Update Stay" : "Add Stay"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white rounded py-3 md:col-span-2"
            >
              Cancel Edit
            </button>
          )}

        </form>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-xl shadow-md p-6">

        <h2 className="text-2xl font-semibold mb-5">
          Existing Stays
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

        {loading ? (
          <p>Loading...</p>
        ) : stays.length === 0 ? (
          <p>No stays available.</p>
        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  {stays.map((stay) => (

    <div
      key={stay._id}
      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
    >

      <img
        src={stay.image}
        alt={stay.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-2">
          {stay.name}
        </h2>

        <p className="text-gray-600 mb-2">
          📍 {stay.location}
        </p>

        <p className="text-yellow-500 font-semibold mb-2">
          ⭐ {stay.rating}
        </p>

        <p className="text-emerald-700 font-bold text-xl mb-5">
          ₹{stay.price}/night
        </p>

        <div className="flex gap-3">

          <button
            onClick={() => handleEdit(stay)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full transition"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(stay._id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-full transition"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  ))}

</div>

        )}

      </div>

    </main>
    <Footer />
  </>
  );
}