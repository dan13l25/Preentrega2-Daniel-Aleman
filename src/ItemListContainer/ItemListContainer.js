/*import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { getDocs, collection, query, limit } from "firebase/firestore";
import { db } from "../config/firebase";

const DetalleContext = createContext();

export const DetalleProvider = ({ children }) => {
  const itemCollectionRef = useMemo(() => collection(db, "producto"), []); 
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const getItemList = async () => {
      const queryLimited = query(itemCollectionRef, limit(10));

      try {
        const data = await getDocs(queryLimited);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItemList(filteredData);

        console.log("Lista de productos:", filteredData);
      } catch (error) {
        console.error("Error al obtener la lista de productos:", error.message);
      }
    };

    getItemList();
  }, [itemCollectionRef]);

  return (
    <div>
      <DetalleContext.Provider value={{ products: itemList }}>
        {children}
      </DetalleContext.Provider>
    </div>
  );
};

export const useDetalle = () => useContext(DetalleContext);*/





/*import React from "react";
import { useDetalle } from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";
import "./Productos.css"

export const DetalleProvider = () => {
  const { products } = useDetalle();
  
  console.log("Products:", products)
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

export const useDetalle = () => useContext(DetalleContext);*/




import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

const DetallesProducto = ({ match }) => {
  const productId = match.params.id;
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      const productRef = collection(db, "producto", productId);
      const productDoc = await getDocs(productRef);

      if (productDoc.exists()) {
        setProductDetails({
          id: productDoc.id,
          ...productDoc.data(),
        });
      } else {
        // Manejar el caso en el que el producto no existe
        console.log("Producto no encontrado");
      }
    };

    getProductDetails();
  }, [productId]);

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {productDetails ? (
        <div>
          <h2>{productDetails.title}</h2>
          <img src={productDetails.image} alt={productDetails.title} />
          <h3>$ {productDetails.price}</h3>
          {/* Puedes mostrar otros detalles del producto aquí */}
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
      <Link to="/productos">Volver a la lista de productos</Link>
    </div>
  );
};

export default DetallesProducto;