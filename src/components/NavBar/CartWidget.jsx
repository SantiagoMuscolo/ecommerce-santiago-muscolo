import { useState, useContext } from 'react'
import { useCartContext } from '../../context/CartContext'

export function CartWidget() {
    const {totalProducts} = useCartContext()

    return (
        <>
        <div className='cart'>
            <i className="fa-solid fa-cart-shopping"></i>
            <div className='count'>{totalProducts()}</div>
        </div>
        </>
    )
}