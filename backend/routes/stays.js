console.log("📂 stays.js LOADED");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const Stay = require("../models/Stay");

// ===============================
// GET ALL STAYS
// GET /api/stays
// ===============================
router.get("/", async (req, res, next) => {
  console.log("🔥 USING MONGODB ROUTE");

  try {
    const stays = await Stay.find();

    console.log("MongoDB returned:", stays);

    res.status(200).json(stays);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// ===============================
// SEARCH STAYS
// GET /api/stays/search?q=manali
// ===============================
router.get("/search", async (req, res, next) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.status(400).json({
        message: "Query is required",
      });
    }

    const stays = await Stay.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { location: { $regex: q, $options: "i" } },
      ],
    });

    res.status(200).json(stays);
  } catch (err) {
    next(err);
  }
});

// ===============================
// GET STAY BY ID
// GET /api/stays/:id
// ===============================
router.get("/:id", async (req, res, next) => {
  try {
    const stay = await Stay.findById(req.params.id);

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.status(200).json(stay);
  } catch (err) {
    next(err);
  }
});

// ===============================
// CREATE STAY
// POST /api/stays
// ===============================
router.post("/", verifyToken, async (req, res, next) => {
  try {
    const { name, location, price, rating, image } = req.body;

    if (!name || !location || !price || !image) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const newStay = await Stay.create({
      name,
      location,
      price,
      rating,
      image,
    });

    res.status(201).json({
      message: "Stay created successfully",
      data: newStay,
    });
  } catch (err) {
    next(err);
  }
});

// ===============================
// UPDATE STAY
// PUT /api/stays/:id
// ===============================
router.put("/:id", verifyToken, async (req, res, next) => {
  try {
    const updatedStay = await Stay.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedStay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.status(200).json({
      message: "Stay updated successfully",
      data: updatedStay,
    });
  } catch (err) {
    next(err);
  }
});

// ===============================
// DELETE STAY
// DELETE /api/stays/:id
// ===============================
router.delete("/:id", verifyToken, async (req, res, next) => {
  try {
    const deletedStay = await Stay.findByIdAndDelete(req.params.id);

    if (!deletedStay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.status(200).json({
      message: "Stay deleted successfully",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;