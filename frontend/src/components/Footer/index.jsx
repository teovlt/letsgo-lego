import React from 'react'
import { Container, Section, SectionTitle, SectionLinks, Item, Link, Credentials } from './FooterElements'

function Footer() {
    return (
        <Container>
            <Section>
                <SectionTitle>À propos</SectionTitle>
                <SectionLinks>
                    <Item>
                        <Link to='/about'>Qui sommes nous ?</Link>
                    </Item>
                    <Item>
                        <Link to='/contact'>Nous contacter</Link>
                    </Item>
                    <Item>
                        <Link to='/guides'>Nos Guides</Link>
                    </Item>
                </SectionLinks>
            </Section>
            <Section>
                <SectionTitle>Besoin d'aide ?</SectionTitle>
                <SectionLinks>
                    <Item>
                        <Link to='/infos-conso'>Info consommateurs</Link>
                    </Item>
                    <Item>
                        <Link to='/paiement'>Paiement</Link>
                    </Item>
                    <Item>
                        <Link to='/livraison'>Livraison</Link>
                    </Item>
                    <Item>
                        <Link to='/aide-et-assistance'>Aide et Assistance</Link>
                    </Item>
                </SectionLinks>
            </Section>
            <Section>
                <SectionTitle>La loi et l'ordre</SectionTitle>
                <SectionLinks>
                    <Item>
                        <Link to='/cgu'>Conditions générales d'utilisation</Link>
                    </Item>
                    <Item>
                        <Link to='/cgv'>Conditions générales de vente</Link>
                    </Item>
                    <Item>
                        <Link to='/protection-des-donnees'>Protection des données</Link>
                    </Item>
                    <Item>
                        <Link to='/cookies'>Cookies</Link>
                    </Item>
                    <Item>
                        <Link to='/mentions-legales'>Mentions légales</Link>
                    </Item>
                </SectionLinks>
            </Section>
            <Credentials>&copy; 2023 Letsgo Lego</Credentials>
        </Container>
    )
}

export default Footer
