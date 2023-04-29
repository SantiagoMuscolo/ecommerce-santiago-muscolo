import { useState } from "react"
import { Link } from "react-router-dom"
import { Checkout } from "../Checkout/Checkout"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"

export const CartForm = () => {
    const [form, setForm] = useState(JSON.parse(localStorage.getItem('form')) || [])
    const [formData, setFormData] = useState('')
    const [confirm, setConfirm] = useState(false)
    const { cartlist } = useCartContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formValues = new FormData(e.target);
        const newForm = {
            name: formValues.get('name'),
            email: formValues.get('mail'),
            repeatEmail: formValues.get('repeatEmail'),
            adress: formValues.get('adress'),
            comments: formValues.get('comments')
        }
        localStorage.setItem('form', JSON.stringify(form))
        setForm(newForm)

        const order = {
            buyer: form,
            items: cartlist,
        }

        const db = getFirestore()

        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
            .then(resp => setFormData(resp.id))
            setConfirm(true)

    }

    return (
        <>
        { confirm ? <p className="checkout">Gracias por tu compra tu numero de orden es :  {formData}</p> : 
        <div className="cartForm">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Ingrese su nombre y apellido" required/>
                <input type="mail" name="mail" placeholder="Ingrese su mail" required/>
                <input type="mail" name="repeatEmail" placeholder="Repita su mail" required/>
                <input type="text" name="adress" placeholder="Ingrese su direccion" required/>
                <input type="text" name="comments" placeholder="espacio habilitado para comentarios sobre la compra y/o envio" className="text"/>
                <button className="confirmarCompra">Confirmar</button>
            </form>
        </div>
        }
        </>
    )
}