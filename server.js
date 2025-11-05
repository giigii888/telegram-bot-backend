import cors from "cors";
import express from "express";

const app = express();

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
