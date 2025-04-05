import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Italic, Section, SectionTitle, HGroup, Paragraph, Title, Link } from './CguElements'
import { Container } from '../../components/Container'

const Cgu = () => {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Conditions générales d'utilisation</Title>
                    <hr />
                    <Italic>Dernière modification : 16 janvier 2023</Italic>
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Objet</SectionTitle>
                        <Paragraph>
                            Les présentes CGU ou Conditions Générales d'Utilisation encadrent juridiquement
                            l'utilisation des services du site Letsgo Lego (ci-après dénommé « le site »). Constituant
                            le contrat entre la société Letsgo Lego, l'Utilisateur, l'accès au site doit être précédé de
                            l'acceptation de ces CGU. L'accès à cette plateforme signifie l'acceptation des présentes
                            CGU.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Accès au site</SectionTitle>
                        <Paragraph>
                            Le site Letsgo Lego permet d'accéder gratuitement aux services suivants :
                            <ul>
                                <br />
                                <li>Vente de Lego en vrac</li>
                                <li>Vente de Lego par sets (classique ou rare)</li>
                                <li>Vente de pièces de collection en Lego</li>
                                <li>Vente de créations originales d'artistes </li>
                            </ul>
                            <br />
                            Le site est accessible gratuitement par tout utilisateur disposant d'un accès à Internet.
                            Tous les frais nécessaires pour l'accès aux services (matériel informatique, connexion
                            Internet…) sont à la charge de l'utilisateur. L'accès aux services dédiés aux membres
                            s'effectue à l'aide d'un identifiant et d'un mot de passe. Pour des raisons de maintenance
                            ou autres, l'accès au site peut être interrompu ou suspendu par l'éditeur sans préavis ni
                            justification.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Collecte des données</SectionTitle>
                        <Paragraph>
                            Pour la création du compte de l'Utilisateur, la collecte des informations au moment de
                            l'inscription sur le site est nécessaire et obligatoire. Conformément à la loi n°78-17 du 6
                            janvier relative à l'informatique, aux fichiers et aux libertés, la collecte et le
                            traitement d'informations personnelles s'effectuent dans le respect de la vie privée.
                            Suivant la loi Informatique et Libertés en date du 6 janvier 1978, articles 39 et 40,
                            l'Utilisateur dispose du droit d'accéder, de rectifier, de supprimer et d'opposer ses
                            données personnelles. L'exercice de ce droit s'effectue par : Le{' '}
                            <Link to='/contact'>formulaire de contact</Link>
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Responsabilité</SectionTitle>
                        <Paragraph>
                            Bien que les informations publiées sur le site soient réputées fiables, le site se réserve
                            la faculté d'une non-garantie de la fiabilité des sources. Les informations diffusées sur le
                            site Letsgo Lego sont présentées à titre purement informatif et sont sans valeur
                            contractuelle. En dépit des mises à jour régulières, la responsabilité du site ne peut être
                            engagée en cas de modification des dispositions administratives et juridiques apparaissant
                            après la publication. Il en est de même pour l'utilisation et l'interprétation des
                            informations communiquées sur la plateforme. Le site décline toute responsabilité concernant
                            les éventuels virus pouvant infecter le matériel informatique de l'Utilisateur après
                            l'utilisation ou l'accès à ce site. Le site ne peut être tenu pour responsable en cas de
                            force majeure ou du fait imprévisible et insurmontable d'un tiers. La garantie totale de la
                            sécurité et la confidentialité des données n'est pas assurée par le site. Cependant, le site
                            s'engage à mettre en œuvre toutes les méthodes requises pour le faire au mieux.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Cookies</SectionTitle>
                        <Paragraph>
                            Lors des visites sur le site, l'installation automatique d'un cookie sur le logiciel de
                            navigation de l'Utilisateur peut survenir. <br />
                            <br />
                            Les cookies correspondent à de petits fichiers déposés temporairement sur le disque dur de
                            l'ordinateur de l'Utilisateur. Ces cookies sont nécessaires pour assurer l'accessibilité et
                            la navigation sur le site. Ces fichiers ne comportent pas d'informations personnelles et ne
                            peuvent pas être utilisés pour l'identification d'une personne.
                            <br />
                            <br />
                            Pour plus d'informations, veuillez vous référer à la page <Link to='/cookies'>cookies</Link>
                            .
                        </Paragraph>
                    </HGroup>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

export default Cgu
