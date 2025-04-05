import axios from 'axios'
import { socket } from '../../io/socket.config'

export const GET_AUCTIONS = 'GET_AUCTIONS'
export const DELETE_AUCTION = 'DELETE_AUCTION'

export const getAuctions = () => {
    return async dispatch => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}api/auction`)
            return dispatch({ type: GET_AUCTIONS, payload: res.data })
        } catch (err) {
            return console.log(err)
        }
    }
}

export const deleteAuction = id => {
    return async dispatch => {
        try {
            const res = await axios.delete(`${import.meta.env.VITE_API_URL}api/auction/${id}`)
            socket.emit('deleteAuction')
            return dispatch({ type: DELETE_AUCTION, payload: id })
        } catch (err) {
            return console.log(err)
        }
    }
}
