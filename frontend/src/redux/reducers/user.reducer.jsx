import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, UPDATE_BIO, UPLOAD_PICTURE } from '../actions/user.action'
import { GET_USER } from '../actions/user.action'

const initialState = {}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload
        case UPLOAD_PICTURE:
            return {
                ...state,
                picture: action.payload,
            }
        case UPDATE_BIO:
            return {
                ...state,
                bio: action.payload,
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
            }
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter(favourite => favourite !== action.payload),
            }
        default:
            return state
    }
}
