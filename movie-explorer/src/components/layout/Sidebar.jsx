import avatarImage from '../../assets/images/avatar.svg'
import homeIcon from '../../assets/icons/home.svg'
import filmIcon from '../../assets/icons/film.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import starOutlineIcon from '../../assets/icons/star-outline.svg'
import bellIcon from '../../assets/icons/bell.svg'
import listCheckIcon from '../../assets/icons/list-check.svg'
import playCircleIcon from '../../assets/icons/play-circle.svg'
import chevronDownIcon from '../../assets/icons/chevron-down.svg'
import { Link, NavLink } from 'react-router-dom'

export function Sidebar() {
    return (
        <aside className="aside-nav" aria-label="Боковая навигация">
            <Link className="aside-nav__logo title" to="/" aria-label="Movie Explorer">
                <span className="title__first">Movie</span>
                <span className="title__second">Explorer</span>
            </Link>
            <div className="aside-nav__menu">
                <NavLink
                    className={({ isActive }) => `aside-nav__link${isActive ? ' aside-nav__link--active' : ''}`}
                    to="/"
                    end
                >
                    <img src={homeIcon} alt="" />
                    <span>Главная</span>
                </NavLink>
                <NavLink
                    className={({ isActive }) => `aside-nav__link${isActive ? ' aside-nav__link--active' : ''}`}
                    to="/films"
                >
                    <img src={filmIcon} alt="" />
                    <span>Фильмы</span>
                </NavLink>
                <NavLink
                    className={({ isActive }) => `aside-nav__link${isActive ? ' aside-nav__link--active' : ''}`}
                    to="/series"
                >
                    <img src={calendarIcon} alt="" />
                    <span>Сериалы</span>
                </NavLink>
                <NavLink
                    className={({ isActive }) => `aside-nav__link${isActive ? ' aside-nav__link--active' : ''}`}
                    to="/popular"
                >
                    <img src={starOutlineIcon} alt="" />
                    <span>Популярное</span>
                </NavLink>
                <NavLink
                    className={({ isActive }) => `aside-nav__link${isActive ? ' aside-nav__link--active' : ''}`}
                    to="/new"
                >
                    <img src={bellIcon} alt="" />
                    <span>Новинки</span>
                </NavLink>
                <NavLink
                    className={({ isActive }) => `aside-nav__link${isActive ? ' aside-nav__link--active' : ''}`}
                    to="/my-list"
                >
                    <img src={listCheckIcon} alt="" />
                    <span>Мой список</span>
                </NavLink>
                <NavLink
                    className={({ isActive }) => `aside-nav__link${isActive ? ' aside-nav__link--active' : ''}`}
                    to="/trailers"
                >
                    <img src={playCircleIcon} alt="" />
                    <span>Трейлеры</span>
                </NavLink>
            </div>
            <NavLink
                className={({ isActive }) => `aside-nav__profile${isActive ? ' aside-nav__profile--active' : ''}`}
                to="/profile"
            >
                <img src={avatarImage} alt="Аватар пользователя" />
                <div><strong>Алексей</strong><span>Премиум ★</span></div>
                <img src={chevronDownIcon} alt="" />
            </NavLink>
            <label className="theme-switch" htmlFor="theme-toggle"><span className="theme-switch__sun">☀</span><span className="theme-switch__moon">☾</span></label>
        </aside>
    )
}