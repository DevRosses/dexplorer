import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { Link } from "react-router-dom";
import '../assets/estilos/favorito.css'


// lista de pokemons favoritos
function Favorito(props) {
  const { name, url , id } = props;
  const { eliminaDeFavoritos } = useContext(Contexto);
  
  let urlCortada = url.split('/')

  const handleEliminar = ()=>{
    let hijo = {name:name , url:url ,id:id}
    eliminaDeFavoritos( hijo )
}

  return (
    <>
    <div className="favorito">
      <Link to={'/pokemones/'+ urlCortada[6]} > {name} </Link>
        <button onClick={handleEliminar}>Eliminar Fav</button>
      </div>
    </>
  );
}

export default Favorito;
