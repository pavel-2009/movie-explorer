import { MovieCard } from './MovieCard';

export function MovieList({ movies }) {
    return (
        <section className="movie-list" aria-labelledby="popular-title">
                <div className="section-title">
                    <h2 className="section-title__text" id="popular-title">Популярное</h2>
                    <a className="section-title__link" href="#">
                        <span>Смотреть все</span>
                        <img src="https://api.iconify.design/lucide/chevron-right.svg?color=%23ef4444" alt="Смотреть все"/>
                    </a>
                </div>
                <div className="movie-list__items">
                    {movies.map((movie) => (
                        <MovieCard
                            title={movie.title}
                            rating={movie.rating}
                            imageUrl={movie.imageUrl}
                        />
                    ))}
                </div>
            </section>
    )
}