function MovieCard({ title, rating, imageUrl }) {
    return (
        <article class="movie-card">
            <img src={imageUrl} alt={`Постер фильма ${title}`} class="movie-card__image"/>
            <div class="movie-card__rating"><img src="https://api.iconify.design/solar/star-bold.svg?color=%23f89e0b" alt="Рейтинг"/> {rating}</div>
            <h3 class="movie-card__title">{title}</h3>
        </article>
    )
}