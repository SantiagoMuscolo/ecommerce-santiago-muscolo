import { Contador } from "../ItemCount/Contador"
import { mockFetch } from "../../customFetch/mockFetch"

export const ItemDetail = ({product}) => {

        console.log(product)
        return(
            <>
                <div>
                    <p>{product.id}</p>
                    <img src={product.img} alt="" />
                </div>
                <Contador />
            </>
        )
}