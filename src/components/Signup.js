/*import React, { useState } from "react";
import { auth, db } from "../config/firebase";
import { Link } from "react-router-dom";

/*export const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const cred = userCredential.user;
      await db.collection("SignedupUserData").doc(cred.uid).set({
        name: name,
        email: email,
        password: password,
      });
      alert("Cuenta creada correctamente");
      setName("");
      setEmail("");
      setPassword("");
      props.history.push("/login");
    } catch (error) {
      alert("Error al crear la cuenta");
      console.error(error);
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
        <input
          type="text"
          className="form-controll"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <label htmlFor="Email">Correo</label>
        <br />
        <input
          type="email"
          className="form-controll"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <label htmlFor="Password">Contraseña</label>
        <br />
        <input
          type="password"
          className="form-controll"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button
          type="submit"
          className="btn btn-success btn-md mybtn"
          onClick={submit}
        >
          Registrarse
        </button>
      </form>
      <br />
      <span>
        Ya tienes una cuenta. Ingresa <Link to="/login">Here</Link>
      </span>
    </div>
  );
};*/

/*

export const Signup = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const submit = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
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
          Si ya tienes una cuenta. Ingresa
          <Link to="/Login"> Here</Link>
        </span>
      </div>
    );
  };*/







  import { useState } from "react";
  import {auth,googleProvider } from "../config/firebase";
  import { createUserWithEmailAndPassword , signInWithPopup , signOut } from "firebase/auth";
  
  function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
  
    const handleSignup = async (e) => {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password, name);
    };
  
    const handleSignInWithGoogle = async () => {
      await signInWithPopup(auth, googleProvider);
    };
  
    const handleLogout = async () => {
      await signOut(auth);
    };
  
    return (
      <div>
        <span>Usuario: {auth?.currentUser?.email}</span>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Registrate</button>
        </form>
  
        <button onClick={handleSignInWithGoogle}>Ingresar con Google</button>
        <br />
        <button onClick={handleLogout}>LogOut</button>
      </div>
    );
  }
  
  export default Signup;