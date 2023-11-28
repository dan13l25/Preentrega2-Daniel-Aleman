import listaProductos from "../data";
import "./Productos.css"
import { Link } from "react-router-dom";

function Productos(){

    return (
        <div>
            <h2>Productos</h2>
            <div className="producto">
                {listaProductos.map((producto)=>{
                    return (
                        <article key={producto.id}>
                            <h4>{producto.title}</h4>
                            <img src={producto.image} alt={producto.title}/>
                            <Link to={`/productos/${producto.id}`}>Precio y detalle</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos;