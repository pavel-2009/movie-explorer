import { Link } from 'react-router-dom'
import starIcon from '../../assets/icons/star.svg'

export function MovieCard({ title, rating, imageUrl, slug }) {
    return (
        <Link to={`/movie/${slug}`} className="movie-card__link">
            <article className="movie-card">
                <img src={imageUrl} alt={`Постер фильма ${title}`} className="movie-card__image"/>
                <div className="movie-card__rating"><img src={starIcon} alt="Рейтинг"/> {rating}</div>
                <h3 className="movie-card__title">{title}</h3>
            </article>
        </Link>
    )
}