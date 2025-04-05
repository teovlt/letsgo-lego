import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { CheckboxInput, Checkmark, Container, ErrorLabel, ErrorMessage, Wrapper } from './CheckboxElements'

const Checkbox = ({ children, ...props }) => {
    return (
        <Wrapper>
            <Container error={props.error}>
                <CheckboxInput type='checkbox' id={props.id} {...props} />
                <Checkmark />
                {children}
            </Container>
            {props.error && (
                <ErrorLabel>
                    <ExclamationCircleIcon />
                    <ErrorMessage>{props.error}</ErrorMessage>
                </ErrorLabel>
            )}
        </Wrapper>
    )
}

export default Checkbox
