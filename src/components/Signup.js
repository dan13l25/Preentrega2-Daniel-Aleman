import React, { useState } from "react";
import { db,auth } from "../config/firebase";
import { Link } from "react-router-dom";

export const Signup = (props) =>{

    const[name, setName]= useState("")
    const[mail, setmail]= useState("")
    const[password, setPassword]= useState("")
    const[error, setError]= useState("")

    const Signup = (e)=>{
        e.preventDefault()
        console.log("regirtrado")
        auth.createUserWithMailAndPassword(mail, password).then((cred)=>{
            db.collection("SignedupUserData").doc(cred.user.uid).set({
                name:name,
                mail:mail,
                password:password
            }).then(()=>{
                setName("")
                setmail("")
                setPassword("")
                props.history.push("/login")
            }).catch(err=>setError(err.message))
        }).catch(err=>setError(err.message))
    }
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
                <input type="email" className="form-controll" required onChange={(e)=>setmail(e.target.value)} value={mail}/>
                <br/>
                <label htmlFor="Password">Contraseña</label>
                <br/>
                <input type="password" className="form-controll" required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <br/>
                <button type="submit" className="btn btn-succes btn-mdmybtn">Registrarse</button>
            </form> 
            {error && <div className="error-msg">{error}</div>}
            <br />
            <span>Ya tienes una cuenta. Ingresa
                <Link to="login"> Here</Link>
            </span>
        </div>
    )
}