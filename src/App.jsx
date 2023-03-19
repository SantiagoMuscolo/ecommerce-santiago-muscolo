import { Navbar } from './components/NavBar/Navbar'
import { CartWidget } from './components/NavBar/CartWidget'
import { ItemListContainer } from './components/Item-list/ItemListContainer'
import './sass/main.css'


function App() {
  return (
    <>
    <div className='Navbar'>
      <Navbar />
      <CartWidget />
    </div>
    <div className='Main'>
    <ItemList greeting= 'Bienvenidos a Moukkai'/>
    </div>
    </>
  )
}

export default App
