function ContinueCard({ title, progress, imageUrl, watchedPercentage }) {
    return (
        <article class="continue-card">
            <img src={imageUrl} alt={`Кадр из сериала ${title}`} class="continue-card__image"/>
            <button class="continue-card__play" aria-label={`Смотреть ${title}`}>
                <img src="https://api.iconify.design/solar/play-bold.svg?color=%23ffffff" alt=""/>
            </button>
            <div class="continue-card__content">
                <h3>{title}</h3>
                <p>{progress}</p>
                <span class="continue-card__progress">
                    <span style="width: {watchedPercentage}%"></span>
                </span>
            </div>
        </article>
    )
}