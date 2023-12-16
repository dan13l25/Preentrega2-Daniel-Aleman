/*import listaProductos from "../components/data";
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

export default Productos;*/

import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Productos.css"

function Productos(){
    const itemCollectionRef = collection(db,"producto")
    const [itemList, setItemList] = useState([])
    
    useEffect(()=>{
        const getItemList = async ()=>{
            const data = await getDocs(itemCollectionRef)
            const filteredData = data.docs.map( (doc)=>({
                ...doc.data(),
                id:doc.id
            })) 
            setItemList(filteredData)
        }
        getItemList()
    },[])

    return (
        <div className="producto">
            {itemList.map((item)=>(
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src= {item.image} alt={item.title} />
                    <Link to={`/productos/${item.id}`}>Precio y detalle</Link>
                </div>
                
            ))

            }
        </div>
    )
}

export default Productos