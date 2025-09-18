import React from 'react'
import Header from './components/Header'
import UpdatesFeed from './components/UpdatesFeed'
import MoviesGallery from './components/MoviesGallery'
import MusicGallery from './components/MusicGallery'
import AIMusicCreator from './components/AIMusicCreator'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 max-w-6xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Minutes Updates</h2>
          <UpdatesFeed />
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Movies</h3>
            <MoviesGallery />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Music</h3>
            <MusicGallery />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">AI Music Creator (beta)</h2>
          <AIMusicCreator />
        </section>
      </main>
    </div>
  )
}
