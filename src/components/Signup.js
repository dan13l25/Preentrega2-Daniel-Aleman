import React, { useState } from "react";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";

/*export const Signup = (props) =>{

    const[name, setName]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    //const[error, setError]= useState("")

    const submit = (e)=>{
        e.preventDefault()
        try {
            const user =  firebase.auth().createUserWithEmailAndPassword(email, password)
            if(user)
            {
                alert("cuenta creada correctamente")
            }
        } catch (error) {
            alert("error")
        }
        console.log("regirtrado")
        auth.createUserWithEmailAndPassword(email, password)(email, password).then((cred)=>{
            db.collection("SignedupUserData").doc(cred.user.uid).set({
                name:name,
                email:email,
                password:password
            }).then(()=>{
                setName("")
                setEmail("")
                setPassword("")
                props.history.push("/login")
            }).catch(err=>setError(err.message))
        }).catch(err=>setError(err.message))
        return(
        <div className="contenedor">
            <br/>
            <h2>Ingrese sus datos</h2>
            <hr/>
            <form autoComplete="off" onSubmit={Signup}>
                <label htmlFor="Name">Nombre</label>
                <br/>
                <input type="text" className="form-controll" required onChange={(e)=>setName(e.target.value)} value={name}/>
                <br/>
                <label htmlFor="Email">Correo</label>
                <br/>
                <input type="email" className="form-controll" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <br/>
                <label htmlFor="Password">Contraseña</label>
                <br/>
                <input type="password" className="form-controll" required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <br/>
                <button type="submit" className="btn btn-succes btn-mdmybtn" onClick={submit}>Registrarse</button>
            </form> 
            <br/>
            <span>Ya tienes una cuenta. Ingresa
                <Link to="login"> Here</Link>
            </span>
        </div>
    )
    }
    
}*/
export const Signup = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const submit = async (e) => {
      e.preventDefault();
      try {
        const user = await auth.createUserWithEmailAndPassword(email, password);
        if (user) {
          alert("Cuenta creada correctamente");
        }
      } catch (error) {
        alert("Error al crear la cuenta");
      }
    };
  
    return (
      <div className="contenedor">
        <br />
        <h2>Ingrese sus datos</h2>
        <hr />
        <form autoComplete="off" onSubmit={submit}>
          <label htmlFor="Name">Nombre</label>
          <br />
          <input type="text" className="form-controll" required onChange={(e) => setName(e.target.value)} value={name} />
          <br />
          <label htmlFor="Email">Correo</label>
          <br />
          <input type="email" className="form-controll" required onChange={(e) => setEmail(e.target.value)} value={email} />
          <br />
          <label htmlFor="Password">Contraseña</label>
          <br />
          <input type="password" className="form-controll" required onChange={(e) => setPassword(e.target.value)} value={password} />
          <br />
          <button type="submit" className="btn btn-succes btn-mdmybtn">
            Registrarse
          </button>
        </form>
        <br />
        <span>
          Ya tienes una cuenta. Ingresa
          <Link to="login"> Here</Link>
        </span>
      </div>
    );
  };