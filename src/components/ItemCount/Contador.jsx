import { useState } from "react";

export function Contador(){
        const[count, setCount] = useState(0)

        const increment = () => {
            setCount(count + 1)
        }

        const decrement = () => {
            setCount(count - 1)

            if(count <= 0){
                setCount(0)
            }
        }

    return(
        <>
        <div className="contador">
            <button onClick={increment}>+</button>
            <div>{count}</div>
            <button onClick={decrement}>-</button>
        </div>
        <div className="agregarAlCarrito">
            <button>Agregar al carrito</button>
        </div>
        </>
    )
}