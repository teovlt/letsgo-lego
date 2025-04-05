import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { HGroup, Title, Italic, Paragraph, Section, SectionTitle } from './CookiesElements'
import { Container } from '../../components/Container'

const Cookies = () => {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Cookies</Title>
                    <hr />
                    <Italic>Dernière modification : 17 janvier 2023</Italic>
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Qu'est ce qu'un cookie ?</SectionTitle>
                        <Paragraph>
                            Qu'est-ce qu'un cookie ? Le terme « cookie » fait référence à de multiples technologies
                            (cookies, tag, pixel, code Javascript etc.) permettant d’opérer un suivi de navigation ou
                            une analyse comportementale du visiteur d’un site. Ces technologies sont en constante
                            évolution. Le cookie est un petit fichier texte enregistré par le navigateur de votre
                            ordinateur, tablette ou smartphone et qui permet de conserver des données utilisateur afin
                            de faciliter la navigation et de permettre certaines fonctionnalités.
                        </Paragraph>
                    </HGroup>
                </Section>
                <Section>
                    <HGroup>
                        <SectionTitle>Ca va durer lomgtemps ?</SectionTitle>
                        <Paragraph>
                            En France, la durée de vie maximale d'un cookie est de 13 mois. Cependant, cette durée peut
                            être réduite si le cookie est utilisé pour des finalités sensibles telles que la collecte de
                            données à caractère personnel. Les utilisateurs doivent également être informés de
                            l'utilisation des cookies et donner leur consentement avant qu'un cookie ne soit déposé sur
                            leur ordinateur. Les navigateurs modernes offrent également des options pour gérer les
                            cookies, permettant aux utilisateurs de les bloquer ou de les supprimer facilement.
                        </Paragraph>
                    </HGroup>
                </Section>
                <Section>
                    <HGroup>
                        <SectionTitle>Cookies et outils fonctionnels</SectionTitle>
                        <Paragraph>
                            LetsgoLego utilise des cookies fonctionnels et d'autres technologies nécessaires à la
                            navigation du site.<br></br> Mais bon faites attention, car en ce moment avec l'inflation,
                            vaut mieux pas abuser des cookies. Ces cookies et outils fonctionnels sont indispensables à
                            la navigation sur le site et au respect de vos préférences en matière de confidentialité
                            pour les cookies non nécessaires au fonctionnement du site. Ils ne peuvent donc pas être
                            désactivés.
                        </Paragraph>
                    </HGroup>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

export default Cookies
