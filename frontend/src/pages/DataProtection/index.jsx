import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { HGroup, Title, Italic, Paragraph, Section, SectionTitle } from './DataProtectionElements'
import { Container } from '../../components/Container'

const DataProtection = () => {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Protection des données</Title>
                    <hr />
                    <Italic>Dernière modification : 17 janvier 2023</Italic>
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Utilité ?</SectionTitle>
                        <Paragraph>
                            La protection des données est cruciale pour les sites de ventes aux enchères en ligne tel
                            que LETSGOlego. Les utilisateurs doivent pouvoir faire confiance à ces sites pour protéger
                            leurs informations personnelles, telles que leurs nom,leurs mot de passe et informations de
                            paiement. Les sites de ventes aux enchères doivent s'assurer de respecter les normes de
                            confidentialité et de sécurité en vigueur, telles que le RGPD, pour protéger les données des
                            utilisateurs. Cela peut inclure des mesures telles que la chiffrement des données sensibles,
                            l'utilisation de pare-feux et de logiciels de détection d'intrusion pour protéger les
                            serveurs contre les attaques malveillantes, et la formation des employés aux meilleures
                            pratiques de sécurité des données. Les sites de ventes aux enchères doivent également être
                            transparents sur les données qu'ils collectent, comment elles sont utilisées et qui y a
                            accès. Les utilisateurs doivent également pouvoir accéder, corriger ou supprimer leurs
                            données à tout moment. En général, la protection des données est essentielle pour maintenir
                            la confiance des utilisateurs et éviter les fuites de données qui pourraient causer des
                            dommages financiers ou juridiques pour les sites de ventes aux enchères et leurs
                            utilisateurs.
                        </Paragraph>
                    </HGroup>
                </Section>
                <Section>
                    <HGroup>
                        <SectionTitle>Notre base de données</SectionTitle>
                        <Paragraph>
                            LETSGOlego utilise MongoDB, un système de gestion de bases de données NoSQL populaire
                            utilisé pour stocker des données de manière efficace et évolutive. Il offre des
                            fonctionnalités de sécurité robustes pour protéger les données stockées, telles que
                            l'authentification, l'autorisation, la chiffrement des données à repos et en transit, et la
                            journalisation des activités. Il prend également en charge des rôles d'utilisateur et des
                            privilèges pour contrôler l'accès aux données, ainsi que des fonctionnalités de sécurité
                            avancées telles que la séparation des réseaux et les stratégies de sécurité basées sur le
                            contexte. Par conséquent, MongoDB permet aux utilisateurs de protéger efficacement les
                            données sensibles tout en leur offrant une grande flexibilité pour gérer et analyser les
                            données.
                        </Paragraph>
                    </HGroup>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

export default DataProtection
