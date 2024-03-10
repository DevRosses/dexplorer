import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../contenedores/Home';
import Lista from '../contenedores/Lista'
import Detalle from '../contenedores/Detalle'
import Layout from "../componentes/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Lista />}></Route>
          <Route path="/pokemones/*" element={<Detalle />}></Route>
          <Route path="/*" element={'Error 404'}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>);
}

export default App; 