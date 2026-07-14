import avatarImage from '../../assets/images/avatar.svg'
import homeIcon from '../../assets/icons/home.svg'
import filmIcon from '../../assets/icons/film.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import starOutlineIcon from '../../assets/icons/star-outline.svg'
import bellIcon from '../../assets/icons/bell.svg'
import listCheckIcon from '../../assets/icons/list-check.svg'
import playCircleIcon from '../../assets/icons/play-circle.svg'
import chevronDownIcon from '../../assets/icons/chevron-down.svg'

export function Sidebar() {
    return (
        <aside className="aside-nav" aria-label="Боковая навигация">
            <a className="aside-nav__logo title" href="#" aria-label="Movie Explorer">
                <span className="title__first">Movie</span>
                <span className="title__second">Explorer</span>
            </a>
            <div className="aside-nav__menu">
                <a className="aside-nav__link aside-nav__link--active" href="#"><img src={homeIcon} alt="" /><span>Главная</span></a>
                <a className="aside-nav__link" href="#"><img src={filmIcon} alt="" /><span>Фильмы</span></a>
                <a className="aside-nav__link" href="#"><img src={calendarIcon} alt="" /><span>Сериалы</span></a>
                <a className="aside-nav__link" href="#"><img src={starOutlineIcon} alt="" /><span>Популярное</span></a>
                <a className="aside-nav__link" href="#"><img src={bellIcon} alt="" /><span>Новинки</span></a>
                <a className="aside-nav__link" href="#"><img src={listCheckIcon} alt="" /><span>Мой список</span></a>
                <a className="aside-nav__link" href="#"><img src={playCircleIcon} alt="" /><span>Трейлеры</span></a>
            </div>
            <div className="aside-nav__profile">
                <img src={avatarImage} alt="Аватар пользователя" />
                <div><strong>Алексей</strong><span>Премиум ★</span></div>
                <img src={chevronDownIcon} alt="" />
            </div>
            <label className="theme-switch" htmlFor="theme-toggle"><span className="theme-switch__sun">☀</span><span className="theme-switch__moon">☾</span></label>
        </aside>
    )
}