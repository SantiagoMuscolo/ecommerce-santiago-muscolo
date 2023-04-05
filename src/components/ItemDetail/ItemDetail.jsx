import { Contador } from "../ItemCount/Contador"
import { mockFetch } from "../../customFetch/mockFetch"

export const ItemDetail = ({product}) => {

        console.log(product)
        return(
            <>
                <div className="detail">
                    <img src={product.img} alt="" />
                    <div className="contenido-detail">
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                        <Contador />
                    </div>
                </div>
            </>
        )
}