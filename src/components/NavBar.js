import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="galeria">Galeria</Link>
                <Link to="productos">Productos</Link>
            </div>
        </nav>
    )
}

export default NavBar