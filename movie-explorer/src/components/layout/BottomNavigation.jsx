import { NavLink } from 'react-router-dom'
import homeIcon from '../../assets/icons/home.svg'
import filmIcon from '../../assets/icons/film.svg'
import starOutlineIcon from '../../assets/icons/star-outline.svg'
import userIcon from '../../assets/icons/user.svg'
import { currentPage, changePage } from './MainContent.jsx'

export function BottomNavigation() {
    return (
        <nav className="bottom-nav" aria-label="Основная навигация">
            <NavLink
                className={currentPage === "main" ? "bottom-nav__item bottom-nav__item--active" : "bottom-nav__item"}
                to="/"
                end
                onClick={() => changePage("main")}
            >
                <img src={homeIcon} alt="" />
                <span>Главная</span>
            </NavLink>
            <NavLink
                className={currentPage === "films" ? "bottom-nav__item bottom-nav__item--active" : "bottom-nav__item"}
                to="/films"
                onClick={() => changePage("films")}
            >
                <img src={filmIcon} alt="" />
                <span>Фильмы</span>
            </NavLink>
            <NavLink
                className={currentPage === "my-list" ? "bottom-nav__item bottom-nav__item--active" : "bottom-nav__item"}
                to="/my-list"
                onClick={() => changePage("my-list")}
            >
                <img src={starOutlineIcon} alt="" />
                <span>Мой список</span>
            </NavLink>
            <NavLink
                className={currentPage === "profile" ? "bottom-nav__item bottom-nav__item--active" : "bottom-nav__item"}
                to="/profile"
                onClick={() => changePage("profile")}
            >
                <img src={userIcon} alt="" />
                <span>Профиль</span>
            </NavLink>
        </nav>
    )
}