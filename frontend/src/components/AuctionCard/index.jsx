import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    InfoWrapper,
    Label,
    Section,
    Image,
    HGroup,
    Title,
    Row,
    Text,
    SmallRow,
    Button,
} from './AuctionCardElements'
import { useNavigate } from 'react-router-dom'
import { socket } from '../../io/socket.config'
import { getAuctions } from '../../redux/actions/auctions.action'

const AuctionCard = ({ id, deleteAction }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Accéder à l'état 'user'
    const userData = useSelector(state => state.user)
    // Accéder à l'état 'auctions'
    const auctionsData = useSelector(state => state.auctions)
    // Accéder à l'état 'auction'
    const auctionData = auctionsData && Array.from(auctionsData).find(auction => auction._id === id)

    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    // socket config
    useEffect(() => {
        socket.on('updateAuction', auctionId => {
            if (id === auctionId) dispatch(getAuctions())
        })
    }, [socket])

    // hook bloquer le scroll
    useEffect(() => {
        displayDeleteConfirmation.state
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto')
    })

    // Accés a l'état 'users'
    const usersData = useSelector(state => state.users)

    // hook affichage supprimer
    const [displayDeleteConfirmation, setDisplayDeleteConfirmation] = useState(false)

    // calcul du temps restant
    const [timeLeft, setTimeLeft] = useState()

    useEffect(() => {
        setTimeLeft(new Date(auctionData.createdAt).getTime() + 7 * 24 * 60 * 60 * 1000 - Date.now())
    }, [auctionData])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1000)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [timeLeft])

    const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000))
    const hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
    const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000))
    const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000)

    // calcul du prix actuel (enchère descendantes)
    const factor = Math.pow(10, 2)
    const increment = (auctionData.startPrice - auctionData.reservePrice) / ((24 * 7 * 60) / 5)
    const [currentPrice, setCurrentPrice] = useState()

    useEffect(() => {
        setCurrentPrice(Math.round(auctionData.currentPrice * factor) / factor)
    }, [auctionData])

    useEffect(() => {
        if (auctionData.type === 'TREND_DOWN') {
            const intervalId = setInterval(() => {
                setCurrentPrice(Math.round((currentPrice - increment) * factor) / factor)
            }, 5 * 60 * 1000)

            return () => clearInterval(intervalId)
        }
    }, [currentPrice])

    // Accés au nom de la catégorie
    const [category, setCategory] = useState('')

    useEffect(() => {
        switch (auctionData.category) {
            case 'PACK':
                setCategory('Ensemble de pièces')
                break
            case 'CLASSIC_SET':
                setCategory('Set classique')
                break
            case 'RARE_SET':
                setCategory('Set rare')
                break
            case 'RARE_ITEM':
                setCategory('Pièce de collection')
                break
            case 'ORIGINAL_CREATION':
                setCategory('Création originale')
                break
            default:
                setCategory('Ensemble de pièces')
        }
    }, [auctionData])

    return (
        <>
            <Container to={`/ventes/${id}`}>
                <Section>
                    <InfoWrapper>
                        <Image src={import.meta.env.BASE_URL + auctionData.picture} />
                        <HGroup>
                            <Title>{auctionData.name}</Title>
                            <SmallRow>
                                <Text>Prix actuel</Text>
                                <Text bold='true'>{currentPrice}€</Text>
                            </SmallRow>
                        </HGroup>
                    </InfoWrapper>
                </Section>
                <Section>
                    <Row>
                        <Text>Fin dans</Text>
                        <Text bold>{`${
                            auctionData.finished
                                ? auctionData._id === userData._id
                                    ? `Terminée - ${auctionData.bids.length > 0 ? 'vendue' : 'non vendue'}`
                                    : 'Terminée'
                                : `${
                                      parseInt(days) > 0
                                          ? days + 'd' + ' ' + hours + 'h' + ' ' + minutes + 'm' + ' ' + seconds + 's'
                                          : parseInt(hours) > 0
                                          ? hours + 'h' + ' ' + minutes + 'm' + ' ' + seconds + 's'
                                          : parseInt(minutes) > 0
                                          ? minutes + 'm' + ' ' + seconds + 's'
                                          : seconds + 's'
                                  }`
                        }
                        `}</Text>
                    </Row>
                    <Row>
                        <Text>Prix de départ</Text>
                        <Text bold>{auctionData.startPrice}€</Text>
                    </Row>
                    <Row>
                        <Text>Catégorie</Text>
                        <Text bold>{category}</Text>
                    </Row>
                    <Row>
                        <Text>Type d'enchère</Text>
                        <Text bold>{auctionData.type === 'TREND_UP' ? 'Montante' : 'Descendante'}</Text>
                    </Row>
                </Section>
            </Container>
            {location.pathname === '/dashboard/ventes' &&
                userData._id === auctionData.sellerId &&
                !auctionData.finished && (
                    <Section>
                        <Button onClick={deleteAction} destructive>
                            Supprimer la vente
                        </Button>
                    </Section>
                )}
        </>
    )
}

export default AuctionCard
