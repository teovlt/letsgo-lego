import React, { useEffect, useRef } from 'react'
import Icon from '../Icon'
import { Area, CharacterCounter, Container, ErrorLabel, ErrorMessage, Label, Wrapper } from './TextAreaElements'

const TextArea = props => {
    const textareaRef = useRef(null)

    const updateHeight = () => {
        textareaRef.current.style.height = 'auto'
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }

    useEffect(() => {
        updateHeight()
    }, [])

    return (
        <Container>
            <Wrapper>
                <Area
                    id={props.id}
                    placeholder=' '
                    value={props.value}
                    error={props.error}
                    onChange={props.onChange}
                    ref={textareaRef}
                    onInput={updateHeight}
                    maxLength={props.maxLength}
                />
                <Label htmlFor={props.id}>{props.label}</Label>
                <CharacterCounter>
                    {props.value ? props.value.length : 0}/{props.maxLength}
                </CharacterCounter>
            </Wrapper>
            {props.error && (
                <ErrorLabel>
                    <Icon name='ExclamationCircle' width='20' height='20' fill='currentColor' />
                    <ErrorMessage>{props.error}</ErrorMessage>
                </ErrorLabel>
            )}
        </Container>
    )
}

export default TextArea
