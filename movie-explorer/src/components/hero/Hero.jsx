import dunePoster from '../../assets/images/posters/dune.svg'
import playIcon from '../../assets/icons/play.svg'
import starIcon from '../../assets/icons/star.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const defaultSlides = [
    {
        id: 'dune-2',
        image: dunePoster,
        alt: 'Постер фильма Дюна: Часть вторая',
        title: 'Дюна 2',
        description: 'Пол Атрейдес объединяется с фрименами, чтобы отомстить заговорщикам и принять судьбу, от которой зависит будущее целой вселенной.',
        year: '2024',
        duration: '2ч 46м',
        genre: 'Фантастика, боевик',
        link: '/movie/dune-2'
    },
    {
        id: 'new-release',
        image: dunePoster,
        alt: 'Постер следующего релиза',
        title: 'Следующий релиз',
        description: 'Скоро выйдет новый блокбастер с захватывающей историей и эффектами.',
        year: '2026',
        duration: '2ч 10м',
        genre: 'Боевик, приключения',
        link: '/movie/coming-soon'
    },
    {
        id: 'classic',
        image: dunePoster,
        alt: 'Постер классического хита',
        title: 'Классический хит',
        description: 'Новая история в духе легендарных приключений для всей семьи.',
        year: '2023',
        duration: '1ч 58м',
        genre: 'Драма, семейный',
        link: '/movie/classic-hit'
    }
]

export function Hero({ posters }) {
    const [activeSlide, setActiveSlide] = useState(0)
    const slides = Array.isArray(posters) && posters.length > 0 ? posters : defaultSlides
    const currentSlide = slides[activeSlide] ?? slides[0]

    useEffect(() => {
        if (slides.length <= 1) return

        const intervalId = window.setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length)
        }, 3000)

        return () => window.clearInterval(intervalId)
    }, [slides.length])

    return (
        <section className="premier" aria-labelledby="premier-title">
            <article className="premier__item">
                <img src={currentSlide.image} alt={currentSlide.alt} className="premier__item-image" />
                <div className="premier__item-overlay"></div>
                <div className="premier__item__info">
                    <p className="premier__item-premier">ПРЕМЬЕРА</p>
                    <h1 className="premier__item-title" id="premier-title">{currentSlide.title}</h1>
                    <p className="premier__item-description">{currentSlide.description}</p>
                    <div className="premier__item-info">
                        <div className="premier__item-info__rating info-item">
                            <img className="premier__item-info__rating-icon" src={starIcon} alt="Рейтинг" />
                            <span className="premier__item-info__rating-text">8.7</span>
                        </div>
                        <span className="info-item">{currentSlide.year}</span>
                        <span className="info-item">{currentSlide.duration}</span>
                        <span className="info-item last added">{currentSlide.genre}</span>
                    </div>
                    <div className="premier__item-buttons">
                        <a className="premier__item-watch" href="#">
                            <img className="premier__item-watch-icon" src={playIcon} alt="Смотреть" />
                            <span className="premier__item-watch-text">Смотреть</span>
                        </a>
                        <Link className="premier__item-watch info" to={currentSlide.link}>
                            <span className="premier__item-info-text">Подробнее</span>
                        </Link>
                    </div>
                </div>
                <div className="premier__scroll" aria-label="Слайды">
                    {slides.map((slide, index) => (
                        <span
                            key={slide.id ?? index}
                            className={`premier__scroll-dot${index === activeSlide ? ' premier__scroll-dot--active' : ''}`}
                        />
                    ))}
                </div>
            </article>
        </section>
    )
}