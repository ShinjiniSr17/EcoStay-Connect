const express = require("express");
const router = express.Router();

let stays = require("../data/stays");

// ===============================
// GET ALL STAYS
// GET /api/stays
// ===============================
router.get("/", (req, res) => {
  res.status(200).json(stays);
});

// ===============================
// SEARCH STAYS
// GET /api/stays/search?q=manali
// ===============================
router.get("/search", (req, res) => {
  const q = req.query.q;

  if (!q) {
    return res.status(400).json({
      message: "Query is required"
    });
  }

  const result = stays.filter(
    (s) =>
      s.name.toLowerCase().includes(q.toLowerCase()) ||
      s.location.toLowerCase().includes(q.toLowerCase())
  );

  res.status(200).json(result);
});

// ===============================
// GET STAY BY ID
// GET /api/stays/1
// ===============================
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);

  const stay = stays.find((s) => s.id === id);

  if (!stay) {
    const error = new Error("Stay not found");
    error.status = 404;

    return next(error);
  }

  res.status(200).json(stay);
});

// ===============================
// CREATE STAY
// POST /api/stays
// ===============================
router.post("/", (req, res) => {
  const newStay = req.body;

  if (!newStay.name || !newStay.location || !newStay.price) {
    return res.status(400).json({
      message: "Missing fields"
    });
  }

  newStay.id = stays.length
    ? stays[stays.length - 1].id + 1
    : 1;

  stays.push(newStay);

  res.status(201).json({
    message: "Stay created successfully",
    data: newStay
  });
});

// ===============================
// UPDATE STAY
// PUT /api/stays/:id
// ===============================
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = stays.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Stay not found"
    });
  }

  stays[index] = {
    ...stays[index],
    ...req.body
  };

  res.status(200).json({
    message: "Stay updated successfully",
    data: stays[index]
  });
});

// ===============================
// DELETE STAY
// DELETE /api/stays/:id
// ===============================
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const initialLength = stays.length;

  stays = stays.filter((s) => s.id !== id);

  if (stays.length === initialLength) {
    return res.status(404).json({
      message: "Stay not found"
    });
  }

  res.status(200).json({
    message: "Stay deleted successfully"
  });
});

module.exports = router;