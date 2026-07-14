import playIcon from '../../assets/icons/play.svg'

export function ContinueCard({ title, progress, imageUrl, watchedPercentage }) {
    return (
        <article className="continue-card">
            <img src={imageUrl} alt={`Кадр из сериала ${title}`} className="continue-card__image"/>
            <button className="continue-card__play" aria-label={`Смотреть ${title}`}>
                <img src={playIcon} alt=""/>
            </button>
            <div className="continue-card__content">
                <h3>{title}</h3>
                <p>{progress}</p>
                <span className="continue-card__progress">
                    <span style={{ width: `${watchedPercentage}%` }}></span>
                </span>
            </div>
        </article>
    )
}