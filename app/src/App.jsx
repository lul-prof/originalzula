import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import ContactComponent from './components/ContactComponent/ContactComponent'
import MerchandiseComponent from './components/MerchandiseComponent/MerchandiseComponent'
import MusicComponent from './components/MusicComponent/MusicComponent'
import MerchandisePage from './pages/MerchandisePage/MerchandisePage'
import SingleMerchandisePage from './pages/SingleMerchandisePage/SingleMerchandisePage'
import CartPage from './pages/CartPage/CartPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import OrdersPage from './pages/OrdersPage/OrdersPage'
import HeroComponent from './components/HeroComponent/HeroComponent'
import {Toaster} from "react-hot-toast"


const App = () => {
  return (
    <>
    <Toaster/>
    <NavbarComponent/>
    <Routes>
      <Route path='/' element={
        <>
        <HeroComponent/>
        <MusicComponent/>
        <MerchandiseComponent/>
        <ContactComponent/>
        </>
        }></Route>
        <Route path='/merchandise' element={<MerchandisePage/>}></Route>
        <Route path='/merchandise/:id' element={<SingleMerchandisePage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/checkout' element={<CheckoutPage/>}></Route>
        <Route path='/orders' element={<OrdersPage/>}></Route>
    </Routes>
    <FooterComponent/>
    </>
  )
}

export default App