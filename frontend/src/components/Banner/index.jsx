import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { Container, Message, XMark } from './BannerElements'

const Banner = props => {
    const [isOpen, setIsOpen] = useState(true)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        isOpen && (
            <Container>
                <Message>{props.children}</Message>
                <XMark onClick={toggle} />
            </Container>
        )
    )
}

export default Banner
