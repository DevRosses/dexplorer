import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import "../assets/estilos/pokemon.css";
import Fav from "../assets/estaticos/fav.png";


// lista de pokemons
function Pokemon(props) {
  const { name, url } = props;
  const { guardamePokemon } = useContext(Contexto);
  const [pokemon, setPokemon] = useState();

  let urlCortada = url.split("/");

  const handleGuardar = () => {
    let hijo = { name: name, url: url, id: name };
    guardamePokemon(hijo);
  };

  //Busco los datos de cada pokemon
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
      <div className="pokemon">
        
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
            src={Fav}
            alt="favorito"
            onClick={handleGuardar}
          />
        </div>
        </div>

      </div>
    </>
  );
}

export default Pokemon;
