import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Prestations from './pages/Prestations'
import Urgence from './pages/Urgence'
import Realisations from './pages/Realisations'
import Avis from './pages/Avis'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="prestations" element={<Prestations />} />
          <Route path="urgence" element={<Urgence />} />
          <Route path="realisations" element={<Realisations />} />
          <Route path="avis" element={<Avis />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
