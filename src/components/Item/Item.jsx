import { Link } from "react-router-dom";

export function Item ({producto}){
    return(
        <div className= 'card'>
                                            <h4>{producto.name}</h4>
                                            <img src={producto.img} alt="" />
                                            <p>precio: {producto.price}$</p>
                                            <p>stock disponible: {producto.stock}</p>
                                            <Link to={`/item/${producto.id}`}><button className="detalle">Detalle</button></Link>
                                        </div>
    )
}