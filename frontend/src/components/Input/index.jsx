import React, { useState } from 'react'
import { Container, Wrapper, InputField, Label, ErrorLabel, ErrorMessage } from './InputElements'
import Icon from '../Icon'

const Input = props => {
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState('eyeoff')

    const handleToggle = () => {
        switch (type) {
            case 'password':
                setType('text')
                setIcon('eye')
                break
            case 'text':
                setType('password')
                setIcon('eyeoff')
                break
        }
    }

    return (
        <Container>
            <Wrapper>
                <InputField
                    id={props.id}
                    type={props.type === 'password' ? type : props.type}
                    placeholder=' '
                    value={props.value}
                    error={props.error}
                    onChange={props.onChange}
                    autoFocus={props.autoFocus}
                    maxLength={props.maxLength}
                />
                <Label htmlFor={props.id}>{props.label}</Label>
                {props.type === 'password' && <Icon name={icon} width='30' height='30' onClick={handleToggle} />}
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

export default Input
