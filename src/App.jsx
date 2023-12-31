import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Counter from './projects/Counter'
import PassGen from './projects/PassGen'
import Currency from './projects/Currency'
import Accordion from './projects/Accordion'
import Discord from './projects/Discord'
import Color from './projects/Color'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/currency" element={<Currency />} />
      <Route path="/passgen" element={<PassGen />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/discord" element={<Discord />} />
      <Route path="/color" element={<Color />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
