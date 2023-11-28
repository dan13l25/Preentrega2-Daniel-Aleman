import { useParams, Link } from "react-router-dom"
import listaProductos from "../data";

function Detalle() {
    const { productoId } = useParams();
    const detalle = listaProductos.find((producto) => producto.id == productoId);
  
    // Verificar si 'detalle' está definido
    if (!detalle) {
      return <p>Producto no encontrado</p>;
    }
  
    // Desestructurar 'detalle' solo si está definido
    const {image, title, price, description} = detalle;
  
    return (
      <div>
        <h2>Precios de los productos</h2>
        <img src={image} alt={title} />
        <h2>{title} </h2>
        <h2>{price} </h2>
        <h2>{description}</h2>
        <Link to="/productos">Volver</Link>
      </div>
    );
  }

 export default Detalle 