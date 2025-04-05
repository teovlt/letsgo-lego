import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Section, SectionTitle, HGroup, Paragraph, Title } from './AboutElements'
import { Container } from '../../components/Container'

const About = () => {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Qui sommes nous ?</Title>
                    <hr />
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Généralités</SectionTitle>
                        <Paragraph>
                            Bienvenue sur Letsgo Lego, votre destination pour acheter et vendre tous vos produits Lego.
                            Nous sommes une entreprise basée à Grenoble et nous avons créé une plateforme de vente aux
                            enchère en ligne où les collectionneurs et les amateurs de Lego peuvent acheter et vendre
                            leurs produits Lego.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Notre équipe</SectionTitle>
                        <Paragraph>
                            Notre équipe est composée de véritables passionnés de Lego, nous aimons tous jouer et
                            collectionner ces petites briques colorées et nous aimons rendre services à nos cients. Nous
                            sommes fiers de notre service clientèle exceptionnel et nous sommes toujours là pour
                            répondre à toutes vos questions et vous aider à trouver le produit que vous recherchez
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Notre objectif</SectionTitle>
                        <Paragraph>
                            Que vous soyez à la recherche d'un ensemble de collection rare ou d'un ensemble de jeu pour
                            votre enfant, nous avons quelque chose pour tout le monde. Nous nous engageons à offrir une
                            expérience d'achat satisfaisante à chaque client, que vous soyez un collectionneur chevronné
                            ou un parent cherchant un cadeau pour votre enfant. Peut importe votre age, notre site est
                            conçu pour etre facilement utilisable que vous soyez un jeune passioné de technologies ou
                            une personne non technophile.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <Paragraph>
                            En somme, chez Letsgo Lego, nous sommes plus qu'une entreprise de vente en ligne, nous
                            sommes une communauté de passionnés de Lego qui s'engage à offrir une expérience d'achat
                            satisfaisante à chaque client. Nous espérons que vous apprécierez naviguer sur notre site et
                            que vous trouverez le produit que vous recherchez."
                        </Paragraph>
                    </HGroup>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

export default About
