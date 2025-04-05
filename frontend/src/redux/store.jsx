import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import auctionReducer from './reducers/auction.reducer'
import auctionsReducer from './reducers/auctions.reducer'
import userReducer from './reducers/user.reducer'
import usersReducer from './reducers/users.reducer'

export default configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        auction: auctionReducer,
        auctions: auctionsReducer,
    },
    middleware: [thunk],
})
