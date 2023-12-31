/*import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import { DetalleProvider } from "./ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <DetalleProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="galeria" element={<Galeria />} />
              <Route path="productos" element={<Productos />} />
              <Route path="productos/:productoId" element={<Detalle />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </DetalleProvider>
  );
}

export default App;*/
import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import  Productos  from "./pages/Productos"; 
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import "./App.css";
import  Login  from "./components/Login";
import  Signup  from "./components/Signup";
import DetallesProducto from "./ItemListContainer/ItemListContainer";
import { CartProvider } from "./Context/CartContext";


function App() {
  return (
        <div>
          <BrowserRouter>
            <CartProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="galeria" element={<Galeria />} />
                <Route path="productos" element={<Productos />} />
                <Route path="/productos/:id" component={<DetallesProducto />} /> 
                <Route path="*" element={<Error />} />
                <Route path="Signup" element={<Signup/>} />
                <Route path="Login" element={<Login/>} />
              </Route>
            </Routes>
            </CartProvider>
          </BrowserRouter>
        </div>
  );
}

export default App;


