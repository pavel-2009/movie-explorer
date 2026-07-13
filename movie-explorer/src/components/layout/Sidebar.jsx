export function Sidebar() {
    return (
        <aside className="aside-nav" aria-label="Боковая навигация">
            <a className="aside-nav__logo title" href="#" aria-label="Movie Explorer">
                <span className="title__first">Movie</span>
                <span className="title__second">Explorer</span>
            </a>
            <div className="aside-nav__menu">
                <a className="aside-nav__link aside-nav__link--active" href="#"><img src="https://api.iconify.design/solar/home-2-bold.svg?color=%23ef4444" alt="" /><span>Главная</span></a>
                <a className="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/film-frame-linear.svg?color=%239ca3af" alt="" /><span>Фильмы</span></a>
                <a className="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/calendar-linear.svg?color=%239ca3af" alt="" /><span>Сериалы</span></a>
                <a className="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/star-linear.svg?color=%239ca3af" alt="" /><span>Популярное</span></a>
                <a className="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/bell-linear.svg?color=%239ca3af" alt="" /><span>Новинки</span></a>
                <a className="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/list-check-linear.svg?color=%239ca3af" alt="" /><span>Мой список</span></a>
                <a className="aside-nav__link" href="#"><img src="https://api.iconify.design/solar/play-circle-linear.svg?color=%239ca3af" alt="" /><span>Трейлеры</span></a>
            </div>
            <div className="aside-nav__profile">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&q=80" alt="Аватар пользователя" />
                <div><strong>Алексей</strong><span>Премиум ★</span></div>
                <img src="https://api.iconify.design/lucide/chevron-down.svg?color=%239ca3af" alt="" />
            </div>
            <label className="theme-switch" for="theme-toggle"><span className="theme-switch__sun">☀</span><span className="theme-switch__moon">☾</span></label>
        </aside>
    )
}