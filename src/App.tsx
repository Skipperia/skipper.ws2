import './App.module.css'
import { About } from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import PostSection from './components/Posts/PostsSection'
import { Projects } from './components/Projects/Projects'

function App() {

  return (
    <>
      <Navbar />
      <div className="card">
        <Projects />
        <PostSection />
      </div>
      <About />
    </>
  )
}

export default App
