import express from "express";
import cors from "cors";

const app = express();

// ✅ Allow requests from Lovable
app.use(cors({
  origin: [
    "https://lovable.app",
    "https://lovableproject.com",
    "https://id-preview--0b644b98-0ee6-40c7-a6ee-7f23f2606653.lovable.app",
    "https://0b644b98-0ee6-40c7-a6ee-7f23f2606653.lovableproject.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

// ✅ Health check route (Lovable checks this)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// ✅ Main route (for you to test manually)
app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
