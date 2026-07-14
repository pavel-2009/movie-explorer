import { MovieCard } from './MovieCard'
import chevronRightIcon from '../../assets/icons/chevron-right.svg'

export function MovieList({ movies }) {
    return (
        <section className="movie-list" aria-labelledby="popular-title">
                <div className="section-title">
                    <h2 className="section-title__text" id="popular-title">Популярное</h2>
                    <a className="section-title__link" href="#">
                        <span>Смотреть все</span>
                        <img src={chevronRightIcon} alt="Смотреть все"/>
                    </a>
                </div>
                <div className="movie-list__items">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.slug}
                            title={movie.title}
                            rating={movie.rating}
                            imageUrl={movie.imageUrl}
                            slug={movie.slug}
                        />
                    ))}
                </div>
            </section>
    )
}