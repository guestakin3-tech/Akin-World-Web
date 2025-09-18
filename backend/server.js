import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import axios from "axios"

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

// --- Routes ---
app.get("/", (req,res)=> res.send("Akin World Web Backend is running ✅"))

// Updates
app.get("/api/updates", (req,res)=> res.json(updates))

// Movies
app.get("/api/media/movies", (req,res)=> res.json(movies))

// Music
app.get("/api/media/music", (req,res)=> res.json(music))

// AI Music Creator (mock integration with external API)
app.post("/api/ai-music/create", async (req,res)=>{
  const { prompt } = req.body
  try {
    // Example: calling a third-party AI music API
    // Replace this with a real service like Mubert, OpenAI Audio, etc.
    const response = await axios.post(
      "https://api.example-ai-music.com/generate",
      { prompt },
      { headers: { "Authorization": `Bearer ${process.env.AI_MUSIC_API_KEY}` } }
    )

    // Assume the API returns a URL
    res.json({ url: response.data.url || "https://www.example.com/generated-music.mp3" })
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ error: "AI music generation failed" })
  }
})

app.listen(PORT, ()=> {
  console.log(`Backend running on http://localhost:${PORT}`)
})
