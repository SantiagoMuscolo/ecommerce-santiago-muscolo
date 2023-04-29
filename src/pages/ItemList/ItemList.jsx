import { mockFetch } from "../../Hooks/mockFetch";
import { useEffect, useState } from "react";
import { Item } from "../../components/Item/Item";


export function Contenedor ({productos}){

    return(
        <div className="container">
            {
                productos.length !== 0 ?
                productos && productos.map(producto => <Item key = {producto.id} producto = {producto}/>
                                    )
                :
                    <h2>...cargando</h2>
            }
        </div>
    )
}