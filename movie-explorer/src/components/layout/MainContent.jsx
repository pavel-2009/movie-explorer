import { ContinueList } from '../continue/ContinueList'
import { Hero } from '../hero/Hero'
import { MovieList } from '../movie/MovieList'
import { continueWatching, movies } from '../../data/homePageContent'

export function MainContent({ favoriteSlugs, onToggleFavorite }) {
  return (
    <main className="main-content">
      <Hero />
      <MovieList
        movies={movies}
        favoriteSlugs={favoriteSlugs}
        onToggleFavorite={onToggleFavorite}
      />
      <ContinueList continueWatching={continueWatching} />
    </main>
  )
}
