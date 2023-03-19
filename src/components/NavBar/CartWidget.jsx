import { useState } from 'react'

export function CartWidget() {
    const[count, setCount] = useState(0)

    return (
        <>
        <i className="fa-solid fa-cart-shopping"></i>
        <div className='count'>{count}</div>
        </>
    )
}