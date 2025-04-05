import React from 'react'
import {
    Button,
    ButtonsContainer,
    ConfirmationContainer,
    ConfirmationSubtitle,
    ConfirmationTitle,
    Overlay,
} from './ConfirmationElements'

const Confirmation = ({ toggleDisplay, title, subtitle, action, cta }) => {
    return (
        <>
            <Overlay onClick={toggleDisplay} />
            <ConfirmationContainer>
                <ConfirmationTitle>{title}</ConfirmationTitle>
                <ConfirmationSubtitle>{subtitle}</ConfirmationSubtitle>
                <ButtonsContainer>
                    <Button onClick={toggleDisplay}>Annuler</Button>
                    <Button destructive onClick={action}>
                        {cta}
                    </Button>
                </ButtonsContainer>
            </ConfirmationContainer>
        </>
    )
}

export default Confirmation
