import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="navegacion">
                <Link to="/">Home</Link>
                <Link to="galeria">Galeria</Link>
                <Link to="productos">Productos</Link>
            </div>
            <div className="ingreso">
                
            </div>
        </nav>
    )
}

export default NavBar