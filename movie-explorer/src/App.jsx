import { Head } from './components/common/Head'
import { BottomNavigation } from './components/layout/BottomNavigation'
import { Header } from './components/layout/Header'
import { MainContent } from './components/layout/MainContent'
import { Sidebar } from './components/layout/Sidebar'

function App() {
  return (
    <>
      <Head />
      <Sidebar />
      <Header />
      <MainContent />
      <BottomNavigation />
    </>
  )
}

export default App
