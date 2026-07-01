import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Me from './pages/Me'
import Research from './pages/Research'
import Learning from './pages/Learning'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/me" element={<Me />} />
          <Route path="/research" element={<Research />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
