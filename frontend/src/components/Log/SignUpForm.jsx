import React, { useEffect, useState } from 'react'
import { Button, Caption, Form, FormWrapper, Link, LogContainer, Title } from './LogElements'
import Input from '../Input'
import Checkbox from '../Checkbox'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BackButton from '../BackButton'

function SignUpForm({ handleModals }) {
    const navigate = useNavigate()
    const usersData = useSelector(state => state.users)

    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [formSubmit, setFormSubmit] = useState(false)

    const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/, 'gm')
    const emailRegex = new RegExp(/(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9.-]+[\.][a-z]+$)/, 'gm')
    const usernameRegex = new RegExp(/^[a-zA-Z0-9]+$/, 'gm')

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordControl, setPasswordControl] = useState('')
    const terms = document.getElementById('terms')

    const [nameError, setNameError] = useState('')
    const [surnameError, setSurnameError] = useState('')
    const [birthDateError, setBirthDateError] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordControlError, setPasswordContolError] = useState('')
    const [termsError, setTermsError] = useState('')

    const handleRegister = event => {
        event.preventDefault()
        try {
            verify()
            if (currentStepIndex < 3) next()
            else {
                axios({
                    method: 'post',
                    url: `${import.meta.env.VITE_API_URL}api/user/register`,
                    withCredentials: true,
                    data: {
                        name,
                        surname,
                        birthDate,
                        username,
                        email,
                        password,
                    },
                })
                    .then(res => {
                        if (res.data.error) console.log(res.data.errors)
                        else window.location = '/'
                    })
                    .catch(err => console.log(err))
            }
        } catch (err) {
            // console.log({ verify: err })
        }
    }

    const verify = () => {
        setNameError('')
        setSurnameError('')
        setBirthDateError('')
        setUsernameError('')
        setEmailError('')
        setPasswordError('')
        setPasswordContolError('')
        setTermsError('')
        switch (currentStepIndex) {
            case 0:
                // Vérifier le nom et le prénom
                if (!name || !surname) {
                    if (!name) setNameError('Veuillez renseigner votre prénom.')
                    if (!surname) setSurnameError('Veuillez renseigner votre nom.')
                    throw new Error()
                } else break
            case 1:
                // Vérifier date de naissance
                if (!birthDate) {
                    setBirthDateError('Veuillez renseigner votre date de naissance.')
                    throw new Error()
                } else {
                    const birthday = new Date(birthDate)
                    const ageDifMs = Date.now() - birthday.getTime()
                    const ageDate = new Date(ageDifMs)
                    if (Math.abs(ageDate.getUTCFullYear() - 1970) < 18) {
                        setBirthDateError('Vous devez avoir 18 ans ou plus.')
                        throw new Error()
                    } else break
                }
            case 2:
                // Vérifier pseudo et email
                if (!username && !email) {
                    setUsernameError("Veuillez renseigner un nom d'utilisateur")
                    setEmailError('Veuillez indiquer votre adresse email')
                    throw new Error()
                } else if (!username) {
                    if (email.match(emailRegex)) {
                        if (Array.from(usersData).find(user => user.email === email.toLowerCase()))
                            setEmailError('Cette adresse email est déjà utilisée')
                        setUsernameError("Veuillez renseigner un nom d'utilisateur")
                    } else {
                        setUsernameError("Veuillez renseigner un nom d'utilisateur")
                        setEmailError('Veuillez indiquer une adresse email valide')
                    }
                    throw new Error()
                } else if (!email) {
                    if (username.match(usernameRegex)) {
                        if (Array.from(usersData).find(user => user.username === username))
                            setUsernameError("Ce nom d'utilisateur est déjà utilisé")
                        setEmailError('Veuillez indiquer votre adresse email')
                    } else {
                        setEmailError('Veuillez indiquer votre adresse email')
                        setUsernameError("Votre nom d'utilisateur ne peut contenir que des lettres et des chiffres")
                    }
                    throw new Error()
                } else if (!username.match(usernameRegex) && !email.match(emailRegex)) {
                    setEmailError('Veuillez indiquer une adresse email valide')
                    setUsernameError("Votre nom d'utilisateur ne peut contenir que des lettres et des chiffres")
                    throw new Error()
                } else if (!username.match(usernameRegex)) {
                    if (Array.from(usersData).find(user => user.email === email.toLowerCase())) {
                        setEmailError('Cette adresse email est déjà utilisée')
                    }
                    setUsernameError("Votre nom d'utilisateur ne peut contenir que des lettres et des chiffres")
                    throw new Error()
                } else if (!email.match(emailRegex)) {
                    if (Array.from(usersData).find(user => user.username === username)) {
                        setUsernameError("Ce nom d'utilisateur est déjà utilisé")
                    }
                    setEmailError('Veuillez indiquer une adresse email valide')
                    throw new Error()
                } else {
                    if (Array.from(usersData).find(user => user.username === username)) {
                        if (Array.from(usersData).find(user => user.email === email.toLowerCase())) {
                            setUsernameError("Ce nom d'utilisateur est déjà utilisé")
                            setEmailError('Cette adresse email est déjà utilisée')
                        } else setUsernameError("Ce nom d'utilisateur est déjà utilisé")
                        throw new Error()
                    } else if (Array.from(usersData).find(user => user.email === email.toLowerCase())) {
                        setEmailError('Cette adresse email est déjà utilisée')
                        throw new Error()
                    } else {
                        break
                    }
                }
            case 3:
                // Vérifier les mots de passe et les cgu
                if (!password || !passwordControl || !terms.checked) {
                    if (!password) setPasswordError('Vous devez renseigner un mot de passe.')
                    else if (!passwordControl) setPasswordContolError('Vous devez confirmer votre mot de passe.')
                    else if (!terms.checked) setTermsError('Vous devez accepter')
                    throw new Error()
                } else {
                    if (!password.match(passwordRegex)) {
                        setPasswordError(
                            'Votre mot de passe doit contenir au moins huit caractères, dont au moins un chiffre, et comprend des lettres minuscules et majuscules ainsi que des caractères spéciaux.'
                        )
                        throw new Error()
                    }
                    if (passwordControl !== password) {
                        setPasswordContolError('Les mots de passe ne correspondent pas.')
                        throw new Error()
                    }
                    break
                }
        }
    }

    useEffect(() => {
        setPasswordContolError('')
        if (passwordControl !== password) setPasswordContolError('Les mots de passe ne correspondent pas.')
    }, [passwordControl])

    useEffect(() => {
        setPasswordError('')
        if (!password.match(passwordRegex))
            setPasswordError(
                'Votre mot de passe doit contenir au moins huit caractères, dont au moins un chiffre, et comprend des lettres minuscules et majuscules ainsi que des caractères spéciaux.'
            )
    }, [password])

    const next = () => {
        setCurrentStepIndex(currentStepIndex + 1)
    }

    const back = () => {
        currentStepIndex > 0 ? setCurrentStepIndex(currentStepIndex - 1) : navigate(-1)
    }

    return (
        <LogContainer>
            <BackButton
                icon='ArrowLeft'
                label={`Étape ${currentStepIndex + 1}/${4}`}
                onClick={() => {
                    currentStepIndex === 0 ? navigate(-1) : back()
                }}
            />
            {currentStepIndex === 0 && (
                <>
                    <Title>Créer votre compte</Title>
                    <Form onSubmit={e => handleRegister(e)}>
                        <FormWrapper>
                            <Input
                                id='name'
                                type='text'
                                label='Prénom'
                                value={name}
                                error={nameError}
                                onChange={e => setName(e.target.value)}
                                autoFocus
                            />
                            <Input
                                id='surname'
                                type='text'
                                label='Nom'
                                value={surname}
                                error={surnameError}
                                onChange={e => setSurname(e.target.value)}
                            />
                            <Caption>
                                Déjà enregistré ?{' '}
                                <Link primary='true' onClick={handleModals}>
                                    Connectez vous
                                </Link>
                            </Caption>
                        </FormWrapper>
                        <Button>Suivant</Button>
                    </Form>
                </>
            )}
            {currentStepIndex === 1 && (
                <>
                    <Title>Dites nous tout</Title>
                    <Form onSubmit={e => handleRegister(e)}>
                        <FormWrapper>
                            <Input
                                id='birth-date'
                                type='date'
                                label='Date de naissance'
                                value={birthDate}
                                error={birthDateError}
                                onChange={e => setBirthDate(e.target.value)}
                                autoFocus
                            />
                        </FormWrapper>
                        <Button>Suivant</Button>
                    </Form>
                </>
            )}
            {currentStepIndex === 2 && (
                <>
                    <Title>Entrez vos identifiants</Title>
                    <Form onSubmit={e => handleRegister(e)}>
                        <FormWrapper>
                            <Input
                                id='username'
                                type='text'
                                label="Nom d'utilisateur"
                                value={username}
                                error={usernameError}
                                onChange={e => setUsername(e.target.value)}
                                autoFocus
                            />
                            <Input
                                id='email'
                                type='text'
                                label='Adresse email'
                                value={email}
                                error={emailError}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </FormWrapper>
                        <Button>Suivant</Button>
                    </Form>
                </>
            )}
            {currentStepIndex === 3 && (
                <>
                    <Title>Créez un mot de passe</Title>
                    <Form onSubmit={e => handleRegister(e)}>
                        <FormWrapper>
                            <Input
                                id='password'
                                type='password'
                                label='Mot de passe'
                                error={passwordError}
                                onChange={e => setPassword(e.target.value)}
                                autoFocus
                            />
                            <Input
                                id='password-conf'
                                type='password'
                                label='Confirmer mot de passe'
                                error={passwordControlError}
                                onChange={e => setPasswordControl(e.target.value)}
                            />
                            <Checkbox id='terms' error={termsError}>
                                <span>
                                    J'ai lu et j'accepte les <Link>conditions d'utilisation</Link> et la{' '}
                                    <Link>Politique de confidentialité</Link>
                                </span>
                            </Checkbox>
                        </FormWrapper>
                        <Button>Valider l'inscription</Button>
                    </Form>
                </>
            )}
        </LogContainer>
    )
}

export default SignUpForm
