import { ContinueCard } from "./ContinueCard";

function ContinueList({ continueWatching }) {
    return (
        <section class="continue-watching" aria-labelledby="continue-title">
            <div class="section-title">
                <h2 class="section-title__text" id="continue-title">Продолжить просмотр</h2>
                <a class="section-title__link" href="#">
                    <span>Смотреть все</span>
                    <img src="https://api.iconify.design/lucide/chevron-right.svg?color=%23ef4444" alt="Смотреть все"/>
                </a>
            </div>
            <div class="continue-watching__list">
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