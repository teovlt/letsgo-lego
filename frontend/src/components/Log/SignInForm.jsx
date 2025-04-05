import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Caption, Form, FormWrapper, Link, LogContainer, Title } from './LogElements'
import Input from '../Input'
import Checkbox from '../Checkbox'
import Icon from '../Icon'
import axios from 'axios'
import BackButton from '../BackButton'

const SignInForm = ({ handleModals }) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleLogin = event => {
        event.preventDefault()

        axios({
            method: 'post',
            url: `${import.meta.env.VITE_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },
        })
            .then(res => {
                if (res.data.errors) {
                    setEmailError(res.data.errors.email)
                    setPasswordError(res.data.errors.password)
                } else window.location = '/'
            })
            .catch(err => console.log(err))
    }

    return (
        <LogContainer>
            <BackButton icon='ArrowLeft' label='Retour' onClick={() => navigate(-1)} />
            <Title>Connectez vous</Title>
            <Form onSubmit={e => handleLogin(e)}>
                <FormWrapper>
                    <Input
                        id='email'
                        type='text'
                        label='Adresse email'
                        error={emailError}
                        onChange={e => setEmail(e.target.value)}
                        autoFocus
                    />
                    <Input
                        id='password'
                        type='password'
                        label='Mot de passe'
                        error={passwordError}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Link to=''>Mot de passe oublié ?</Link>
                    <Caption>
                        Pas encore de compte ?{' '}
                        <Link primary='true' onClick={handleModals}>
                            Inscrivez vous
                        </Link>
                    </Caption>
                </FormWrapper>
                <Button>Se connecter</Button>
            </Form>
        </LogContainer>
    )
}

export default SignInForm
