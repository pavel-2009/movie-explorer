import { MovieCard } from './MovieCard'
import { movies } from '../../data/homePageContent'

export function CategoryPage({
  variant = 'films',
  eyebrow = 'Коллекция',
  title,
  description,
  favoriteSlugs,
  onToggleFavorite,
}) {
  return (
    <main className={`main-content category-page category-page--${variant}`}>
      <section className={`category-page__hero category-page__hero--${variant}`}>
        <span className="category-page__eyebrow">{eyebrow}</span>
        <h1 className="category-page__title">{title}</h1>
        <p className="category-page__description">{description}</p>
      </section>

      <section className="category-page__grid" aria-label={title}>
        {movies.map((movie, index) => (
          <article className={`category-page__tile category-page__tile--${variant}`} key={movie.slug}>
            <span className="category-page__index">{String(index + 1).padStart(2, '0')}</span>
            <MovieCard
              title={movie.title}
              rating={movie.rating}
              imageUrl={movie.imageUrl}
              slug={movie.slug}
              isFavorite={favoriteSlugs.includes(movie.slug)}
              onToggleFavorite={onToggleFavorite}
            />
            <div className="category-page__details">
              <span>{movie.genre}</span>
              <span>{movie.duration}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
