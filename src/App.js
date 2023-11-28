import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import "./App.css"
import Detalle from "./pages/Detalle";

function App (){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>} />
                        <Route path="galeria" element={<Galeria/>}/>
                        <Route path="productos" element={<Productos/>}/>
                        <Route path="productos/:productoId" element={<Detalle/>}/>
                        <Route path="*" element= {<Error/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App