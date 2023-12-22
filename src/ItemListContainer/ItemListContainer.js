import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
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
  


export const useDetalle = () => useContext(DetalleContext);



