import './index.css'
import { Footer } from './layouts/Footer'
import { Header } from './layouts/Header'
import { MainApp } from './layouts/Main'
function App() {
  return (
    <div className='font-matter'>
      <Header />
      <MainApp />
      <Footer />
    </div>
  )
}

export default App
