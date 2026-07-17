import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Head } from './components/common/Head'
import { BottomNavigation } from './components/layout/BottomNavigation'
import { Header } from './components/layout/Header'
import { MainContent } from './components/layout/MainContent'
import { Sidebar } from './components/layout/Sidebar'
import { Theme } from './components/layout/Theme'
import { MoviePage } from './components/movie/MoviePage'
import { MoviePlayer } from './components/movie/MoviePlayer'
import { CategoryPage } from './components/movie/CategoryPage'
import { MyListPage } from './components/profile/MyListPage'
import { ProfilePage } from './components/profile/ProfilePage'
import { movies } from './data/homePageContent'

function App() {
  const [favoriteSlugs, setFavoriteSlugs] = useState([])

  const toggleFavorite = (slug) => {
    setFavoriteSlugs((currentSlugs) =>
      currentSlugs.includes(slug)
        ? currentSlugs.filter((item) => item !== slug)
        : [...currentSlugs, slug],
    )
  }

  const favoriteMovies = movies.filter((movie) => favoriteSlugs.includes(movie.slug))

  return (
    <BrowserRouter>
      <Head />
      <Theme />
      <Sidebar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              favoriteSlugs={favoriteSlugs}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/films"
          element={
            <CategoryPage
              variant="films"
              title="Фильмы"
              description="Собрали самые яркие фильмы на одной странице — для просмотра в тишине и в компании."
              eyebrow="Кинотеатр"
              favoriteSlugs={favoriteSlugs}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/series"
          element={
            <CategoryPage
              variant="series"
              title="Сериалы"
              description="Обновлённая подборка сериалов с напряжённым сюжетом, атмосферой и эмоциями по вечерам."
              eyebrow="Онлайн-кинотеатр"
              favoriteSlugs={favoriteSlugs}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/popular"
          element={
            <CategoryPage
              variant="popular"
              title="Популярное"
              description="Самые обсуждаемые и часто заходящие подборки — чтобы не пропустить топ-выбор."
              eyebrow="Топ сегодня"
              favoriteSlugs={favoriteSlugs}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/trailers"
          element={
            <CategoryPage
              variant="trailers"
              title="Трейлеры"
              description="Короткие ролики и тизеры, которые дают быстрый взгляд на новые релизы и любимые проекты."
              eyebrow="Превью"
              favoriteSlugs={favoriteSlugs}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/new"
          element={
            <CategoryPage
              variant="new"
              title="Новинки"
              description="Свежие релизы и премьеры, которые только что вышли на экраны и уже доступны для просмотра."
              eyebrow="Новые поступления"
              favoriteSlugs={favoriteSlugs}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/movie/:slug" element={<MoviePage />} />
        <Route path="/watch/:slug" element={<MoviePlayer />} />
        <Route
          path="/my-list"
          element={
            <MyListPage
              favoriteMovies={favoriteMovies}
              favoriteSlugs={favoriteSlugs}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <BottomNavigation />
    </BrowserRouter>
  )
}

export default App
