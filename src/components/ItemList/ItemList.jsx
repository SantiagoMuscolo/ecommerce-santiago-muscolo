import { mockFetch } from "../../customFetch/mockFetch";
import { useEffect, useState } from "react";
import { Item } from "../Item/Item";


export function Contenedor ({productos}){

    return(
        <div className="container">
            {
                productos.length !== 0 ?
                productos.map(producto => <Item key = {producto.id} producto = {producto}/>
                                    )
                :
                    <h2>...cargando</h2>
            }
        </div>
    )
}