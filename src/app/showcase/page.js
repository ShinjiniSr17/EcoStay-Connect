"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Modal from "../../components/ui/Modal";
import Loader from "../../components/ui/Loader";

export default function Showcase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen p-10 bg-gray-50 dark:bg-gray-900 dark:text-white space-y-8">

      <h1 className="text-4xl font-bold text-emerald-700 dark:text-emerald-400">
        EcoStay Connect UI Components
      </h1>

      {/* Buttons */}
      <div className="space-x-4">
        <Button>
          Primary Button
        </Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>
      </div>

      {/* Input */}
      <Input
        label="Destination"
        placeholder="Search Eco Stays"
      />

      {/* Modal */}
      <Button
        onClick={() => setOpen(true)}
      >
        Open Modal
      </Button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Booking Confirmation"
      >
        <p className="mb-4">
          Confirm your eco stay booking?
        </p>
      </Modal>

      {/* Toast */}
      <Button
        onClick={() =>
          toast.success("Booking Successful!")
        }
      >
        Show Toast
      </Button>

      {/* Loader */}
      <div>
        <p className="mb-2 font-semibold">
          Loader Component
        </p>

        <Loader />
      </div>

    </div>
  );
}