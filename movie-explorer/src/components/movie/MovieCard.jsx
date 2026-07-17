import { Link } from 'react-router-dom'
import starIcon from '../../assets/icons/star.svg'
import starOutlineIcon from '../../assets/icons/star-outline.svg'

export function MovieCard({ title, rating, imageUrl, slug, isFavorite = false, onToggleFavorite }) {
    const handleFavoriteClick = (event) => {
        event.preventDefault()
        event.stopPropagation()
        onToggleFavorite(slug)
    }

    return (
        <article className="movie-card">
            <button
                type="button"
                className={`movie-card__favorite${isFavorite ? ' movie-card__favorite--active' : ''}`}
                aria-label={isFavorite ? `Убрать ${title} из любимых` : `Добавить ${title} в любимые`}
                onClick={handleFavoriteClick}
            >
                <img src={isFavorite ? starIcon : starOutlineIcon} alt="" />
            </button>
            <Link to={`/movie/${slug}`} className="movie-card__link">
                <img src={imageUrl} alt={`Постер фильма ${title}`} className="movie-card__image"/>
                <div className="movie-card__rating"><img src={starIcon} alt="Рейтинг"/> {rating}</div>
                <h3 className="movie-card__title">{title}</h3>
            </Link>
        </article>
    )
}