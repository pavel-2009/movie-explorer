import homeIcon from '../../assets/icons/home.svg'
import filmIcon from '../../assets/icons/film.svg'
import starOutlineIcon from '../../assets/icons/star-outline.svg'
import userIcon from '../../assets/icons/user.svg'

export function BottomNavigation() {
    return (
        <nav className="bottom-nav" aria-label="Основная навигация">
            <a className="bottom-nav__item bottom-nav__item--active" href="#"><img src={homeIcon} alt=""/><span>Главная</span></a>
            <a className="bottom-nav__item" href="#"><img src={filmIcon} alt=""/><span>Фильмы</span></a>
            <a className="bottom-nav__item" href="#"><img src={starOutlineIcon} alt=""/><span>Мой список</span></a>
            <a className="bottom-nav__item" href="#"><img src={userIcon} alt=""/><span>Профиль</span></a>
        </nav>
    )
}