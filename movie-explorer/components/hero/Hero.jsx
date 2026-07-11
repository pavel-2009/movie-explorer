function Hero() {
    return (
        <section class="premier" aria-labelledby="premier-title">
                <article class="premier__item">
                    <img src="https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg" alt="Постер фильма Дюна: Часть вторая" class="premier__item-image"/>
                    <div class="premier__item-overlay"></div>
                    <div class="premier__item__info">
                        <p class="premier__item-premier">ПРЕМЬЕРА</p>
                        <h1 class="premier__item-title" id="premier-title">Дюна 2</h1>
                        <p class="premier__item-description">Пол Атрейдес объединяется с фрименами, чтобы отомстить заговорщикам и принять судьбу, от которой зависит будущее целой вселенной.</p>
                        <div class="premier__item-info">
                            <div class="premier__item-info__rating info-item">
                                <img class="premier__item-info__rating-icon" src="https://api.iconify.design/solar/star-bold.svg?color=%23f89e0b" alt="Рейтинг"/>
                                <span class="premier__item-info__rating-text">8.7</span>
                            </div>
                            <span class="info-item">2024</span>
                            <span class="info-item">2ч 46м</span>
                            <span class="info-item last added">Фантастика, боевик</span>
                        </div>
                        <div class="premier__item-buttons">
                            <a class="premier__item-watch" href="#">
                                <img class="premier__item-watch-icon" src="https://api.iconify.design/solar/play-bold.svg?color=%23ffffff" alt="Смотреть"/>
                                <span class="premier__item-watch-text">Смотреть</span>
                            </a>
                            <a class="premier__item-watch info" href="#">
                                <img class="premier__item-info-icon" src="https://api.iconify.design/solar/info-bold.svg?color=%23ffffff" alt="Подробнее"/>
                                <span class="premier__item-info-text">Подробнее</span>
                            </a>
                        </div>
                    </div>
                    <div class="premier__scroll" aria-label="Слайды">
                        <span class="premier__scroll-dot premier__scroll-dot--active"></span>
                        <span class="premier__scroll-dot"></span>
                        <span class="premier__scroll-dot"></span>
                        <span class="premier__scroll-dot"></span>
                    </div>
                </article>
            </section>
    )
}