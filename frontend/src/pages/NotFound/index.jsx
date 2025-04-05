import React from 'react'
import { Img, Text, DivBtn, Link, Titre } from './NotFoundElements'
import { Container } from '../../components/Container'
import Footer from '../../components/Footer'
import { NavLink } from 'react-router-dom'
import Navbar from '../../components/Navbar'

function NotFound() {
    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Titre>Page non trouvé</Titre>
                <Text>
                    <br /> Perdu ? Ne vous inquiétez pas, je connais le chemin
                </Text>
                <Img src='/assets/images/404.png' alt='image erreur 404' />
                <Text>Rentrons à la maison</Text>
                <DivBtn>
                    <Link to='/'>Maison</Link>
                </DivBtn>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default NotFound
