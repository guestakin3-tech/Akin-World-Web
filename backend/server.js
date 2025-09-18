import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import axios from "axios"
import path from "path"
import { fileURLToPath } from "url"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// In-memory sample data
let updates = [
  {id: 1, title: "Welcome!", body: "Akin World Web is live 🎉", timestamp: Date.now()},
]
let movies = [
  {id: 1, title: "Liberian Dreams", year: 2023},
  {id: 2, title: "African Vibes", year: 2024},
]
let music = [
  {id: 1, title: "Peace & Unity", artist: "Akin Sokpah", streamUrl: "https://www.example.com/music1.mp3"},
]

// --- API Routes ---
app.get("/api/updates", (req,res)=> res.json(updates))
app.get("/api/media/movies", (req,res)=> res.json(movies))
app.get("/api/media/music", (req,res)=> res.json(music))

// AI Music Creator (mock integration with external API)
app.post("/api/ai-music/create", async (req,res)=>{
  const { prompt } = req.body
  try {
    const response = await axios.post(
      "https://api.example-ai-music.com/generate",
      { prompt },
      { headers: { "Authorization": `Bearer ${process.env.AI_MUSIC_API_KEY}` } }
    )

    res.json({ url: response.data.url || "https://www.example.com/generated-music.mp3" })
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: "AI music generation failed" })
  }
})

// --- Serve frontend build (React) ---
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, "../frontend/dist")))

// Fallback: send index.html for any non-API route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})

app.listen(PORT, ()=> {
  console.log(`✅ Akin World Web running at http://localhost:${PORT}`)
})
