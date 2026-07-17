import { ContinueList } from '../continue/ContinueList'
import { MovieCard } from '../movie/MovieCard'
import { continueWatching } from '../../data/homePageContent'

export function MyListPage({ favoriteMovies = [], favoriteSlugs = [], onToggleFavorite = () => {} }) {
  return (
    <main className="main-content">
      <ContinueList continueWatching={continueWatching} />

      <section className="movie-list" aria-labelledby="my-list-title">
        <div className="section-title">
          <h2 className="section-title__text" id="my-list-title">Мой список</h2>
        </div>

        {favoriteMovies.length > 0 ? (
          <div className="movie-list__items">
            {favoriteMovies.map((movie) => (
              <MovieCard
                key={movie.slug}
                title={movie.title}
                rating={movie.rating}
                imageUrl={movie.imageUrl}
                slug={movie.slug}
                isFavorite={favoriteSlugs.includes(movie.slug)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <p className="my-list__empty">Пока ничего не добавлено в список любимых.</p>
        )}
      </section>
    </main>
  )
}
