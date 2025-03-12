import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Sitemap from '../public/sitemap.xml';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/sitemap.xml" element={<Sitemap />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
