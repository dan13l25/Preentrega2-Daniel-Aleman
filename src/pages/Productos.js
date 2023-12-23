/*import React from "react";
import { useDetalle } from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";
import "./Productos.css"

export const Productos = () => {
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
};*/




/*import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { getDocs, collection, query, limit } from "firebase/firestore";
import { db } from "../config/firebase";

const DetalleContext = createContext();

export const Productos = ({ children }) => {
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

//export const useDetalle = () => useContext(DetalleContext);*/
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Productos.css"



function Productos() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (itemList.length === 0) {
        const itemsCollectionRef = collection(db, "producto");
        const data = await getDocs(itemsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setItemList(filteredData);
        console.log("Data from Firebase:", filteredData);
      }
    };

    fetchData();
  }, [itemList]); 

  return (
    <div className="gridContainerStyle">
    {itemList.map((item) => (
      <div key={item.id} className="itemStyle">
        <h2>{item.title}</h2> 
        <img src={item.image} alt={item.title} className="imageStyle"/>
        <h3>$ {item.price}</h3>
        <Link to={`/producto/${item.id}`}>Detalle del producto</Link>
      </div>
    ))}
  </div>
  );
}

export default Productos;