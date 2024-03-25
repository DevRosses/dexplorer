import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { Link } from "react-router-dom";
import "../assets/estilos/favorito.css";
import Borrar from "../assets/estaticos/del.png";

// lista de pokemons favoritos
function Favorito(props) {
  const { name, url } = props;
  const { eliminaDeFavoritos } = useContext(Contexto);
 const [pokemon, setPokemon] = useState();

  // obtener el pokemon completo para mostrar en la tarjeta
  let urlCortada = url.split("/");

  const handleEliminar = () => {
    let hijo = { name: name, url: url, id: name };
    eliminaDeFavoritos(hijo);
  };

  const traemePokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + urlCortada[6] + "/";

    //solicito  los datos al API y guardo en estado
    const res = await axios.get(url);
    setPokemon(res.data);
  };

  useEffect(() => {
    traemePokemon();
  }, []);

  
  return (
    <>
    <div className="favorito">
    <img
          className="img-card"
          src={pokemon?.sprites.other.dream_world.front_default}
          alt={name}
        />

<div className="card">
        <div className="yellow"></div>
        <div className="nombre-pokemon">
          <Link className='text-link' to={"/pokemones/" + urlCortada[6]}> {name} </Link>
          <img
            className="fav"
            src={Borrar}
            alt="favorito"
            onClick={handleEliminar}
          />
        </div>
        </div>
      </div>
      
    </>
  );
}

export default Favorito;
