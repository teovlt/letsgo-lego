import React from 'react'
import { Italic, Section, SectionTitle, HGroup, Paragraph, Title, Link } from './HelpElements'
import { Container } from '../../components/Container'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function Help() {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Aide et assistance</Title>
                    <hr />
                    <Italic>Dernière modification : 17 janvier 2023</Italic>
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Besoin d'aide ?</SectionTitle>
                        <Paragraph>
                            <br />
                            Bienvenue sur notre page d'aide et d'assistance ! <br /> Nous sommes là pour vous aider à
                            résoudre tout problème que vous pourriez rencontrer lors de l'utilisation de notre site de
                            vente aux enchères de Lego. Si vous avez des questions sur les enchères, les achats, les
                            paiements ou les livraisons, veuillez nous <Link to='/contact'>contactez</Link> directement
                            pour obtenir des réponses rapides à vos questions . Nous ferons de notre mieux pour vous
                            répondre dans les plus brefs délais. <br />
                            <br />
                            Nous vous encourageons également à consulter nos conditions d'utilisation pour obtenir des
                            informations sur la manière dont nous protégeons et utilisons vos données personnelles. Si
                            vous rencontrez des problèmes techniques sur notre site, veuillez nous en informer en
                            décrivant le problème avec autant de détails que possible. Nous ferons de notre mieux pour
                            résoudre le problème dans les plus brefs délais. Nous sommes également là pour vous aider en
                            cas de litige avec un vendeur. Veuillez nous contacter via notre formulaire de{' '}
                            <Link to='/contact'>contact</Link> ou via notre email letsgo-lego@gmail.com pour obtenir de
                            l'aide pour résoudre tout problème éventuel. <br />
                            <br />
                            Enfin, n'hésitez pas à nous donner vos commentaires et suggestions pour améliorer notre site
                            et nos services. Nous apprécions votre feedback et nous nous efforçons de fournir la
                            meilleure expérience d'achat possible. <br />
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

export default Help
