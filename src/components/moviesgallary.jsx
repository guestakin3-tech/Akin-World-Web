import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function MoviesGallery(){
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    axios.get('/api/media/movies')
      .then(r=>setMovies(r.data||[]))
      .catch(()=>setMovies([]))
  },[])
  return (
    <div className="bg-white p-4 rounded shadow">
      {movies.length===0 ? <p>No movies yet.</p> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {movies.map(m=> (
            <div key={m.id} className="border rounded p-2">
              <div className="font-semibold">{m.title}</div>
              <div className="text-sm text-gray-600">{m.year}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
