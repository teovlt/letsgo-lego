import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteAuction } from '../../redux/actions/auctions.action'
import AuctionCard from '../AuctionCard'
import Confirmation from '../Confirmation'
import { AuctionsContainer, Button, CtaHeader, Header, Subtitle, Title } from './ProfilElements'

function Auctions({ user }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)
    const auctionsData = useSelector(state => state.auctions)
    const [displayDeleteConfirmation, setDisplayDeleteConfirmation] = useState({ state: false })

    useEffect(() => {
        displayDeleteConfirmation.state
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto')
    })

    const handleDelete = id => {
        dispatch(deleteAuction(id))
        setDisplayDeleteConfirmation(false)
    }

    return (
        <>
            {Array.from(auctionsData).filter(auction => auction.sellerId === user._id).length > 0 ? (
                <>
                    <Header>
                        <Title>Mes ventes</Title>
                    </Header>
                    <AuctionsContainer>
                        {Array.from(auctionsData)
                            .filter(auction => auction.sellerId === userData._id)
                            .map((auction, index) => {
                                return (
                                    <AuctionCard
                                        key={index}
                                        id={auction._id}
                                        deleteAction={() =>
                                            setDisplayDeleteConfirmation({ state: true, auction: auction })
                                        }
                                    />
                                )
                            })}
                    </AuctionsContainer>
                </>
            ) : (
                <CtaHeader>
                    <Title>Il y a de l'argent qui dort dans vos greniers !</Title>
                    <Subtitle>Vendez vos Lego facilement en un minimum de temps.</Subtitle>
                    <Button onClick={() => navigate('/vendre')}>Commencer à vendre</Button>
                </CtaHeader>
            )}

            {displayDeleteConfirmation.state && (
                <Confirmation
                    title={`Souhaitez vous vraiment supprimer "${displayDeleteConfirmation.auction.name}"`}
                    subtitle='Cette action est irréversible'
                    cta='Supprimer'
                    toggleDisplay={() => setDisplayDeleteConfirmation({ state: false })}
                    action={() => handleDelete(displayDeleteConfirmation.auction._id)}
                />
            )}
        </>
    )
}

export default Auctions
