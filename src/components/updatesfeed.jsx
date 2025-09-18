import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function UpdatesFeed(){
  const [updates, setUpdates] = useState([])
  useEffect(()=>{
    axios.get('/api/updates')
      .then(r=>setUpdates(r.data || []))
      .catch(()=>setUpdates([]))
  },[])

  return (
    <div className="bg-white p-4 rounded shadow">
      {updates.length===0 ? <p>No updates yet.</p> : (
        <ul className="space-y-3">
          {updates.map(u=> (
            <li key={u.id} className="border p-3 rounded">
              <div className="text-sm text-gray-500">{new Date(u.timestamp).toLocaleString()}</div>
              <div className="font-medium">{u.title}</div>
              <div className="text-gray-700">{u.body}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
