import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { HGroup, Title, Italic, Paragraph, Section, SectionTitle, Link } from './LegalMentionsElements'
import { Container } from '../../components/Container'

function LegalMentions() {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Mentions légales</Title>
                    <hr />
                    <Italic>Dernière modification : 17 janvier 2023</Italic>
                </HGroup>
                <Section>
                    <HGroup>
                        <SectionTitle>Qu'est ce que c'est ?</SectionTitle>
                        <Paragraph>
                            Les mentions légales d'une entreprise sont un ensemble d'informations juridiques et
                            réglementaires qui doivent être affichées sur le site web de l'entreprise. Ces informations
                            incluent généralement le nom de l'entreprise, son adresse et ses coordonnées, les détails de
                            son immatriculation au registre du commerce, les conditions générales de vente, les
                            informations sur les politiques de confidentialité et de protection des données, ainsi que
                            les modalités de règlement des litiges éventuels. Il est important de noter que ces mentions
                            légales sont obligatoires et peuvent varier en fonction de la législation en vigueur dans
                            chaque pays.
                        </Paragraph>
                    </HGroup>
                </Section>
                <Section>
                    <HGroup>
                        <SectionTitle>Informations sur notre société</SectionTitle>
                        <Paragraph>
                            <li>Nom de l'entreprise : LETSGOlego</li>
                            <li>Adresse : 38000 GRENOBLE,France</li>
                            <li>Email : letsgo-lego@gmail.com</li>
                        </Paragraph>
                    </HGroup>
                </Section>
                <Section>
                    <HGroup>
                        <SectionTitle>Conditions générales de ventes</SectionTitle>
                        <Paragraph>
                            Les conditions générales de vente s'appliquent à toutes les ventes effectuées par
                            LETSGOlego. Pour en savoir plus veuillez vous référer à la page des
                            <Link to='/cgv'> conditions générales de vente</Link> En passant une offre d'achat,
                            l'acheteur accepte les conditions générales de vente.
                        </Paragraph>
                    </HGroup>
                </Section>
                <Section>
                    <HGroup>
                        <SectionTitle>Politique de confidentialité</SectionTitle>
                        <Paragraph>
                            Notre politique de confidentialité et de protection des données LETSGOlego s'engage à
                            protéger la confidentialité et les données personnelles de ses clients. Nous ne partagerons
                            ni ne vendrons vos informations à des tiers. Pour plus d'informations, veuillez consulter
                            notre politique sur la <Link to='/cgv'> protection des donnees</Link>.
                        </Paragraph>
                    </HGroup>
                </Section>
                <Section>
                    <HGroup>
                        <SectionTitle>Règlement des litiges</SectionTitle>
                        <Paragraph>
                            Tout litige découlant de ou lié à l'utilisation de ce site ou à une vente effectuée par
                            LETSGOlego sera régi et interprété conformément aux lois françaises. Tout litige sera soumis
                            à la juridiction exclusive des tribunaux de Paris.
                        </Paragraph>
                    </HGroup>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

export default LegalMentions
