import { useState } from "react";
import { Link } from "react-router-dom";

export function Contador({onAdd, initial, max}){
        const[count, setCount] = useState(0)

        const increment = () => count < max && setCount(count + 1)

        const decrement = () => count > initial && setCount(count - 1)

    return(
        <>
        <div className="contador">
            <button onClick={increment}>+</button>
            <div>{count}</div>
            <button onClick={decrement}>-</button>
        </div>
        <div className="agregarAlCarrito">
            <Link to='/cart'><button onClick={() => onAdd(count)}>Agregar al carrito</button></Link>
        </div>
        </>
    )
}