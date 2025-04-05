import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { socket } from '../../io/socket.config'
import { getAuctions } from '../../redux/actions/auctions.action'
import AuctionCard from '../AuctionCard'
import { AuctionsContainer, Button, CtaHeader, Header, Subtitle, Title } from './ProfilElements'

function Bids({ user }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auctionsData = useSelector(state => state.auctions)

    // socket config
    useEffect(() => {
        socket.on('updateAuction', () => {
            dispatch(getAuctions())
        })
    }, [socket])

    return (
        <>
            {Array.from(auctionsData).filter(auction => {
                return auction.bids.some(bid => bid.biderId === user._id)
            }).length > 0 ? (
                <>
                    <Header>
                        <Title>Mes enchères</Title>
                    </Header>
                    <AuctionsContainer>
                        {Array.from(auctionsData)
                            .filter(auction => {
                                return auction.bids.some(bid => bid.biderId === user._id)
                            })
                            .map((auction, index) => {
                                return <AuctionCard key={index} id={auction._id} user={user} method='BIDS' />
                            })}
                    </AuctionsContainer>
                </>
            ) : (
                <CtaHeader>
                    <Title>Vos futurs Lego vous attendent !</Title>
                    <Subtitle>Trouvez des Lego facilement et au meilleur prix.</Subtitle>
                    <Button onClick={() => navigate('/explorer/ensembles')}>Explorer</Button>
                </CtaHeader>
            )}
        </>
    )
}

export default Bids
