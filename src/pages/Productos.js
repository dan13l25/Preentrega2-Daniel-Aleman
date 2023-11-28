import listaProductos from "../data";
import "./Productos.css"

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
                            <p>Link</p>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos;