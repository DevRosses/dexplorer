import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/estilos/App.css';
import Home from '../contenedores/Home';
import Lista from '../contenedores/Lista';
import Detalle from '../contenedores/Detalles';
import Favoritos from  '../contenedores/Favoritos';
import Favorito from "../componentes/Favorito";
import Layout from "../componentes/Layout";
import UsarContexto from "../contexto/usaContexto";


function App() {
  return (
    <BrowserRouter>
      <UsarContexto>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Lista />}></Route>
            <Route path="/pokemones/*" element={<Detalle />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="/favoritos/*" element={<Favorito />}></Route>
          </Routes>
        </Layout>
      </UsarContexto>
    </BrowserRouter>);
}

export default App; 