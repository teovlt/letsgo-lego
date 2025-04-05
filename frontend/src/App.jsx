import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import { UidContext } from './components/AppContext'
import { getUser } from './redux/actions/user.action'
import Routes from './Routes'
import GlobalStyle from './theme/globalStyle'
import CookieConsent from './components/CookieConsent'

function App() {
    const [uid, setUid] = useState(null)
    const dispatch = useDispatch()

    const [cookie, setCookie] = useCookies(['consent'])

    useEffect(() => {
        const fetchToken = () => {
            axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_URL}jwtid`,
                withCredentials: true,
            }).then(res => setUid(res.data))
        }
        fetchToken()

        if (uid) dispatch(getUser(uid))
    }, [uid, dispatch])

    return (
        <UidContext.Provider value={uid}>
            {!cookie.consent && <CookieConsent cookie={cookie} setCookie={setCookie} />}
            <GlobalStyle />
            <Routes />
        </UidContext.Provider>
    )
}

export default App
