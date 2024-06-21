import './App.module.css'
import { About } from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import PostSection from './components/Posts/PostsSection'
import { Projects } from './components/Projects/Projects'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'

function App() {

  return (
    <>
      <Navbar />
      <div className="card">
        <Projects />
        <ScrollToTopButton />
        <PostSection />
      </div>
      <About />
    </>
  )
}

export default App
