import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import ContactComponent from './components/ContactComponent/ContactComponent'
import MerchandiseComponent from './components/MerchandiseComponent/MerchandiseComponent'
import MusicComponent from './components/MusicComponent/MusicComponent'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={
        <>
        <NavbarComponent/>
        <MusicComponent/>
        <MerchandiseComponent/>
        <ContactComponent/>
        <FooterComponent/>
        </>
        }></Route>
    </Routes>
  )
}

export default App