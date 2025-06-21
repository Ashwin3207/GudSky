const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => {
    console.error("❌ Failed to connect to MongoDB:", err.message);
  });

const carouselRoutes = require("./routes/carousel");
app.use("/api/carousel", carouselRoutes);

app.get('/health', (req, res) => res.status(200).send('OK'));
