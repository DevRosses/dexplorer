const LISTAME_POKEMONES = 'LISTAME_POKEMONES'
const GUARDAME_POKEMON = 'GUARDAME_POKEMON'
const ELIMINADE_FAVORITOS = 'ELIMINADE_FAVORITOS'
const FAVORITOS_RECUPERADOS = 'FAVORITOS_RECUPERADOS'

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case LISTAME_POKEMONES:
      return { ...state, pokemones: payload };
    case GUARDAME_POKEMON:
      return { ...state, favoritos: [...state.favoritos, payload] };

    //con FILTER
    case ELIMINADE_FAVORITOS:
      return { ...state, favoritos: payload };

    case FAVORITOS_RECUPERADOS:
      return { ...state, favoritos: payload };
    default:
      return state;
  }
}