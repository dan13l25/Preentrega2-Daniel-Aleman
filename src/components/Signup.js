  import { useState } from "react";
  import {auth,googleProvider } from "../config/firebase";
  import { createUserWithEmailAndPassword , signInWithPopup , signOut } from "firebase/auth";
  import "../css/Signup.css"; 
  
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
      <div className="signup-container">
  <span className="user-info">Usuario: {auth?.currentUser?.email}</span>
  <form className="signup-form" onSubmit={handleSignup}>
    <input
      type="text"
      className="input-field"
      placeholder="Nombre"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <br />
    <input
      type="email"
      className="input-field"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <br />
    <input
      type="password"
      className="input-field"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <button className="signup-button" type="submit">
      Registrate
    </button>
  </form>

  <button
    className="google-login-button"
    onClick={handleSignInWithGoogle}
  >
    Ingresar con Google
  </button>
  <br />
  <button className="logout-button" onClick={handleLogout}>
    LogOut
  </button>
</div>
    );
  }
  
  export default Signup;