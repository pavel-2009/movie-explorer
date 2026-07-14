import { Head } from './components/common/Head'
import { BottomNavigation } from './components/layout/BottomNavigation'
import { Header } from './components/layout/Header'
import { Theme } from './components/layout/Theme'
import { MoviePage } from './components/movie/MoviePage'
import { Sidebar } from './components/layout/Sidebar'

function App() {
  return (
    <>
      <Head />
      <Theme />
      <Sidebar />
      <Header />
      <MoviePage />
      <BottomNavigation />
    </>
  )
}

export default App
