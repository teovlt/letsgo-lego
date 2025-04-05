import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { getUsers } from './redux/actions/users.action'
import { getAuctions } from './redux/actions/auctions.action'
import { socket } from './io/socket.config'

store.dispatch(getUsers())
store.dispatch(getAuctions())

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
