import { types } from "../types/types";

export const adicionarReducer = (state = [], action) => {
    switch (action.type) {
        case types.Adicionar:
            return {
                nombrePelicua: action.payload.nombrePelicula,
                image: action.payload.image,
                sipnosis: action.payload.sipnosis,
            }
        case types.Listar:
            return {
                ...state,
                pelicula: [...action.payload]
            }
        default:
            return state;
    }
}