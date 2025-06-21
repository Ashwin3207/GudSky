const express = require("express");
const router = express.Router();
const CarouselImage = require("../models/CarouselImage");

// GET all images
router.get("/", async (req, res) => {
  const images = await CarouselImage.find();
  res.json(images);
});

// POST new image
router.post("/", async (req, res) => {
  const newImage = new CarouselImage({ url: req.body.url });
  await newImage.save();
  res.status(201).json(newImage);
});

// PUT update image
router.put("/:id", async (req, res) => {
  const updated = await CarouselImage.findByIdAndUpdate(
    req.params.id,
    { url: req.body.url },
    { new: true }
  );
  res.json(updated);
});

// DELETE image
router.delete("/:id", async (req, res) => {
  await CarouselImage.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
