import Contexto from "../contexto/Contexto";
import Reducer from "./Reducer";
import { useReducer } from "react";
import axios from "axios";
/* tiene una serie de metodos y un estado inical:
entonces usarContexto
es como un repositorio de datos, donde guardo favoritos, cosas que se van seleccionando y se van a comprar en el carrito, es un repositorio donde voy a mandar la data desde diferentes componentes a que se guarde!!!
*/
function usarContexto(props) {
  const { children } = props;

  // estado inical de los datos:
  const estadoInicial = {
    pokemones: [],
    favoritos: [],
  };

  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  // funcion de prueba:
  const saludar = (nombre) => {
    alert("Hola" + { nombre });
  };
  // reducer: es la función que se encarga de actualizar el estado.
  // recibe dos parametros, el  estado anterior y el acction dispatched:

  // buscar la lista  de pokemones:
  const traemePokemones = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    dispatch({ type: "LISTAME_POKEMONES", payload: res.data.results });
    favoritosRecuperados() 
  };

  // agregar a favorito:
  const guardamePokemon = (item) => {
    dispatch({ type: "GUARDAME_POKEMON", payload: item });
    favoritosLocal();
  };

  const favoritosLocal = () => {
    localStorage.setItem("favoritosLocal", JSON.stringify(state.favoritos));
  };

  const favoritosRecuperados = () => {
    let favoritosRecuperados = JSON.parse(localStorage.getItem("favoritosLocal"));
  if(favoritosRecuperados > 0 ){
    favoritos = favoritosRecuperados;
  }
  console.log("favoritos recuperados: ", favoritosRecuperados);  

  };

  // eliminar del favorito:
  const eliminaDeFavoritos = (item) => {
    const nuevoArreglo = state.favoritos.filter(
      (itemActual) => itemActual.id !== item.id
    );
    dispatch({ type: "ELIMINADE_FAVORITOS", payload: nuevoArreglo });
    favoritosLocal();
  };

  return (
    <Contexto.Provider
      value={{
        saludar,
        traemePokemones,
        guardamePokemon,
        eliminaDeFavoritos,
        pokemones: state.pokemones,
        favoritos: state.favoritos,
        favoritosLocal,
        favoritosRecuperados,
      }}
    >
      {" "}
      {children}{" "}
    </Contexto.Provider>
  );
}

export default usarContexto;
