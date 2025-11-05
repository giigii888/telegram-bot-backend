import express from "express";
import cors from "cors";

const app = express();

// ✅ Allow Lovable domain
app.use(cors({
  origin: [
    "https://telegram-bot-frontend-l8ly.onrender.com",
    "https://lovable.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
