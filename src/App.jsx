import { NavBar } from './components/NavBar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import './sass/main.css'


function App() {
  return (
    <>
    <div className='Navbar'>
      <NavBar />
    </div>
    <div className='Main'>
    <ItemListContainer greeting= 'Bienvenidos a Moukkai'/>
    </div>
    </>
  )
}

export default App
