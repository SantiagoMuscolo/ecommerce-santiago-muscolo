import { NavBar } from './components/navbar/Navbar'
import {CartProvider} from './context/CartContext'
import { AllRoutes } from './Routes/AllRoutes'
import './sass/main.css'


function App() {
  return (
    <>
        <CartProvider>
            <NavBar />
            <AllRoutes />
        </CartProvider>
    </>
  )
}

export default App
