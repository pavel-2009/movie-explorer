export function MovieCard({ title, rating, imageUrl }) {
    return (
        <article className="movie-card">
            <img src={imageUrl} alt={`Постер фильма ${title}`} className="movie-card__image"/>
            <div className="movie-card__rating"><img src="https://api.iconify.design/solar/star-bold.svg?color=%23f89e0b" alt="Рейтинг"/> {rating}</div>
            <h3 className="movie-card__title">{title}</h3>
        </article>
    )
}