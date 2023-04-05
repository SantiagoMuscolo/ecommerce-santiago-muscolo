import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { NavBar } from './components/navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContainer } from './components/CartContainer/CartContainer'
import './sass/main.css'


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
            <NavBar />
            <div className='Main'>
            <Routes>
              <Route path='/' element= {<ItemListContainer greeting='Bienvenidos a Moukkai' />}/>
              <Route path='/categoria/:categoria' element= {<ItemListContainer />}/>
              <Route path='/detail/:id' element= {<ItemDetailContainer />}/>
              <Route path='/cart' element= {<CartContainer />} />
              {/* <Route path='/404notfound' element={<404NotFound/>}/> */}
              {/* <Route path='*' element={<Navigate to={'/404notfound'}/>}/> */}
              </Routes>
            </div>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
