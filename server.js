import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Add this route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
