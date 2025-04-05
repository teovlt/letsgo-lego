import axios from 'axios'
import { socket } from '../../io/socket.config'

export const GET_AUCTION = 'GET_AUCTION'
export const PLACE_A_BID = 'PLACE_A_BID'

export const getAuction = id => {
    return async dispatch => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}api/auction/${id}`)
            return dispatch({ type: GET_AUCTION, payload: res.data })
        } catch (err) {
            return console.log(err)
        }
    }
}

export const placeABid = (id, biderId, bid) => {
    return async dispatch => {
        try {
            const res = await axios.put(`${import.meta.env.VITE_API_URL}api/auction/${id}/bid`, { biderId, bid })
            socket.emit('bidPlaced')
            try {
                const res_1 = await axios.get(`${import.meta.env.VITE_API_URL}api/auction/${id}`)
                socket.emit('placeABid', id)
                return dispatch({ type: PLACE_A_BID, payload: res_1.data })
            } catch (err_1) {
                return console.log(err_1)
            }
        } catch (err) {
            return console.log(err)
        }
    }
}
