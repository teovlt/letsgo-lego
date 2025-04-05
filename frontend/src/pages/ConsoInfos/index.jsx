import React from 'react'
import { Italic, Section, SectionTitle, HGroup, Paragraph, Title, Link } from './ConsoInfoElements'
import { Container } from '../../components/Container'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function ConsoInfo() {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Informations pour les consommateurs</Title>
                    <hr />
                    <Italic>Dernière modification : 17 janvier 2023</Italic>
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Vous etes perdu ?</SectionTitle>
                        <Paragraph>
                            <br />
                            Bienvenue sur notre page d'informations pour les consommateurs ! Nous sommes là pour vous
                            fournir toutes les informations dont vous avez besoin pour faire des achats en toute
                            sécurité et en toute confiance sur notre site de vente aux enchères de Lego. <br />
                            <br />
                            Nous nous conformons à toutes les lois et réglementations applicables en matière de vente
                            aux enchères en ligne et nous nous efforçons de protéger les droits des consommateurs. Nous
                            vous encourageons à lire attentivement nos
                            <Link to='/cgv'> conditions générales de vente</Link> avant de passer une offre d'achat. Ces
                            conditions décrivent les modalités de vente, les garanties offertes pour les produits
                            vendus. <br />
                            <br />
                            Nous vous informons également que tous les objets vendus sur notre site sont décrits avec la
                            plus grande précision possible et que les photos sont le plus fidèles possible. Néanmoins,
                            il est possible que certaines imperfections ou différences de couleur ne soient pas toujours
                            visibles sur les photos. Si vous avez des doutes sur l'état de l'objet, n'hésitez pas à
                            poser des questions au vendeur avant de passer votre offre. <br />
                            <br /> Enfin, si vous rencontrez des problèmes avec un vendeur ou un objet acheté, n'hésitez
                            pas à nous <Link to='/cgv'> contactez</Link> pour obtenir de l'aide. Nous ferons de notre
                            mieux pour résoudre tout problème dans les plus brefs délais. <br />
                            <br /> Merci d'avoir choisi notre site de vente aux enchères de Lego ! Nous espérons que
                            vous appréciez votre expérience d'achat avec nous.
                        </Paragraph>
                    </HGroup>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

export default ConsoInfo
