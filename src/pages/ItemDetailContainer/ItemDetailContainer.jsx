import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {doc, getDoc, getFirestore} from "firebase/firestore"


    export const ItemDetailContainer = () => {
        const [product, setProduct] = useState({})
        const {id}= useParams()

        useEffect(()=> {
                const db = getFirestore()
                const queryDoc = doc(db, 'productos', id)
        
                getDoc(queryDoc)
                .then(resp => setProduct( {id: resp.id, ...resp.data()} ))
            }, [id])

        return(
            <ItemDetail product= {product}/>
        )
    }