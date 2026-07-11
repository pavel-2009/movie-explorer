import { MovieCard } from './MovieCard';

function MovieList({ movies }) {
    return (
        <section class="movie-list" aria-labelledby="popular-title">
                <div class="section-title">
                    <h2 class="section-title__text" id="popular-title">Популярное</h2>
                    <a class="section-title__link" href="#">
                        <span>Смотреть все</span>
                        <img src="https://api.iconify.design/lucide/chevron-right.svg?color=%23ef4444" alt="Смотреть все"/>
                    </a>
                </div>
                <div class="movie-list__items">
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