import React, { useState } from "react";
import { auth,googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "../css/Signup.css"; 


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  };
  const handleSignInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          className="login-field"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="login-field"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="login-button" type="submit">Iniciar sesión</button>
        <br />
        <button className="google-login-button" onClick={handleSignInWithGoogle}>Ingresar con Google</button>
        <br />
      </form>
    </div>
  );
}

export default Login;