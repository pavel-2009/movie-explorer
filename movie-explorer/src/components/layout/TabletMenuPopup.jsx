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
import { currentPage, changePage } from './MainContent.jsx'

export function TabletMenuPopup({ isOpen, onClose }) {
    return (
        <>
            <button
                type="button"
                className={`tablet-menu__backdrop${isOpen ? " tablet-menu__backdrop--visible" : ""}`}
                aria-label="Закрыть меню"
                onClick={onClose}
            />

            <aside className={`tablet-menu${isOpen ? " tablet-menu--open" : ""}`} aria-label="Меню в планшетном режиме">
                <div className="tablet-menu__top">
                    <Link className="tablet-menu__logo title" to="/" onClick={onClose} aria-label="Movie Explorer" onClick={() => changePage("main")}>
                        <span className="title__first">Movie</span>
                        <span className="title__second">Explorer</span>
                    </Link>
                    <button type="button" className="tablet-menu__close" onClick={onClose} aria-label="Закрыть">
                        ✕
                    </button>
                </div>

                <nav className="tablet-menu__nav">
                    <Link className={currentPage === "main" ? "aside-nav__link aside-nav__link--active" : "aside-nav__link"} to="/" onClick={onClose} onClick={() => changePage("main")}>
                        <img src={homeIcon} alt="" />
                        <span>Главная</span>
                    </Link>
                    <Link className={currentPage === "films" ? "aside-nav__link aside-nav__link--active" : "aside-nav__link"} to="/films" onClick={onClose} onClick={() => changePage("films")}>
                        <img src={filmIcon} alt="" />
                        <span>Фильмы</span>
                    </Link>
                    <Link className={currentPage === "series" ? "aside-nav__link aside-nav__link--active" : "aside-nav__link"} to="/series" onClick={onClose} onClick={() => changePage("series")}>
                        <img src={calendarIcon} alt="" />
                        <span>Сериалы</span>
                    </Link>
                    <Link className={currentPage === "popular" ? "aside-nav__link aside-nav__link--active" : "aside-nav__link"} to="/popular" onClick={onClose} onClick={() => changePage("popular")}>
                        <img src={starOutlineIcon} alt="" />
                        <span>Популярное</span>
                    </Link>
                    <Link className={currentPage === "new" ? "aside-nav__link aside-nav__link--active" : "aside-nav__link"} to="/new" onClick={onClose} onClick={() => changePage("new")}>
                        <img src={bellIcon} alt="" />
                        <span>Новинки</span>
                    </Link>
                    <Link className={currentPage === "my-list" ? "aside-nav__link aside-nav__link--active" : "aside-nav__link"} to="/my-list" onClick={onClose} onClick={() => changePage("my-list")}>
                        <img src={listCheckIcon} alt="" />
                        <span>Мой список</span>
                    </Link>
                    <Link className={currentPage === "trailers" ? "aside-nav__link aside-nav__link--active" : "aside-nav__link"} to="/trailers" onClick={onClose} onClick={() => changePage("trailers")}>
                        <img src={playCircleIcon} alt="" />
                        <span>Трейлеры</span>
                    </Link>
                </nav>

                <Link className={currentPage === "profile" ? "aside-nav__profile aside-nav__profile--active" : "aside-nav__profile"} to="/profile" onClick={onClose} onClick={() => changePage("profile")}>
                    <img src={avatarImage} alt="Аватар пользователя" />
                    <div><strong>Алексей</strong><span>Премиум ★</span></div>
                    <img src={chevronDownIcon} alt="" />
                </Link>
            </aside>
        </>
    )
}
