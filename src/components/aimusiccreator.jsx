import React, {useState} from 'react'
import axios from 'axios'

export default function AIMusicCreator(){
  const [prompt, setPrompt] = useState('')
  const [status, setStatus] = useState('')
  const [resultUrl, setResultUrl] = useState(null)

  const handleCreate = async ()=>{
    setStatus('Generating...')
    try{
      const res = await axios.post('/api/ai-music/create', { prompt })
      setResultUrl(res.data.url)
      setStatus('Done')
    }catch(e){
      setStatus('Failed to generate')
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} className="w-full p-2 border rounded" rows={4} placeholder="Describe the song: mood, tempo, instruments, language..."></textarea>
      <div className="mt-3 flex gap-3">
        <button onClick={handleCreate} className="px-4 py-2 rounded bg-indigo-600 text-white">Generate Music</button>
        <div className="text-sm self-center">{status}</div>
      </div>

      {resultUrl && (
        <div className="mt-3">
          <div className="font-medium">Generated track</div>
          <audio controls src={resultUrl}></audio>
        </div>
      )}
    </div>
  )
}
