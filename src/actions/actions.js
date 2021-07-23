import { types } from "../types/types";
import { db, firebase, googleAuthProvider } from "../firebase/firebaseConfig";


export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}

export const loginGoogle = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

export const registroPersona = (nombre, apellido, email, telefono) => {
    return async (dispatch) => {

        const nuevosRegistros = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono
        }

        await db.collection(`Registro`).add(nuevosRegistros);

        console.log(nombre, apellido, email, telefono);
        dispatch(registro(nombre, apellido, email, telefono))
    }
}

export const registro = (nombre, apellido, email, telefono) => {
    return {
        type: types.Registrar,
        payload: {
            nombre,
            apellido,
            email,
            telefono
        }
    }
}

export const adicionarPelicula = (nombrePelicula, image, sipnosis) => {
    return async (dispatch) => {

        const nuevasPeliculas = {
            nombrePelicula: nombrePelicula,
            image: image,
            sipnosis: sipnosis
        }

        await db.collection(`Peliculas`).add(nuevasPeliculas);

        console.log(nombrePelicula, image, sipnosis);
        dispatch(registro(nombrePelicula, image, sipnosis))
    }
}

export const adicionar = (nombrePelicula, image, sipnosis) => {
    return {
        type: types.Adicionar,
        payload: {
            nombrePelicula,
            image,
            sipnosis
        }
    }
}

export const listarPeliculas = () => {
    return async (dispatch) => {
        const data = await db.collection(`Peliculas`).get();
        const pelicula = []
        console.log(data);

        data.forEach(ele => {
            pelicula.push({
                ...ele.data()
            })
        })
        console.log(pelicula)
        dispatch(listar(pelicula))
    }
}


export const listar = (peliculas) => {
    return {
        type: types.Listar,
        payload: peliculas
    }
}

