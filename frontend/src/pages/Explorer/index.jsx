import React, { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProductsContainer, RowWrapper, Select } from './ExplorerElements'
import { Container } from '../../components/Container'
import BackButton from '../../components/BackButton'
import AuctionCard from '../../components/AuctionCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Explorer = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { filter } = useParams()

    const auctionsData = useSelector(state => state.auctions)

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categoryFilter, setCategoryFilter] = useState('')

    useEffect(() => {
        setProducts(Array.from(auctionsData))
    }, [auctionsData])

    useEffect(() => {
        switch (filter) {
            case 'ensembles':
                setCategoryFilter('PACK')
                break
            case 'sets-classiques':
                setCategoryFilter('CLASSIC_SET')
                break
            case 'sets-rares':
                setCategoryFilter('RARE_SET')
                break
            case 'collection':
                setCategoryFilter('RARE_ITEM')
                break
            case 'creations':
                setCategoryFilter('ORIGINAL_CREATION')
                break
            default:
                setCategoryFilter('PACK')
        }
    }, [location.pathname])

    useEffect(() => {
        setFilteredProducts(products.filter(item => !item.finished && item.category === categoryFilter))
    }, [categoryFilter])

    return (
        <>
            <Navbar />
            <Container>
                <BackButton icon='ArrowLeft' label='Retour' onClick={() => navigate(-1)} />
                <RowWrapper>
                    Catégorie :
                    <Select
                        defaultValue={filter}
                        value={filter}
                        onChange={e => navigate(`/explorer/${e.target.value}`)}>
                        <option value='ensembles'>Ensembles de pièces</option>
                        <option value='sets-classiques'>Sets classiques</option>
                        <option value='sets-rares'>Sets rares</option>
                        <option value='collection'>Pièces de collection</option>
                        <option value='creations'>Créations originales</option>
                    </Select>
                </RowWrapper>
                <ProductsContainer>
                    {filteredProducts &&
                        filteredProducts.map(product => <AuctionCard key={product._id} id={product._id} />)}
                </ProductsContainer>
            </Container>
            <Footer />
        </>
    )
}

export default Explorer
