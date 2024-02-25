import { Route, Routes } from 'react-router-dom'

import { About, Contact, Error, Home, Project } from './pages'
import { Accordion, Calculator, Color, Counter, Currency, Discord, NikeLanding, PassGen } from './projects'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Project />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/currency' element={<Currency />} />
      <Route path='/passgen' element={<PassGen />} />
      <Route path='/accordion' element={<Accordion />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/discord' element={<Discord />} />
      <Route path='/color' element={<Color />} />
      <Route path='/error' element={<Error />} />
      <Route path='/nike' element={<NikeLanding />} />
      <Route path='/project' element={<Project />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default App
