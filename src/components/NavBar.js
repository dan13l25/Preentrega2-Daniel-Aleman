import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  return (
    <nav>
      <div className="navegacion">
        <Link to="/">Home</Link>
        <Link to="galeria">Ordenes</Link>
        <Link to="productos">Productos</Link>
      </div>
      <div className="ingreso">
        {user ? (
          <>
            <span className='usuario'>{`Usuario: ${user.email}`}</span>
            <button className='logout' onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="Signup">Registrarse</Link>
            <Link to="Login">Ingresar</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;