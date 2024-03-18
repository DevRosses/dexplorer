const LISTAME_POKEMONES = 'LISTAME_POKEMONES'
const GUARDAME_POKEMON = 'GUARDAME_POKEMON'
const ELIMINADE_FAVORITOS = 'ELIMINADE_FAVORITOS'

export default function Reducer(state, action) {
    const { payload, type } = action
    switch (type) {
        case LISTAME_POKEMONES:
            return { ...state, pokemones: payload }
        case GUARDAME_POKEMON:
            return { ...state, favoritos: [...state.favoritos, payload] }

        //con FILTER
        case ELIMINADE_FAVORITOS:
            return { ...state, favoritos: [...state.favoritos, payload] }
    }
}