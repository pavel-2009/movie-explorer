import { Link } from 'react-router-dom'
import { ContinueCard } from "./ContinueCard";
import chevronRightIcon from '../../assets/icons/chevron-right.svg'

export function ContinueList({ continueWatching }) {
    return (
        <section className="continue-watching" aria-labelledby="continue-title">
            <div className="section-title">
                <h2 className="section-title__text" id="continue-title">Продолжить просмотр</h2>
                <Link className="section-title__link" to="/continue">
                    <span>Смотреть все</span>
                    <img src={chevronRightIcon} alt="Смотреть все"/>
                </Link>
            </div>
            <div className="continue-watching__list">
                {continueWatching.map((item) => (
                    <ContinueCard
                        title={item.title}
                        progress={item.progress}
                        imageUrl={item.imageUrl}
                        watchedPercentage={item.watchedPercentage}
                    />
                ))}
            </div>
        </section>
    )
}