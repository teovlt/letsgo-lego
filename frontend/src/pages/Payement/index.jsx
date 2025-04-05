import React from 'react'
import { Italic, Section, SectionTitle, HGroup, Paragraph, Title, Link } from './PayementElements'
import { Container } from '../../components/Container'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function Payement() {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Paiement</Title>
                    <hr />
                    <Italic>Dernière modification : 17 janvier 2023</Italic>
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Comment payer ?</SectionTitle>
                        <Paragraph>
                            <br />
                            Bienvenue sur notre page de paramètres de paiement ! Nous utilisons PayPal pour garantir la
                            sécurité et la facilité des transactions entre acheteurs et vendeurs sur LETSGOlego. <br />
                            <br /> Lorsque vous achetez un objet sur notre site, vous serez redirigé vers PayPal pour
                            effectuer votre paiement. Vous avez la possibilité de payer avec votre compte PayPal
                            existant ou de payer par carte de crédit ou de débit via l'interface PayPal. Il est
                            important de noter que tous les paiements sont effectués en euros (EUR) et que les frais de
                            transaction seront à la charge de l'acheteur.
                            <br />
                            <br /> Une fois que le paiement a été effectué avec succès, PayPal nous informera de la
                            transaction et nous vous enverrons une confirmation de paiement par email. Vous pourrez
                            également consulter le détail de votre transaction dans votre compte PayPal. En cas de
                            problème ou de question concernant un paiement, veuillez contacter PayPal directement en
                            utilisant les informations de contact disponibles sur leur site web. Si vous rencontrez des
                            difficultés pour effectuer un paiement, n'hésitez pas à nous
                            <Link to='/contact'> contactez</Link> pour obtenir de l'aide. Il est important de noter que
                            les paiements doivent être effectués dans les délais convenus entre l'acheteur et le
                            vendeur, et que tout litige lié à un paiement doit être résolu entre les parties concernées.
                            Enfin, nous vous rappelons que tous les achats sont soumis à notre{' '}
                            <Link to='/cgv'>conditions générales de vente</Link>. <br />
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

export default Payement
