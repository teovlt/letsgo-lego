import React, { useContext, useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
    HGroup,
    HomeContainer,
    ProductsContainer,
    ProductsSlider,
    Section,
    SectionSubTitle,
    SectionTitle,
} from './HomeElements'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AuctionPreview from '../../components/AuctionPreview'
import shuffle from 'lodash/shuffle'
import AuctionCard from '../../components/AuctionCard'
import { socket } from '../../io/socket.config'
import { getAuctions } from '../../redux/actions/auctions.action'

const Home = ({ banner }) => {
    const dispatch = useDispatch()
    const { state } = useLocation()
    const auctions = useSelector(state => state.auctions)

    useEffect(() => {
        socket.on('updateAuctions', () => {
            dispatch(getAuctions())
        })
    }, [socket])

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(Array.from(auctions))
    }, [auctions, dispatch])

    return (
        <>
            <Navbar />
            <HomeContainer>
                <Section>
                    <HGroup>
                        <SectionTitle>Elles pourraient vous intéresser</SectionTitle>
                        <SectionSubTitle>Nos dernières ventes</SectionSubTitle>
                    </HGroup>
                    <ProductsContainer>
                        <ProductsSlider>
                            {products
                                .filter(product => !product.finished)
                                .sort((a, b) => {
                                    return new Date(a.createdAt) - new Date(b.createdAt)
                                })
                                .slice(0, 10)
                                .map(product => (
                                    <AuctionPreview key={product._id} id={product._id} />
                                ))}
                        </ProductsSlider>
                    </ProductsContainer>
                </Section>
            </HomeContainer>
            <Footer />
        </>
    )
}

export default Home
