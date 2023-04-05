import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { Contenedor } from "../ItemList/ItemList"
import { mockFetch } from "../../customFetch/mockFetch"


export function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    console.log(productos)

    useEffect(() => {
        if (categoria) {
            mockFetch(0)
                .then((resp) => setProductos(resp.filter(prod => prod.categoria === categoria)))
                .catch((err) => console.log((err)))
        } else {
            mockFetch(2000)
                .then(resp => setProductos(resp))
                .catch(err => console.log(err))
        }
    }, [categoria])

    return (
        <>
            <div className="Main">
                <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '5%', fontFamily: 'Bebas Neue', fontSize: '2rem' }}>{greeting}</h1>
                <Contenedor productos={productos}/>
            </div>
            {/* <Contador /> */}
        </>
    )
}