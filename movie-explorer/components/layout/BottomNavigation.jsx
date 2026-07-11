function BottomNavigation() {
    return (
        <nav class="bottom-nav" aria-label="Основная навигация">
            <a class="bottom-nav__item bottom-nav__item--active" href="#"><img src="https://api.iconify.design/solar/home-2-bold.svg?color=%23ef4444" alt=""/><span>Главная</span></a>
            <a class="bottom-nav__item" href="#"><img src="https://api.iconify.design/solar/film-frame-linear.svg?color=%239ca3af" alt=""/><span>Фильмы</span></a>
            <a class="bottom-nav__item" href="#"><img src="https://api.iconify.design/solar/star-linear.svg?color=%239ca3af" alt=""/><span>Мой список</span></a>
            <a class="bottom-nav__item" href="#"><img src="https://api.iconify.design/solar/user-linear.svg?color=%239ca3af" alt=""/><span>Профиль</span></a>
        </nav>
    )
}