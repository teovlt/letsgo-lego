import { GET_AUCTIONS, DELETE_AUCTION } from '../actions/auctions.action'

const initialState = {}

export default function auctionsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_AUCTIONS:
            return action.payload
        case DELETE_AUCTION:
            return state.filter(auction => auction._id !== action.payload)
        default:
            return state
    }
}
