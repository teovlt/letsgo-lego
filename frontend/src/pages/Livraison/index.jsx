import React from 'react'
import { Italic, Section, SectionTitle, HGroup, Paragraph, Title, Link } from './LivraisonElements'
import { Container } from '../../components/Container'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function Livraison() {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Livraison</Title>
                    <hr />
                    <Italic>Dernière modification : 17 janvier 2023</Italic>
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Comment faire ?</SectionTitle>
                        <Paragraph>
                            <br />
                            Pour assurer une livraison efficace et rapide de vos achats, nous vous offrons la
                            possibilité de gérer vous-même vos livraisons en communiquant directement avec le vendeur.
                            Cette option vous permet de personnaliser votre expérience d'achat en fonction de vos
                            besoins spécifiques et de vous assurer que votre colis arrive en toute sécurité à son point
                            de destination. <br /> <br /> En optant pour la gestion de votre livraison, vous avez la
                            possibilité de choisir le transporteur de votre choix. Vous pouvez sélectionner un
                            transporteur reconnu pour ses services de qualité, ou opter pour un transporteur local qui
                            peut offrir des tarifs plus avantageux. Il vous est également possible de négocier les
                            modalités de livraison avec le vendeur, comme par exemple les options de suivi de colis ou
                            les délais de livraison. <br /> <br />
                            Il est important de noter que la gestion de votre livraison par vos soins vous donne un plus
                            grand contrôle sur l'expédition de votre colis. Cependant, il est essentiel de vous assurer
                            que vous avez toutes les informations nécessaires pour organiser la livraison avec le
                            vendeur. Il est donc important de vérifier les détails de l'achat, comme l'adresse de
                            livraison, les informations de contact du vendeur et les délais de livraison convenus, avant
                            de finaliser votre achat. <br /> <br />
                            Enfin, il est important de noter que le vendeur reste responsable de la disponibilité de
                            l'objet acheté et de la livraison dans les délais convenus. Il est donc important de vous
                            assurer que toutes les informations sont correctes avant de finaliser votre achat. <br />
                            <br /> Si vous rencontrez des problèmes lors de la livraison, n'hésitez pas à
                            <Link to='/cgv'> contactez</Link> le vendeur pour trouver une solution.
                        </Paragraph>
                    </HGroup>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

export default Livraison
