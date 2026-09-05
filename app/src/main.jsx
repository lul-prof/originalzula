import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ShopContextProvider>,
)
