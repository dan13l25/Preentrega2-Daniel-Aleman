import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { getDoc,doc } from "firebase/firestore";
import { db } from "../config/firebase";

function TuComponente() {
  const { id } = useParams();
  const [documento, setDocumento] = useState(null);

  useEffect(() => {
    const obtenerDocumento = async () => {
      try {
        const docRef = doc(db, "tuColeccion", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDocumento(docSnap.data());
        } else {
          console.log("No existe el documento");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      }
    };

    obtenerDocumento();
  }, [id]);

  return (
  <div>
    {documento ? (
      <div>
        <h2>{documento.title}</h2>
        <p>{documento.stock}</p>
      </div>
    ) : (
      <p>Cargando...</p>
    )}
    <Link to="/productos">Volver</Link>
  </div>
);
}


export default TuComponente;

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