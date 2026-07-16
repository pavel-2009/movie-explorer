import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Head } from './components/common/Head'
import { BottomNavigation } from './components/layout/BottomNavigation'
import { Header } from './components/layout/Header'
import { MainContent } from './components/layout/MainContent'
import { Sidebar } from './components/layout/Sidebar'
import { Theme } from './components/layout/Theme'
import { MoviePage } from './components/movie/MoviePage'
import { MoviePlayer } from './components/movie/MoviePlayer'
import { ProfilePage } from './components/profile/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Theme />
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/movie/:slug" element={<MoviePage />} />
        <Route path="/watch/:slug" element={<MoviePlayer />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <BottomNavigation />
    </BrowserRouter>
  )
}

export default App
