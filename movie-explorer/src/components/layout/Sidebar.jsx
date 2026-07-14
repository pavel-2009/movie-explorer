import avatarImage from '../../assets/images/avatar.svg'
import homeIcon from '../../assets/icons/home.svg'
import filmIcon from '../../assets/icons/film.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import starOutlineIcon from '../../assets/icons/star-outline.svg'
import bellIcon from '../../assets/icons/bell.svg'
import listCheckIcon from '../../assets/icons/list-check.svg'
import playCircleIcon from '../../assets/icons/play-circle.svg'
import chevronDownIcon from '../../assets/icons/chevron-down.svg'
import { Link } from 'react-router-dom'

export function Sidebar() {
    return (
        <aside className="aside-nav" aria-label="Боковая навигация">
            <a className="aside-nav__logo title" href="#" aria-label="Movie Explorer">
                <span className="title__first">Movie</span>
                <span className="title__second">Explorer</span>
            </a>
            <div className="aside-nav__menu">
                <Link className="aside-nav__link aside-nav__link--active" to="/">
                    <img src={homeIcon} alt="" />
                    <span>Главная</span>
                </Link>
                <Link className="aside-nav__link" to="/films">
                    <img src={filmIcon} alt="" />
                    <span>Фильмы</span>
                </Link>
                <Link className="aside-nav__link" to="/series">
                    <img src={calendarIcon} alt="" />
                    <span>Сериалы</span>
                </Link>
                <Link className="aside-nav__link" to="/popular">
                    <img src={starOutlineIcon} alt="" />
                    <span>Популярное</span>
                </Link>
                <Link className="aside-nav__link" to="/new">
                    <img src={bellIcon} alt="" />
                    <span>Новинки</span>
                </Link>
                <Link className="aside-nav__link" to="/my-list">
                    <img src={listCheckIcon} alt="" />
                    <span>Мой список</span>
                </Link>
                <Link className="aside-nav__link" to="/trailers">
                    <img src={playCircleIcon} alt="" />
                    <span>Трейлеры</span>
                </Link>
            </div>
            <Link className="aside-nav__profile" to="/profile">
                <img src={avatarImage} alt="Аватар пользователя" />
                <div><strong>Алексей</strong><span>Премиум ★</span></div>
                <img src={chevronDownIcon} alt="" />
            </Link>
            <label className="theme-switch" htmlFor="theme-toggle"><span className="theme-switch__sun">☀</span><span className="theme-switch__moon">☾</span></label>
        </aside>
    )
}