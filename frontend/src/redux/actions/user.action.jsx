import axios from 'axios'
import { socket } from '../../io/socket.config'

export const GET_USER = 'GET_USER'
export const UPLOAD_PICTURE = 'UPLOAD_PICTURE'
export const UPDATE_BIO = 'UPDATE_BIO'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

export const getUser = uid => {
    return async dispatch => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}api/user/${uid}`)
            return dispatch({ type: GET_USER, payload: res.data })
        } catch (err) {
            return console.log(err)
        }
    }
}

export const uploadPicture = (data, id) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}api/user/${id}/upload`, data)
            try {
                const res_1 = await axios.get(`${import.meta.env.VITE_API_URL}api/user/${id}`)
                socket.emit('updateUser')
                return dispatch({ type: UPLOAD_PICTURE, payload: res_1.data.picture })
            } catch (err) {
                return console.log(err)
            }
        } catch (err) {
            return console.log(err)
        }
    }
}

export const updateBio = (id, bio) => {
    return async dispatch => {
        try {
            const res = await axios.put(`${import.meta.env.VITE_API_URL}api/user/${id}`, { bio })
            socket.emit('updateUser')
            return dispatch({ type: UPDATE_BIO, payload: bio })
        } catch (err) {
            return console.log(err)
        }
    }
}

export const addToFavourites = (id, idToAdd) => {
    return async dispatch => {
        try {
            const res = await axios.patch(`${import.meta.env.VITE_API_URL}api/user/${id}/fav`, { idToAdd })
            return dispatch({ type: ADD_TO_FAVOURITES, payload: idToAdd })
        } catch (err) {
            return console.log(err)
        }
    }
}

export const removeFromFavourites = (id, idToRemove) => {
    return async dispatch => {
        try {
            const res = await axios.patch(`${import.meta.env.VITE_API_URL}api/user/${id}/unfav`, { idToRemove })
            return dispatch({ type: REMOVE_FROM_FAVOURITES, payload: idToRemove })
        } catch (err) {
            return console.log(err)
        }
    }
}
