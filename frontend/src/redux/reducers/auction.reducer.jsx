import { GET_AUCTION, PLACE_A_BID } from '../actions/auction.action'

const initialState = {}

export default function auctionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_AUCTION:
            return action.payload
        case PLACE_A_BID:
            return action.payload
        default:
            return state
    }
}
