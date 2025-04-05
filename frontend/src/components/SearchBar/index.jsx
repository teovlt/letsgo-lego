import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    IconBtn,
    IconsBox,
    SearchContainer,
    SearchIcon,
    SearchInput,
    SearchResult,
    SearchResults,
    SearchTitle,
} from './SearchBarElements'

const SearchBar = () => {
    const input = useRef(null)

    const auctions = useSelector(state => state.auctions)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(Array.from(auctions))
    }, [auctions])

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const searchWords = searchTerm.toLocaleLowerCase().split(' ')
        const filtered = products.filter(product => {
            return searchWords.every(word => !product.finished && product.name.toLowerCase().includes(word))
        })
        setFilteredProducts(filtered)
    }, [searchTerm, products])

    const handleReset = () => {
        setSearchTerm('')
        input.current.focus()
    }

    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)

    const handleClickOutside = event => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <SearchContainer ref={containerRef}>
            <SearchInput
                ref={input}
                type='text'
                placeholder='Essayez Star Wars, Pompier...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onFocus={() => setIsOpen(true)}
            />
            <IconsBox>
                {searchTerm && <IconBtn name='XMark' width='30' height='30' onClick={() => handleReset()} />}
                <SearchIcon name='Magnifying' width='30' height='30' />
            </IconsBox>
            {isOpen && (
                <SearchResults>
                    {searchTerm && (
                        <>
                            <SearchTitle>Résultats de recherche</SearchTitle>
                            {filteredProducts.slice(0, 5).map(product => (
                                <SearchResult
                                    key={product._id}
                                    to={`/ventes/${product._id}`}
                                    onClick={() => setIsOpen(false)}>
                                    {product.name}
                                </SearchResult>
                            ))}
                        </>
                    )}
                    <SearchTitle>Raccourcis</SearchTitle>
                    <SearchResult to='/explorer/ensembles' onClick={() => setIsOpen(false)}>
                        Ensembles de pièces
                    </SearchResult>
                    <SearchResult to='/explorer/sets-classiques' onClick={() => setIsOpen(false)}>
                        Sets classiques
                    </SearchResult>
                    <SearchResult to='/explorer/sets-rares' onClick={() => setIsOpen(false)}>
                        Sets rares
                    </SearchResult>
                    <SearchResult to='/explorer/collection' onClick={() => setIsOpen(false)}>
                        Pièces de collection
                    </SearchResult>
                    <SearchResult to='/explorer/creations' onClick={() => setIsOpen(false)}>
                        Créations originales
                    </SearchResult>
                </SearchResults>
            )}
        </SearchContainer>
    )
}

export default SearchBar
