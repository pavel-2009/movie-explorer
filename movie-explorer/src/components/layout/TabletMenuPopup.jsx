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
                    <Link className="tablet-menu__logo title" to="/" onClick={onClose} aria-label="Movie Explorer">
                        <span className="title__first">Movie</span>
                        <span className="title__second">Explorer</span>
                    </Link>
                    <button type="button" className="tablet-menu__close" onClick={onClose} aria-label="Закрыть">
                        ✕
                    </button>
                </div>

                <nav className="tablet-menu__nav">
                    <Link className="aside-nav__link aside-nav__link--active" to="/" onClick={onClose}>
                        <img src={homeIcon} alt="" />
                        <span>Главная</span>
                    </Link>
                    <Link className="aside-nav__link" to="/films" onClick={onClose}>
                        <img src={filmIcon} alt="" />
                        <span>Фильмы</span>
                    </Link>
                    <Link className="aside-nav__link" to="/series" onClick={onClose}>
                        <img src={calendarIcon} alt="" />
                        <span>Сериалы</span>
                    </Link>
                    <Link className="aside-nav__link" to="/popular" onClick={onClose}>
                        <img src={starOutlineIcon} alt="" />
                        <span>Популярное</span>
                    </Link>
                    <Link className="aside-nav__link" to="/new" onClick={onClose}>
                        <img src={bellIcon} alt="" />
                        <span>Новинки</span>
                    </Link>
                    <Link className="aside-nav__link" to="/my-list" onClick={onClose}>
                        <img src={listCheckIcon} alt="" />
                        <span>Мой список</span>
                    </Link>
                    <Link className="aside-nav__link" to="/trailers" onClick={onClose}>
                        <img src={playCircleIcon} alt="" />
                        <span>Трейлеры</span>
                    </Link>
                </nav>

                <Link className="aside-nav__profile" to="/profile" onClick={onClose}>
                    <img src={avatarImage} alt="Аватар пользователя" />
                    <div><strong>Алексей</strong><span>Премиум ★</span></div>
                    <img src={chevronDownIcon} alt="" />
                </Link>
            </aside>
        </>
    )
}
