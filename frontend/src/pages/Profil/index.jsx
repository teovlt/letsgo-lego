import React, { useContext, useState } from 'react'
import { UidContext } from '../../components/AppContext'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Log from '../../components/Log'
import axios from 'axios'
import cookie from 'js-cookie'
import { Nav, NavButton, NavContainer, TabNavLink } from './ProfilElements'
import { useNavigate, useParams } from 'react-router-dom'
import UpdateProfil from '../../components/Profil/UpdateProfil'
import Bids from '../../components/Profil/Bids'
import Auctions from '../../components/Profil/Auctions'
import { useSelector } from 'react-redux'
import BackButton from '../../components/BackButton'
import { Container } from '../../components/Container'

const tabs = [
    { id: 'profil', label: 'Mon profil' },
    { id: 'encheres', label: 'Mes enchères' },
    { id: 'ventes', label: 'Mes ventes' },
]

const Profil = () => {
    const userData = useSelector(state => state.user)
    const uid = useContext(UidContext)
    const navigate = useNavigate()

    const { tabId } = useParams()
    const currentTab = tabs.find(tab => tab.id === tabId)

    const logout = () => {
        axios({
            method: 'get',
            url: `${import.meta.env.VITE_API_URL}api/user/logout`,
            withCredentials: true,
        })
            .then(() => {
                removeCookies('jwt')
                window.location = '/'
            })
            .catch(err => console.log(err))
    }

    const removeCookies = key => {
        if (window !== 'undefined') cookie.remove(key, { expires: 1, sameSite: 'Lax' })
    }

    return (
        <>
            {uid ? (
                <>
                    <Navbar />
                    <Container>
                        <BackButton icon='ArrowLeft' label='Retour' onClick={() => navigate(-1)} />
                        <NavContainer>
                            <Nav>
                                {tabs.map((tab, index) => (
                                    <TabNavLink
                                        key={index}
                                        className={currentTab && currentTab.id === tab.id && 'active'}
                                        to={`/dashboard/${tab.id}`}>
                                        {tab.label}
                                    </TabNavLink>
                                ))}
                                <NavButton onClick={logout}>Deconnexion</NavButton>
                            </Nav>
                        </NavContainer>
                        {currentTab && currentTab.id === 'profil' && <UpdateProfil user={userData} />}
                        {currentTab && currentTab.id === 'encheres' && <Bids user={userData} />}
                        {currentTab && currentTab.id === 'ventes' && <Auctions user={userData} />}
                    </Container>
                    <Footer />
                </>
            ) : (
                <Log signin={true} signup={false} />
            )}
        </>
    )
}

export default Profil
