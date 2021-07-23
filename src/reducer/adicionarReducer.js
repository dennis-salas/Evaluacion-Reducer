import { types } from "../types/types";

export const registerReducer = (state = [], action) => {
    switch (action.type) {
        case types.Adicionar:
            return {
                nombrePelicua: action.payload.nombrePelicula,
                image: action.payload.image,
                sipnosis: action.payload.sipnosis,
            }
        default:
            return state;
    }
}