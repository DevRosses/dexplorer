import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../contenedores/Home';
import Lista from '../contenedores/Lista';
import Detalle from '../contenedores/Detalles';
import Favoritos from  '../contenedores/Favoritos';
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
            <Route path="/*" element={'Error 404'}></Route>
          </Routes>
        </Layout>
      </UsarContexto>
    </BrowserRouter>);
}

export default App; 