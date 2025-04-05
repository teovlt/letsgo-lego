import React from 'react'
import { useSelector } from 'react-redux'
import { Biographie, Container, HGroup, Name, Picture, Username } from './SellerElements'

const Seller = ({ seller }) => {
    return (
        <Container>
            <Picture src={seller && `${import.meta.env.BASE_URL + seller.picture}`} />
            <HGroup>
                <Name>{seller && `${seller.name} ${seller.surname}`}</Name>
                <Username>{seller && `@${seller.username}`}</Username>
            </HGroup>
            {seller && seller.bio && <Biographie>{seller.bio}</Biographie>}
        </Container>
    )
}

export default Seller
