function Sidebar() {
    return (
        <aside class="aside-nav" aria-label="Боковая навигация">
            <a class="aside-nav__logo title" href="#" aria-label="Movie Explorer">
                <span class="title__first">Movie</span>
                <span class="title__second">Explorer</span>
            </a>
            <div class="aside-nav__menu">
                <a class="aside-nav__link aside-nav__link--active" href="#"><img src="https://api.iconify.design/solar/home-2-bold.svg?color=%23ef4444" alt="" /><span>Главная</span></a>
                <a class="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/film-frame-linear.svg?color=%239ca3af" alt="" /><span>Фильмы</span></a>
                <a class="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/calendar-linear.svg?color=%239ca3af" alt="" /><span>Сериалы</span></a>
                <a class="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/star-linear.svg?color=%239ca3af" alt="" /><span>Популярное</span></a>
                <a class="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/bell-linear.svg?color=%239ca3af" alt="" /><span>Новинки</span></a>
                <a class="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/list-check-linear.svg?color=%239ca3af" alt="" /><span>Мой список</span></a>
                <a class="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/play-circle-linear.svg?color=%239ca3af" alt="" /><span>Трейлеры</span></a>
            </div>
            <div class="aside-nav__profile">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80" alt="Аватар пользователя" />
                <div><strong>Алексей</strong><span>Премиум ★</span></div>
                <img src="https://api.iconify.design/lucide/chevron-down.svg?color=%239ca3af" alt="" />
            </div>
            <label class="theme-switch" for="theme-toggle"><span class="theme-switch__sun">☀</span><span class="theme-switch__moon">☾</span></label>
        </aside>
    )
}