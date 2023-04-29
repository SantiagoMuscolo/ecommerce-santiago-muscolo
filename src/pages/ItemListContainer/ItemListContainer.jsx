import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Contenedor } from "../ItemList/ItemList"
import { mockFetch } from "../../Hooks/mockFetch"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"


export function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) {
                const db = getFirestore()
                const queryCollection = collection(db, 'productos')
        
                const queryFilter = query(queryCollection, where('categoryId', '==', categoryId))
        
                getDocs(queryFilter)
                .then(resp => setProductos( resp.docs.map(producto => ({id: producto.id, ...producto.data()}) ) ))
        }
        else {
            const db = getFirestore()
                const queryCollection = collection(db, 'productos')
                getDocs(queryCollection)
                .then(resp => setProductos( resp.docs.map(producto => ({id: producto.id, ...producto.data()}) ) ))
        }
    }, [categoryId])


    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', fontFamily: 'Bebas Neue', fontSize: '2rem' }}>{greeting}</h1>
            <Contenedor productos={productos} />
        </div>
    )
}