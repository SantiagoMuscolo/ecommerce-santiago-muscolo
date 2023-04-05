import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { mockFetch } from "../../customFetch/mockFetch"
import { useParams } from "react-router-dom"


    export const ItemDetailContainer = () => {
        const [product, setProduct] = useState({})
        const {id}= useParams()

        useEffect(() => {
            mockFetch(0)
            .then(resp => setProduct(resp.find(product => product.id == id)))
            .catch(err => console.log(err))
        }, [id])

        return(
            <ItemDetail product= {product}/>
        )
    }