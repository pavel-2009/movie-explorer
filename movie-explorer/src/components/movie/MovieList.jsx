import { MovieCard } from './MovieCard'
import chevronRightIcon from '../../assets/icons/chevron-right.svg'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function MovieList({ movies, favoriteSlugs, onToggleFavorite }) {
    const location = useLocation();

    const searchQuery = location.state?.searchQuery || '';

    useEffect(() => {
        if (searchQuery) {
            const filteredMovies = movies.filter((movie) =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredMovies(filteredMovies);
        } else {
            setFilteredMovies(movies);
        }
    }, [searchQuery, movies]);

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
                    {filteredMovies.map((movie) => (
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
            </section>
    )
}