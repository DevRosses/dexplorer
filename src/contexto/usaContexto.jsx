import Contexto from '../contexto/Contexto';
import Reducer from './Reducer';
import { useReducer } from 'react';
import axios from 'axios'
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
    }

    // funcion de prueba:
    const saludar = (nombre => {
        alert('Hola' + { nombre })
    })
    // reducer: es la función que se encarga de actualizar el estado.
    // recibe dos parametros, el  estado anterior y el acction dispatched:
    //  crear el reducer:
    const [state, dispatch] = useReducer(Reducer, estadoInicial)

    // buscar la lista  de pokemones:
    const traemePokemones = async () => {
        console.log('Pokemones INICIO: ')
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        dispatch({ type: 'LISTAME_POKEMONES', payload: res.data.results })
    }

    // agregar a favorito:
    const guardamePokemon = (item) => {
        console.log('guardamePokemon ANTES: ', state.favoritos)
        dispatch({ type: 'GUARDAME_POKEMON', payload: item })
    }

    // eliminar del favorito:
    const eliminaDeFavoritos = (id) => {
        console.log('eliminaDeFavoritos ANTES: ', state.favoritos)
        // filtramos por id para encontrar al item a borrar 
        const nuevoArreglo = state.favoritos.filter((itemActual) => itemActual.name !== id)
        console.log('que hace nuevo arreglo', nuevoArreglo)
        dispatch({ type: "ELIMINADE_FAVORITOS", payload: nuevoArreglo })
        console.log('eliminaDeFavoritos DESPUES: ', state.favoritos)
    }
    console.log('guardamePokemon DESPUES: ', state.favoritos)

    return (
        <Contexto.Provider value={{ saludar, traemePokemones, guardamePokemon, eliminaDeFavoritos, pokemones: state.pokemones, favoritos: state.favoritos }}> {children} </Contexto.Provider>
    );
}

export default usarContexto;