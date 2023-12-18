import React, { createContext, useContext, useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

const DetalleContext = createContext();

export const DetalleProvider = ({ children }) => {
  const itemCollectionRef = collection(db, "producto");
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const getItemList = async () => {
      const data = await getDocs(itemCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItemList(filteredData);
    };

    getItemList();
  }, [itemCollectionRef]);

  return (
    <DetalleContext.Provider value={{ products: itemList }}>
      {children}
    </DetalleContext.Provider>
  );
};

export const useDetalle = () => useContext(DetalleContext);

/*function Detalle() {
  /*const itemCollectionRef = collection(db, "producto");

  const [itemList, setItemList] = useState ([])
  const categoria = useParams().categoria*/
  
  /*useEffect(()=>{
      const getItemList = async () =>{
          const data = await getDocs(itemCollectionRef);
          const filteredData = data.docs.map( (doc)=>({
              ...doc.data(), 
              id:doc.id
          }))
          setItemList(filteredData)
      }
      getItemList();
  }, [categoria])*/
  

  /*return (
      <div>
        {itemList.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <h3>{item.description}</h3>
            <img src={item.image} alt={item.title} />
            <p>{item.stock}</p>
          </div>
        ))}
        <Link to="/productos">Volver</Link>
      </div>
    );
    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect (()=>{
      const docRef = doc(db, "producto", id)
      getDoc(docRef)
          .then((resp)=>{
              setItem(
                  { ...resp.data(), id:resp.id}
              )
          })
    }, [id])
}
return(
  <div>
      {item && <listaProductos item={item}/>}
      <Link to="/productos">Volver</Link>
  </div>
)
export default Detalle;*/