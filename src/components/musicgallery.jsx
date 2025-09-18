import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function MusicGallery(){
  const [tracks, setTracks] = useState([])
  useEffect(()=>{
    axios.get('/api/media/music')
      .then(r=>setTracks(r.data||[]))
      .catch(()=>setTracks([]))
  },[])
  return (
    <div className="bg-white p-4 rounded shadow">
      {tracks.length===0 ? <p>No music yet.</p> : (
        <ul className="space-y-2">
          {tracks.map(t=> (
            <li key={t.id} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{t.title}</div>
                <div className="text-sm text-gray-600">{t.artist}</div>
              </div>
              <audio controls src={t.streamUrl}></audio>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
