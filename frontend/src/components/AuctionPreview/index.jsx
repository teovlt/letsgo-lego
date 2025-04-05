import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { socket } from '../../io/socket.config'
import { Caption, Container, Image, Label, Text, Wrapper, LoadingCircle } from './AuctionPreviewElements'
import { getAuctions } from '../../redux/actions/auctions.action'

const AuctionPreview = ({ id }) => {
    const dispatch = useDispatch()

    // Accés à l'état 'auction'
    const auctionsData = useSelector(state => state.auctions)
    const auctionData = auctionsData && Array.from(auctionsData).find(auction => auction._id === id)

    useEffect(() => {
        dispatch(getAuctions())
    }, [dispatch])

    // Socket config
    useEffect(() => {
        socket.on('updateAuction', id => {
            if (auctionData._id === id) dispatch(getAuctions())
        })
    }, [socket])

    // calcul du temps restant
    const [timeLeft, setTimeLeft] = useState()

    useEffect(() => {
        auctionData && setTimeLeft(new Date(auctionData.createdAt).getTime() + 7 * 24 * 60 * 60 * 1000 - Date.now())
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
    const increment = auctionData && (auctionData.startPrice - auctionData.reservePrice) / ((24 * 7 * 60) / 5)
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

    return (
        <Container to={`/ventes/${id}`}>
            {auctionData ? (
                <>
                    <Label>
                        {auctionData.type === 'TREND_UP' && 'Montante'}
                        {auctionData.type === 'TREND_DOWN' && 'Descendante'}
                    </Label>
                    <Image src={`${import.meta.env.BASE_URL}${auctionData.picture}`} alt={auctionData.name} />
                    <Wrapper>
                        <Text title='true'>{auctionData.name}</Text>
                        <Caption>
                            Fin dans{' '}
                            {`${
                                parseInt(days) > 0
                                    ? days + 'd' + ' ' + hours + 'h'
                                    : parseInt(hours) > 0
                                    ? hours + 'h' + ' ' + minutes + 'm'
                                    : parseInt(minutes) > 0
                                    ? minutes + 'm' + ' ' + seconds + 's'
                                    : seconds + 's'
                            }`}
                        </Caption>
                    </Wrapper>
                    <Wrapper>
                        <Caption sub='true'>Prix actuel</Caption>
                        <Text>{currentPrice}€</Text>
                    </Wrapper>
                </>
            ) : (
                <LoadingCircle />
            )}
        </Container>
    )
}

export default AuctionPreview
