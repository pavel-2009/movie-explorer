import dunePoster from '../../assets/images/posters/dune.svg'
import playIcon from '../../assets/icons/play.svg'
import starIcon from '../../assets/icons/star.svg'
import { Link } from 'react-router-dom'

export function Hero() {
    return (
        <section className="premier" aria-labelledby="premier-title">
                <article className="premier__item">
                    <img src={dunePoster} alt="Постер фильма Дюна: Часть вторая" className="premier__item-image"/>
                    <div className="premier__item-overlay"></div>
                    <div className="premier__item__info">
                        <p className="premier__item-premier">ПРЕМЬЕРА</p>
                        <h1 className="premier__item-title" id="premier-title">Дюна 2</h1>
                        <p className="premier__item-description">Пол Атрейдес объединяется с фрименами, чтобы отомстить заговорщикам и принять судьбу, от которой зависит будущее целой вселенной.</p>
                        <div className="premier__item-info">
                            <div className="premier__item-info__rating info-item">
                                <img className="premier__item-info__rating-icon" src={starIcon} alt="Рейтинг"/>
                                <span className="premier__item-info__rating-text">8.7</span>
                            </div>
                            <span className="info-item">2024</span>
                            <span className="info-item">2ч 46м</span>
                            <span className="info-item last added">Фантастика, боевик</span>
                        </div>
                        <div className="premier__item-buttons">
                            <a className="premier__item-watch" href="#">
                                <img className="premier__item-watch-icon" src={playIcon} alt="Смотреть"/>
                                <span className="premier__item-watch-text">Смотреть</span>
                            </a>
                            <Link className="premier__item-watch info" to="/movie/dune-2">
                                <span className="premier__item-info-text">Подробнее</span>
                            </Link>
                        </div>
                    </div>
                    <div className="premier__scroll" aria-label="Слайды">
                        <span className="premier__scroll-dot premier__scroll-dot--active"></span>
                        <span className="premier__scroll-dot"></span>
                        <span className="premier__scroll-dot"></span>
                        <span className="premier__scroll-dot"></span>
                    </div>
                </article>
            </section>
    )
}