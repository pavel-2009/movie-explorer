import { useParams } from 'react-router-dom'
import { movies } from '../../data/homePageContent'

const defaultMovie = {
  title: 'Дюна: Часть вторая',
  rating: 8.7,
  genre: 'Фантастика, приключения, драма',
  duration: '2ч 46м',
  backdrop: 'https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
  description:
    'Пол Атрейдес объединяется с Чани и фрименами, чтобы пройти путь мести, силы и выбора, от которого зависит будущее целой вселенной.',
  actors: [
    {
      name: 'Тимоти Шаламе',
      photo: 'https://image.tmdb.org/t/p/w185/BE2sdjpgsa2rNTFa66f7upkaOP.jpg',
    },
    {
      name: 'Зендея',
      photo: 'https://image.tmdb.org/t/p/w185/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg',
    },
    {
      name: 'Ребекка Фергюсон',
      photo: 'https://image.tmdb.org/t/p/w185/lJloTOheuQSirSLXNA3JHsrMNfH.jpg',
    },
    {
      name: 'Остин Батлер',
      photo: 'https://image.tmdb.org/t/p/w185/8ciV5g7UEVhKdW67Q70Aio2wNN1.jpg',
    },
    {
      name: 'Флоренс Пью',
      photo: 'https://image.tmdb.org/t/p/w185/6Sjz9teWjrMY9lF2o9FCo4XmoRh.jpg',
    },
  ],
}

export function MoviePage() {
  const { slug } = useParams()
  const movie = movies.find((item) => item.slug === slug) ?? defaultMovie

  return (
    <main className="main-content movie-page" aria-labelledby="movie-page-title">
      <section className="movie-page__hero">
        <img className="movie-page__backdrop" src={movie.backdrop} alt={`Заставка фильма ${movie.title}`} />
        <div className="movie-page__shade" />
        <div className="movie-page__summary">
          <span className="movie-page__eyebrow">Сейчас в подборке</span>
          <h1 className="movie-page__title" id="movie-page-title">{movie.title}</h1>
          <div className="movie-page__meta" aria-label="Информация о фильме">
            <span className="movie-page__rating">
              <img src="https://api.iconify.design/solar/star-bold.svg?color=%23f89e0b" alt="" />
              {movie.rating}
            </span>
            <span>{movie.genre}</span>
            <span>{movie.duration}</span>
          </div>
          <a className="movie-page__watch" href="#watch">
            <img src="https://api.iconify.design/solar/play-bold.svg?color=%23ffffff" alt="" />
            Смотреть
          </a>
        </div>
      </section>

      <section className="movie-page__details" aria-label="Описание фильма">
        <div>
          <p className="movie-page__section-kicker">О фильме</p>
          <h2>История, которую хочется досмотреть</h2>
        </div>
        <p>{movie.description}</p>
      </section>

      <section className="movie-page__cast" aria-labelledby="movie-cast-title">
        <div className="section-title">
          <h2 className="section-title__text" id="movie-cast-title">Актеры</h2>
        </div>
        <div className="movie-page__cast-list">
          {movie.actors.map((actor) => (
            <article className="movie-page__actor" key={actor.name}>
              <img src={actor.photo} alt={actor.name} />
              <h3>{actor.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
