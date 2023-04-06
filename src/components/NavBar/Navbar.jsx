import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <>
            <div className="Navbar">
                <img className="Logo" src="../../../imagenes/logo.png" alt="" />
                <Link to= '/' className="a__presentacion">Moukkai Manga-Store</Link>
                <ul className='list'>
                    <Link to='/category/Shōnen' className="link"><li>Shōnen</li></Link>
                    <Link to='/category/Seinen' className="link"><li>Seinen</li></Link>
                    <Link to='/category/Kodomo' className="link"><li>Kodomo</li></Link>
                    <Link to='/category/Shōjo' className="link"><li>Shōjo</li></Link>
                </ul>
                <div className="cartContainer">
                <Link to= '/cart' className=".cart">
                    <CartWidget />
                </Link>
                </div>
            </div>
        </>
    )
}

