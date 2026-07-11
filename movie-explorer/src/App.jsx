import { Head } from './components/common/Head'
import { Sidebar } from './components/layout/Sidebar'
import { BottomNavigation } from './components/layout/BottomNavigation'
import { ContinueList } from './components/continue/ContinueList'
import { MovieList } from './components/movie/MovieList'
import { Hero } from './components/hero/Hero'
import { Header } from './components/layout/Header'

function App() {
  return (
    <>
      <Head />
      <Sidebar />
      <Header />
      <main className="main-content">
        <Hero />
        <MovieList
          movies={[
            { title: 'Фильм 1', rating: 8.5, imageUrl: 'https://image.tmdb.org/t/p/w500/1.jpg' },
            { title: 'Фильм 2', rating: 7.2, imageUrl: 'https://image.tmdb.org/t/p/w500/2.jpg' },
            { title: 'Фильм 3', rating: 9.0, imageUrl: 'https://image.tmdb.org/t/p/w500/3.jpg' },
            { title: 'Фильм 4', rating: 6.8, imageUrl: 'https://image.tmdb.org/t/p/w500/4.jpg' },
          ]}
        />
        <ContinueList
          continueWatching={[
            { title: 'Сериал 1', progress: 'Сезон 2, Серия 5', imageUrl: 'https://image.tmdb.org/t/p/w500/5.jpg', watchedPercentage: 50 },
            { title: 'Сериал 2', progress: 'Сезон 1, Серия 10', imageUrl: 'https://image.tmdb.org/t/p/w500/6.jpg', watchedPercentage: 80 },
            { title: 'Сериал 3', progress: 'Сезон 3, Серия 2', imageUrl: 'https://image.tmdb.org/t/p/w500/7.jpg', watchedPercentage: 30 },
          ]}
        />
      </main>
      <BottomNavigation />
    </>
  )
}

export default App
