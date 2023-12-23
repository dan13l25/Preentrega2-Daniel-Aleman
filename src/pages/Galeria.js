import React, { useState } from 'react';
import { db } from '../config/firebase';
import "../css/Galeria.css"

function Galeria() {
  const [mensaje, setMensaje] = useState('');
  const [sabor, setSabor] = useState('');
  const [largo, setLargo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('pasteles').add({
        mensaje,
        sabor,
        largo,
      });

      setMensaje('');
      setSabor('');
      setLargo('');

      alert('Pedido enviado correctamente');
    } catch (error) {
      console.error('Error al enviar el pedido:', error);
    }
  };

  return (
    <div className="galeria-container">
      <h1>Haz tu pedido de pastel</h1>
      <p>¡Nuestros deliciosos pasteles están listos para ser personalizados según tus preferencias!</p>
      <form className="pedido-form" onSubmit={handleSubmit}>
        <label>
          Mensaje:
          <input type="text" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        </label>
        <br />
        <label>
          Sabor:
          <input type="text" value={sabor} onChange={(e) => setSabor(e.target.value)} />
        </label>
        <br />
        <label>
          Largo:
          <input type="text" value={largo} onChange={(e) => setLargo(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar Pedido</button>
      </form>
    </div>
  );
}

export default Galeria;