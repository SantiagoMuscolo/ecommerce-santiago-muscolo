import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartContainer = () => {
    const { cartlist, resetCart, deleteItem } = useCartContext()

    return(
        <div className="cartContainer">
            {cartlist.map(item => (
                <ul key={item.id} className="cartContainerUl">
                    <li className="cartBox">
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                        <p>cantidad: {item.quantity}</p>
                        <p>${item.price}</p>
                        <button onClick={()=> deleteItem(item.id)}>❌</button>
                    </li>
                </ul>
            ))}
            <div className="buttons">
                <button onClick={resetCart} className="clear-all">clear all</button>
                <Link to='/cartForm'>
                    <button className="finalizar-compra">Finalizar Compra</button>
                </Link>
            </div>
        </div>
    )
}