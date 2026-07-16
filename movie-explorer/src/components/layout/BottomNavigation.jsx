import { NavLink } from 'react-router-dom'
import homeIcon from '../../assets/icons/home.svg'
import filmIcon from '../../assets/icons/film.svg'
import starOutlineIcon from '../../assets/icons/star-outline.svg'
import userIcon from '../../assets/icons/user.svg'

export function BottomNavigation() {
    return (
        <nav className="bottom-nav" aria-label="Основная навигация">
            <NavLink
                className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
                to="/"
                end
            >
                <img src={homeIcon} alt="" />
                <span>Главная</span>
            </NavLink>
            <NavLink
                className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
                to="/films"
            >
                <img src={filmIcon} alt="" />
                <span>Фильмы</span>
            </NavLink>
            <NavLink
                className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
                to="/my-list"
            >
                <img src={starOutlineIcon} alt="" />
                <span>Мой список</span>
            </NavLink>
            <NavLink
                className={({ isActive }) => `bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
                to="/profile"
            >
                <img src={userIcon} alt="" />
                <span>Профиль</span>
            </NavLink>
        </nav>
    )
}