import React, { useState } from 'react'
import { Button, Container, DivButton, Img, Para, Wrapper, Text } from './CookieElements'

function CookieConsent({ cookie, setCookie }) {
    const [displayParameters, setDisplayParameters] = useState(false)

    return (    
        <Container>
            <Wrapper>
                <Img src='assets/images/cookie.avif' alt='image cookie' />
                <Para>
                    <Text>
                        <h2>Cookies et outils fonctionnels</h2>
                        LetsgoLego utilise des cookies fonctionnels et d'autres technologies nécessaires à la navigation
                        du site.<br></br> En gros, c'est comme si on vous proposait des cookies aux morceaux de chocolat
                        à la fleur de sel au lieu de vieux biscuits aux raisins secs. Ces cookies et outils fonctionnels
                        sont indispensables à la navigation sur le site et au respect de vos préférences en matière de
                        confidentialité pour les cookies non nécessaires au fonctionnement du site. Ils ne peuvent donc
                        pas être désactivés.
                    </Text>
                </Para>
                <DivButton>
                    <Button
                        onClick={() =>
                            setCookie('consent', true, {
                                maxAge: 30 * 24 * 60 * 60 * 1000,
                            })
                        }
                    >
                        C'est ok pour moi !
                    </Button>
                </DivButton>
            </Wrapper>
        </Container>
    )
}

export default CookieConsent
