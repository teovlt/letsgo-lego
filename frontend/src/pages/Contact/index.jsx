import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Icon from '../../components/Icon'
import Input from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import TextArea from '../../components/TextArea'
import { useState } from 'react'
import { ButtonSubmit, DivButton, Wrapper, Hgroup } from './ContactElements'
import { Container } from '../../components/Container'
import BackButton from '../../components/BackButton'

const Contact = () => {
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    return (
        <>
            <Navbar />

            <Container>
                <DivButton>
                    <BackButton icon='ArrowLeft' label='Retour' onClick={() => goBack()}>
                        <Icon name='ArrowLeft' width='20' height='20' />
                        Retour
                    </BackButton>
                </DivButton>

                <Hgroup method='post' data-netlify='true' onSubmit='submit'>
                    <input type='hidden' name='form-name' value='contact' />
                    <Wrapper>
                        <Input type='text' label='Prénom' error='' id='prenom'></Input>
                        <Input type='text' label='Nom' error='' id='name'></Input>
                    </Wrapper>

                    <Input type='email' label='E-mail' error='' id='email'></Input>
                    <Input type='text' label='Objet' error='' id='objet'></Input>
                    <TextArea
                        type='text'
                        id='mess'
                        name='mess'
                        label='Message'
                        error={messageError}
                        value={message}
                        maxLength='500'
                        onChange={e => setMessage(e.target.value)}
                    />

                    <ButtonSubmit>Envoyer</ButtonSubmit>
                </Hgroup>
            </Container>
            <Footer />
        </>
    )
}

export default Contact
