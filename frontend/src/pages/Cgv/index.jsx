import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Italic, Section, SectionTitle, HGroup, Paragraph, Title, Link } from './CgvElements'
import { Container } from '../../components/Container'

const Cgv = () => {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Conditions générales de vente</Title>
                    <hr />
                    <Italic>Dernière modification : 16 janvier 2023</Italic>
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Objet et champ d'application</SectionTitle>
                        <Paragraph>
                            Les présentes conditions générales de vente (CGV) constituent le socle de la négociation
                            commerciale et sont systématiquement adressées ou remises à chaque acheteur pour lui
                            permettre de passer commande. <br />
                            <br />
                            Les conditions générales de vente décrites ci-après détaillent les droits et obligations de
                            la société Letsgo Lego et de son client dans le cadre de la vente aux enchères de Lego.{' '}
                            <br />
                            <br />
                            Toute acceptation du devis/bon de commande en ce compris la clause « Je reconnais avoir pris
                            connaissance et j'accepte les conditions générales de vente ci-annexées » implique
                            l'adhésion sans réserve de l'acheteur aux présentes conditions générales de vente.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Prix</SectionTitle>
                        <Paragraph>
                            Les prix des marchandises vendues sont ceux en vigueur au jour de la prise de commande. Ils
                            sont libellés en euros. La société Letsgo Lego s'engage à facturer les marchandises
                            commandées aux prix indiqués lors de l'achat de la commande.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Modalité de paiement</SectionTitle>
                        <Paragraph>
                            Le règlement des commandes s'effectue par l'intermédiaire du bénéficiaire Paypal{' '}
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Livraison</SectionTitle>
                        <Paragraph>
                            La livraison est effectuée selon la volonté du vendeur :
                            <ul>
                                <br />
                                <li>soit par la remise directe de la marchandise à l'acheteur</li>
                                <li>soit par l'envoie de marchandise par voie postale</li>
                            </ul>
                            <br />
                            Vous disposez d'un moyen de contact avec le vendeur directement sous son annonce
                            <br />
                            Le risque du transport est supporté en totalité par l'acheteur. <br />
                            Pour en savoir plus veuillez vous référer à la page de
                            <Link to='/livraison'> livraison</Link>
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Force majeure</SectionTitle>
                        <Paragraph>
                            La responsabilité de la société Letsgo Lego ne pourra pas être mise en oeuvre si la
                            non-exécution ou le retard dans l'exécution de l'une de ses obligations décrites dans les
                            présentes conditions générales de vente découle d'un cas de force majeure. À ce titre, la
                            force majeure s'entend de tout événement extérieur, imprévisible et irrésistible au sens de
                            l'article 1148 du Code civil.
                        </Paragraph>
                    </HGroup>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

export default Cgv
