import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { NavContainer, Nav, Title, Header, CtaHeader, Subtitle, FavContainer, Button } from './FavouritesElements'
import { useNavigate, useParams } from 'react-router-dom'
import { UidContext } from '../../components/AppContext'
import { useDispatch, useSelector } from 'react-redux'
import Seller from '../../components/Seller'
import Log from '../../components/Log'
import { TabNavLink } from '../Profil/ProfilElements'
import { socket } from '../../io/socket.config'
import { getUsers } from '../../redux/actions/users.action'
import { getAuctions } from '../../redux/actions/auctions.action'
import BackButton from '../../components/BackButton'
import { Container } from '../../components/Container'
import AuctionCard from '../../components/AuctionCard'

const tabs = [
    { id: 'ventes', label: 'Ventes' },
    { id: 'vendeurs', label: 'Vendeurs' },
]

function Favourites() {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)
    const usersData = useSelector(state => state.users)
    const auctionsData = useSelector(state => state.auctions)
    const uid = useContext(UidContext)
    const navigate = useNavigate()

    const { tabId } = useParams()
    const currentTab = tabs.find(tab => tab.id === tabId)

    useEffect(() => {
        socket.on('updateAuctions', () => {
            dispatch(getAuctions())
        })
        socket.on('updateUsers', () => {
            dispatch(getUsers())
        })
    }, [socket])

    const favouritesAuctions =
        userData &&
        auctionsData &&
        Array.from(auctionsData).filter(auction => {
            return (
                userData.favourites &&
                Array.from(userData.favourites).some(favourite => favourite === auction._id && !auction.finished)
            )
        })

    const favouritesSellers =
        userData &&
        usersData &&
        Array.from(usersData).filter(seller => {
            return userData.favourites && Array.from(userData.favourites).some(favourite => favourite === seller._id)
        })

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
                                        to={`/favoris/${tab.id}`}>
                                        {tab.label}
                                    </TabNavLink>
                                ))}
                            </Nav>
                        </NavContainer>
                        {currentTab && currentTab.id === 'ventes' && (
                            <>
                                {favouritesAuctions && favouritesAuctions.length > 0 ? (
                                    <>
                                        <Header>
                                            <Title>Mes ventes favorites</Title>
                                        </Header>
                                        <FavContainer>
                                            {favouritesAuctions.map((auction, index) => {
                                                return <AuctionCard key={index} id={auction._id} />
                                            })}
                                        </FavContainer>
                                    </>
                                ) : (
                                    <CtaHeader>
                                        <Title>Vous n'avez pas encore de favoris.</Title>
                                        <Subtitle>Ajoutez des ventes à vos favoris en parcourant notre marché</Subtitle>
                                        <Button>Parcourir</Button>
                                    </CtaHeader>
                                )}
                            </>
                        )}
                        {currentTab && currentTab.id === 'vendeurs' && (
                            <>
                                {favouritesSellers && favouritesSellers.length > 0 ? (
                                    <>
                                        <Header>
                                            <Title>Mes vendeurs favoris</Title>
                                        </Header>
                                        <FavContainer>
                                            {favouritesSellers.map((seller, index) => {
                                                return <Seller key={index} seller={seller} />
                                            })}
                                        </FavContainer>
                                    </>
                                ) : (
                                    <CtaHeader>
                                        <Title>Vous n'avez pas encore de favoris.</Title>
                                        <Subtitle>
                                            Ajoutez des vendeurs à vos favoris en parcourant notre marché
                                        </Subtitle>
                                        <Button>Parcourir</Button>
                                    </CtaHeader>
                                )}
                            </>
                        )}
                    </Container>
                    <Footer />
                </>
            ) : (
                <Log signin={false} signup={true} />
            )}
        </>
    )
}

export default Favourites
