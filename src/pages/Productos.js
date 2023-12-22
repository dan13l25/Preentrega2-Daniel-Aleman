

import React from "react";
import { useDetalle } from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";
import "./Productos.css"

export const Productos = () => {
  const { products } = useDetalle();
  

  return (
    <>
      {products.length !== 0 && <h1>Products</h1>}
      <div className='producto'>
        {products.length === 0 && <div>slow internet...no products to display</div>}
        {products.map((product) => (
          <div  key={product.id}>
            <div className='product-img'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='product-name'>{product.title}</div>
            <div className='product-price'>$ {product.price}</div>
            <Link to={`/detalle/${product.id}`}>Precio y detalle</Link>
          </div>
        ))}
      </div>
    </>
  );
};


/*import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/Firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "products", itemId);
    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        product && <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;*/