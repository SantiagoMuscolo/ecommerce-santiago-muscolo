import { createContext, useContext, useState } from 'react';

const cartContext = createContext()
export const useCartContext = () => useContext(cartContext)

export const CartProvider = ({ children }) => {
    const [cartlist, setCartlist] = useState([])

    const checkCart = (id) => {
        return cartlist.find(item => item.id == id) ? true : false
    }

    const addToCart = (newProduct, quantity) => {
        if (checkCart(newProduct.id)) {
            setCartlist(cartlist.map(item => {
                return item.id === newProduct.id ? { ...item, quantity: item.quantity + quantity } : item
            }))
        } else {
            setCartlist([...cartlist, { ...newProduct, quantity: quantity }])
        }
    }
    const resetCart = () => setCartlist([])

    const deleteItem = (id) => setCartlist(cartlist.filter(item => item.id !== id))

    const totalProducts = () => {
        return cartlist.reduce((acumulate, totalProduct) => acumulate + totalProduct.quantity, 0);
    };


    return (
        <cartContext.Provider value={{
            addToCart,
            cartlist,
            checkCart,
            resetCart,
            deleteItem,
            totalProducts
        }}>
            {children}
        </cartContext.Provider>
    )
}
