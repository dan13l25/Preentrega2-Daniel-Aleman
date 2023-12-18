/*import { getDocs, collection } from "firebase/firestore";
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
<button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
            }
        </div>
    )
}

*/
import React from "react";
import { useDetalle } from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

export const Productos = () => {
  const { products } = useDetalle();

  return (
    <>
      {products.length !== 0 && <h1>Products</h1>}
      <div className='products-container'>
        {products.length === 0 && <div>slow internet...no products to display</div>}
        {products.map((product) => (
          <div className='product-card' key={product.id}>
            <div className='product-img'>
              <img src={product.image} alt="not found" />
            </div>
            <div className='product-name'>{product.title}</div>
            <div className='product-price'>Rs {product.price}.00</div>
            <Link to={`/productos/${product.id}`}>Precio y detalle</Link>
          </div>
        ))}
      </div>
    </>
  );
};