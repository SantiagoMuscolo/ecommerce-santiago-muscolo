import { Checkout } from '../pages/Checkout/Checkout'
import { Routes, Route, ItemListContainer, ItemDetailContainer, CartContainer, CartForm } from '../pages/Index/Index'

export const AllRoutes = () => {
    return (
                <main className='Main'>
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Moukkai' />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<CartContainer />} />
                        <Route path='/cartForm' element={<CartForm />} />
                        <Route path='/Checkout' element={<Checkout />} />
                    </Routes>
                </main>
    )
}
