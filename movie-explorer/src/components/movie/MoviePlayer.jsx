import { Link, useParams } from 'react-router-dom'
import playIcon from '../../assets/icons/play.svg'
import starIcon from '../../assets/icons/star.svg'
import { movies } from '../../data/homePageContent'

const defaultMovie = {
  title: 'Дюна: Часть вторая',
  rating: 8.7,
  genre: 'Фантастика, приключения, драма',
  duration: '2ч 46м',
  backdrop: 'https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
  description:
    'Пол Атрейдес объединяется с Чани и фрименами, чтобы пройти путь мести, силы и выбора, от которого зависит будущее целой вселенной.',
}

export function MoviePlayer() {
  const { slug } = useParams()
  const movie = movies.find((item) => item.slug === slug) ?? defaultMovie

  return (
    <main className="main-content movie-page movie-player" aria-labelledby="movie-player-title">
      <section className="movie-player__screen" aria-label={`Просмотр фильма ${movie.title}`}>
        <img className="movie-player__backdrop" src={movie.backdrop} alt={`Постер фильма ${movie.title}`} />
        <div className="movie-player__overlay" />
        <div className="movie-player__content">
          <span className="movie-player__badge">Сейчас смотрите</span>
          <h1 className="movie-page__title movie-player__title" id="movie-player-title">
            {movie.title}
          </h1>
          <div className="movie-page__meta movie-player__meta" aria-label="Информация о фильме">
            <span className="movie-page__rating">
              <img src={starIcon} alt="" />
              {movie.rating}
            </span>
            <span>{movie.genre}</span>
            <span>{movie.duration}</span>
          </div>

          <div className="movie-player__controls">
            <button type="button" className="movie-page__watch movie-player__button">
              <img src={playIcon} alt="" />
              Воспроизвести
            </button>
            <Link to={`/movie/${slug}`} className="movie-player__link">
              К описанию
            </Link>
          </div>
        </div>
      </section>

      <section className="movie-page__details movie-player__details" aria-label="Краткая информация о фильме">
        <div>
          <p className="movie-page__section-kicker">Смотреть</p>
          <h2>Базовый просмотр без лишних блоков</h2>
        </div>
        <p>{movie.description}</p>
      </section>
    </main>
  )
}
