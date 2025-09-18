import React from 'react'
export default function Header(){
  return (
    <header className="bg-white shadow p-4 mb-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold">Akin World Web</h1>
          <p className="text-sm text-gray-600">
            Promotions • Entertainment • Minutes updates • Movies • Music
          </p>
        </div>
        <nav>
          <a href="#" className="mr-4">Home</a>
          <a href="#movies" className="mr-4">Movies</a>
          <a href="#music" className="mr-4">Music</a>
          <a href="#ai">AI Music</a>
        </nav>
      </div>
    </header>
  )
}
