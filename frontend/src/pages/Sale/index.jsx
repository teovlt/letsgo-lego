import React, { useContext, useEffect, useState } from 'react'
import { UidContext } from '../../components/AppContext'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { getAuction, placeABid } from '../../redux/actions/auction.action'
import {
    BiderInfoContainer,
    BiderInfoWrapper,
    BiderPicture,
    BidFormContainer,
    BidFormTitle,
    BoldCaption,
    Button,
    Caption,
    Divider,
    Form,
    LastBidContainer,
    LastBidWrapper,
    Overlay,
    Paragraph,
    PriceChips,
    RoundIcon,
    RowWrapper,
    SaleInfoContainer,
    SalePicture,
    SaleTitle,
    Section,
    SmallButton,
} from './SaleElements'
import Icon from '../../components/Icon'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { addToFavourites, removeFromFavourites } from '../../redux/actions/user.action'
import Seller from '../../components/Seller'
import BackButton from '../../components/BackButton'
import { Container } from '../../components/Container'
import Input from '../../components/Input'
import Confirmation from '../../components/Confirmation'
import { socket } from '../../io/socket.config'
import Banner from '../../components/Banner'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const Sale = () => {
    const { auctionId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const uid = useContext(UidContext)

    // Initialiser l'état 'auction'
    useEffect(() => {
        dispatch(getAuction(auctionId))
    }, [auctionId])

    // Accéder à l'état 'user'
    const userData = useSelector(state => state.user)

    // Accéder à l'état 'users'
    const usersData = useSelector(state => state.users)

    // Accéder à l'état 'auction'
    const auctionData = useSelector(state => state.auction)

    // Bannière de confirmation
    const [bannerMessage, setBannerMessage] = useState('')

    // socket config
    useEffect(() => {
        socket.on('updateAuction', id => {
            if (auctionData._id === id) dispatch(getAuction(id))
        })

        socket.on('winAuction', res => {
            if (auctionData && auctionData._id === res.id) {
                dispatch(getAuction(auctionId))
                setBannerMessage(`Enchère remportée par @${res.username}`)
            }
        })
    }, [socket])

    const [displayBidForm, setDisplayBidForm] = useState(false)
    const [bid, setBid] = useState('')
    const [bidError, setBidError] = useState('')

    const [displayBidConfirmation, setDisplayBidConfirmation] = useState(false)
    const [displayBuyNow, setDisplayBuyNow] = useState(false)

    const handleBidConfirmation = () => {
        setBidError('')
        const factor = Math.pow(10, 2)
        const minimum = Math.floor((auctionData.currentPrice + auctionData.startPrice * 0.1) * factor) / factor
        if (!bid || bid < minimum) {
            if (!bid) setBidError("Vous devez saisir un montant pour l'enchère")
            else if (bid < minimum) setBidError(`Montant de l'enchère minimum : ${minimum}€`)
        } else {
            setDisplayBidForm(false)
            setDisplayBidConfirmation(true)
        }
    }

    const confirmBid = () => {
        dispatch(placeABid(auctionData._id, userData._id, bid))
        setDisplayBidConfirmation(false)
        setBid('')
    }

    // Catégorie de la vente
    const [category, setCategory] = useState('')

    useEffect(() => {
        switch (auctionData.category) {
            case 'PACK':
                setCategory('Ensemble de pièces')
                break
            case 'CLASSIC_SET':
                setCategory('Sets classiques')
                break
            case 'RARE_SET':
                setCategory('Sets rares')
                break
            case 'COLLECTION_ITEM':
                setCategory('Pièces de collection')
                break
            case 'ORIGINAL_CREATION':
                setCategory('Créations originales')
                break
            default:
                setCategory('')
        }
    }, [auctionData])

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

    const handleAddToFavourites = () => {
        uid ? dispatch(addToFavourites(userData._id, auctionData._id)) : navigate('/dashboard/profil')
    }

    const handleRemoveFromFavourites = () => {
        uid ? dispatch(removeFromFavourites(userData._id, auctionData._id)) : navigate('/dashboard/profil')
    }

    return (
        <>
            <Navbar />
            {bannerMessage && <Banner>{bannerMessage}</Banner>}
            <Container>
                <BackButton icon='ArrowLeft' label='Retour' onClick={() => navigate(-1)} />
                <SalePicture src={`${import.meta.env.BASE_URL}${auctionData.picture}`} alt={auctionData.name} />
                <Section>
                    <SaleTitle>{auctionData.name}</SaleTitle>
                    <Paragraph>{auctionData.description}</Paragraph>
                </Section>
                <SaleInfoContainer>
                    <Caption>
                        <Icon
                            name={auctionData.finished ? 'CheckCircle' : 'Clock'}
                            width='20'
                            height='20'
                            fill='var(--accent)'
                        />
                        {auctionData.finished
                            ? auctionData._id === userData._id
                                ? `Terminée - ${auctionData.bids.length > 0 ? 'vendue' : 'non vendue'}`
                                : 'Terminée'
                            : `Fin dans : ${
                                  parseInt(days) > 0
                                      ? days + 'd' + ' ' + hours + 'h' + ' ' + minutes + 'm' + ' ' + seconds + 's'
                                      : parseInt(hours) > 0
                                      ? hours + 'h' + ' ' + minutes + 'm' + ' ' + seconds + 's'
                                      : parseInt(minutes) > 0
                                      ? minutes + 'm' + ' ' + seconds + 's'
                                      : seconds + 's'
                              }`}
                    </Caption>
                    <Caption>
                        Catégorie : <NavLink>{category}</NavLink>
                    </Caption>
                    <BoldCaption>
                        {!auctionData.finished ? (
                            <>
                                Prix de départ : {auctionData.startPrice}€ <br />
                                Prix actuel : {currentPrice}€
                                <RoundIcon
                                    name={auctionData.type === 'TREND_DOWN' ? 'DescendingArrow' : 'AscendingArrow'}
                                    width='30'
                                    height='30'
                                />
                            </>
                        ) : (
                            <>{auctionData.finished && `Prix de fin : ${auctionData.currentPrice}€`}</>
                        )}
                    </BoldCaption>
                    {auctionData.type === 'TREND_UP' && (
                        <Caption>{`${auctionData.bids && auctionData.bids.length} ${
                            auctionData.bids && auctionData.bids.length > 1 ? 'enchères' : 'enchère'
                        }`}</Caption>
                    )}
                </SaleInfoContainer>
                {auctionData.bids &&
                    auctionData.bids.length > 0 &&
                    Array.from(usersData)
                        .filter(user => user._id === Array.from(auctionData.bids).pop().biderId)
                        .map(user => {
                            return (
                                <LastBidContainer key={user._id}>
                                    <Paragraph>Dernière enchère</Paragraph>
                                    <LastBidWrapper>
                                        <BiderInfoContainer>
                                            <BiderPicture src={`${import.meta.env.BASE_URL}${user.picture}`} alt='' />
                                            <BiderInfoWrapper>
                                                <Paragraph>
                                                    {user.name} {user.surname}
                                                </Paragraph>
                                                <Caption>@{user.username}</Caption>
                                            </BiderInfoWrapper>
                                        </BiderInfoContainer>
                                        <PriceChips>
                                            {/* <Icon name='CurrencyEuro' width='20' height='20' fill='var(--text-base-primary)' /> */}
                                            {Array.from(auctionData.bids).pop().bid}€
                                        </PriceChips>
                                    </LastBidWrapper>
                                </LastBidContainer>
                            )
                        })}
                {!uid ? (
                    <>
                        <Section>
                            <BoldCaption>Connectez vous pour enchérir</BoldCaption>
                            <Button onClick={() => navigate('/dashboard/profil')}>Se connecter</Button>
                        </Section>
                    </>
                ) : (
                    <>
                        {auctionData.sellerId !== userData._id && !auctionData.finished && (
                            <Section>
                                <BoldCaption>Enchérir</BoldCaption>
                                {auctionData.type === 'TREND_UP' && (
                                    <Button onClick={() => setDisplayBidForm(true)}>Enchérir</Button>
                                )}
                                {auctionData.type === 'TREND_DOWN' && (
                                    <Button onClick={() => setDisplayBuyNow(true)}>Acheter à ce prix</Button>
                                )}
                                {userData.favourites &&
                                Array.from(userData.favourites).some(favourite => favourite === auctionData._id) ? (
                                    <SmallButton destructive='true' onClick={() => handleRemoveFromFavourites()}>
                                        <Icon name='Trash' width='20' height='20' fill='var(--text-base-quaternary)' />
                                        Retirer des favoris
                                    </SmallButton>
                                ) : (
                                    <SmallButton onClick={() => handleAddToFavourites()}>
                                        <Icon
                                            name='HeartFill'
                                            width='20'
                                            height='20'
                                            fill='var(--text-base-quaternary)'
                                        />
                                        Ajouter aux favoris
                                    </SmallButton>
                                )}
                            </Section>
                        )}
                    </>
                )}
                <Section>
                    <BoldCaption>Vendeur</BoldCaption>
                    <Seller seller={Array.from(usersData).find(user => user._id === auctionData.sellerId)} />
                </Section>
            </Container>
            {displayBidForm && (
                <>
                    <Overlay
                        onClick={() => {
                            setBid('')
                            setBidError('')
                            setDisplayBidForm(false)
                        }}
                    />
                    <BidFormContainer>
                        <RowWrapper center>
                            <BidFormTitle>Enchérir</BidFormTitle>
                            <Paragraph center>
                                Le prix actuel s'élève à {auctionData.currentPrice}€
                                <br />
                                Souhaitez vous surenchérir ?
                            </Paragraph>
                        </RowWrapper>
                        <Divider />
                        <Form onSubmit={e => e.preventDefault()}>
                            <Input
                                type='number'
                                label="Montant de l'enchère"
                                id='bid'
                                error={bidError}
                                value={bid}
                                onChange={e => setBid(e.target.value)}
                            />
                            <Button
                                type='button'
                                secondary
                                onClick={() =>
                                    setBid(
                                        Math.floor(
                                            (auctionData.currentPrice + auctionData.startPrice * 0.1) * Math.pow(10, 2)
                                        ) / Math.pow(10, 2)
                                    )
                                }>
                                Montant minimum
                            </Button>
                        </Form>
                        <Divider />
                        <RowWrapper>
                            <Button
                                type='button'
                                destructive
                                onClick={() => {
                                    setBid('')
                                    setBidError('')
                                    setDisplayBidForm(false)
                                }}>
                                Annuler
                            </Button>
                            <Button type='button' onClick={() => handleBidConfirmation()}>
                                Valider
                            </Button>
                        </RowWrapper>
                    </BidFormContainer>
                </>
            )}

            {displayBidConfirmation && (
                <Confirmation
                    title={`Souhaitez vous vraiment faire une enchère à ${bid}€ ?`}
                    subtitle='Vous ne pourrez pas annuler par la suite.'
                    toggleDisplay={() => {
                        setBid('')
                        setBidError('')
                        setDisplayBidConfirmation(false)
                    }}
                    action={() => confirmBid()}
                    cta='Confirmer la surenchère'
                />
            )}

            {displayBuyNow && (
                <>
                    <Overlay onClick={() => setDisplayBuyNow(false)} />
                    <BidFormContainer>
                        <RowWrapper center>
                            <BidFormTitle>Acheter maintenant</BidFormTitle>
                            <Paragraph center>
                                Souhaitez vous vraiment l'acquérir pour {auctionData.currentPrice}€
                            </Paragraph>
                            <Divider />
                            <PayPalScriptProvider
                                options={{
                                    'client-id':
                                        'AWQRmEVgcJdjYpuHPgF3I1WCsF4iexSqyQUnLx0jMtQvZHnD4-_jUFYiCcM3z1a3wsVZyij3G-CL3k9N',
                                    'disable-funding': 'card',
                                    currency: 'EUR',
                                }}>
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: auctionData.currentPrice,
                                                    },
                                                },
                                            ],
                                        })
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then(details => {
                                            dispatch(placeABid(auctionData._id, userData._id, auctionData.currentPrice))
                                            setDisplayBuyNow(false)
                                            socket.emit('winAuction', {
                                                id: auctionData._id,
                                                username: userData.username,
                                            })
                                            setBannerMessage(`Enchère remportée par @${userData.username}`)
                                        })
                                    }}
                                />
                            </PayPalScriptProvider>
                            <Button type='button' destructive onClick={() => setDisplayBuyNow(false)}>
                                Annuler
                            </Button>
                        </RowWrapper>
                    </BidFormContainer>
                </>
            )}
            <Footer />
        </>
    )
}

export default Sale
