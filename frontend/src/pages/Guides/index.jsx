import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Section, SectionTitle, HGroup, Paragraph, Title } from './GuidesElements'
import { Container } from '../../components/Container'

const Guides = () => {
    return (
        <>
            <Navbar />
            <Container>
                <HGroup>
                    <Title>Guides</Title>
                    <hr />
                </HGroup>

                <Section>
                    <HGroup>
                        <SectionTitle>Ensemble de pièces : c'est quoi ?</SectionTitle>
                        <Paragraph>
                            La catégorie ensemble de pièces correspond à une catégorie dans laquelle les utilisateurs
                            peuvent retrouver des pièces en vrac pour compléter leurs collections ou leurs projets de
                            construction. Les ensembles de pièces peuvent contenir des pièces de toutes les tailles et
                            de toutes les couleurs, allant des petites pièces de détail aux gros éléments de
                            construction. Cette catégorie utilise un système d'enchères descendantes, ce qui signifie
                            que les prix des ensembles de pièces commencent à un prix de base fixé par le vendeur et
                            diminuent au fil du temps.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Sets classique, sets rares : quelle est la différence ?</SectionTitle>
                        <Paragraph>
                            Les sets classiques sont des sets encore en production et disponibles dans les magasins, ils
                            sont généralement plus abordables et plus faciles à trouver. Les sets classiques utilisent
                            un système d'enchère descendantes
                            <br />
                            <br />
                            Les sets rares, à l'inverse, sont des sets qui ne sont plus produits par Lego depuis des
                            année et que l'on ne peut pas trouver en magasin. Ces sets ont généralement une certaine
                            valeur historique ou sentimental pour les collectionneurs et peuvent être plus difficiles à
                            trouver. Les sets rares peuvent être des sets de collection de qualité supérieure, des sets
                            de jeux limités ou des sets de thèmes spéciaux. Ce type de produit utilise un système
                            d'enchère montantes.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>
                            Pièces de collection : qu'est-ce qui les différencie des sets rares ?
                        </SectionTitle>
                        <Paragraph>
                            Les pièces de collection à l'inverse des sets rares sont souvent de pièces vendues à
                            l'unité. Elles peuvent etre des personnages Lego produits en un seul exemplaire dans le
                            monde, des pièces de décors spécifiques, des pièces de couleur ou de forme particulière, ou
                            encore des pièces de thème spéciaux. Ces pièces peuvent avoir une valeur historique ou
                            sentimentale pour les collectionneurs et peuvent être utilisées pour compléter un ensemble
                            ou pour des projets de création personnelle. Cette catégorie utilise un sstème d'enchèr
                            montantes.
                        </Paragraph>
                    </HGroup>
                </Section>

                <Section>
                    <HGroup>
                        <SectionTitle>Créations originales : quezaco ?</SectionTitle>
                        <Paragraph>
                            Les pièces de collection sont des oeuvres d'art en Lego produites à l'unité par des artistes
                            particuliers ou profssionnels. Elles peuvent etre des créations originales inspirées de
                            personnages, ou encore des sculptures créées à partir de milliers de briques Lego. Ces
                            pièces sont uniques et ont été créées pour être des objets de collection pour les amateurs
                            de Lego et les amateurs d'art.
                        </Paragraph>
                    </HGroup>
                </Section>
            </Container>
            <Footer />
        </>
    )
}

export default Guides
