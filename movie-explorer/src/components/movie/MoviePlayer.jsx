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
    <main className="main-content movie-player" aria-labelledby="movie-player-title">
      <section className="movie-player__screen" aria-label={`Просмотр фильма ${movie.title}`}>
        <div className="movie-player__poster">
          <img className="movie-player__backdrop" src={movie.backdrop} alt={`Постер фильма ${movie.title}`} />
          <button type="button" className="movie-player__play-button" aria-label={`Воспроизвести ${movie.title}`}>
            <img src={playIcon} alt="" className="movie-player__play-icon" />
          </button>
          <div className="movie-player__overlay" />
          <div className="movie-player__duration" aria-label="Длительность фильма">
            {movie.duration}
          </div>
        </div>

        <div className="movie-player__content">
          <h1 className="movie-page__title movie-player__title" id="movie-player-title">
            {movie.title}
          </h1>
          <p className="movie-player__description">{movie.description}</p>

          <div className="movie-player__controls">
            <button type="button" className="movie-page__watch movie-player__button">
              <img src={playIcon} alt="" />
              Воспроизвести
            </button>
          </div>

          <Link to={`/movie/${slug}`} className="movie-player__link">
            К описанию
          </Link>
        </div>
      </section>
    </main>
  )
}
