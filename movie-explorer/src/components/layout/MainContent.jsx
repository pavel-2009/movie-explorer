import { ContinueList } from '../continue/ContinueList'
import { Hero } from '../hero/Hero'
import { MovieList } from '../movie/MovieList'
import { continueWatching, movies } from '../../data/homePageContent'
import { useState } from 'react'

export const [currentPage, changePage] = useState("main")

export function MainContent() {
  return (
    <main className="main-content">
      <Hero />
      <MovieList movies={movies} />
      <ContinueList continueWatching={continueWatching} />
    </main>
  )
}
