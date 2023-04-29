import {Contador} from '../../components/ItemCount/Contador'
import { useCartContext } from "../../context/CartContext"

export const ItemDetail = ({product}) => {
    const { addToCart } = useCartContext()

    const onAdd = (quantity) => {
        addToCart(product, quantity)
    }

        return(
            <>
                <div className="detail">
                    <img src={product.img} alt="" />
                    <div className="contenido-detail">
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                        <Contador onAdd={onAdd} initial={1} max={product.stock} />
                    </div>
                </div>
            </>
        )
}