import React, { useEffect, useState, Component } from 'react'
import { useDispatch } from 'react-redux'
import {
    Info,
    InfoContainer,
    InfoList,
    InfoTitle,
    InfoWrapper,
    Header,
    Title,
    Subtitle,
    HGroup,
    Button,
    UpdateContainer,
    Overlay,
    UpdateTitle,
    Divider,
    Form,
} from './ProfilElements'
import { NavLink } from 'react-router-dom'
import UploadImg from './UploadImg'
import TextArea from '../TextArea'
import { updateBio } from '../../redux/actions/user.action'
import { socket } from '../../io/socket.config'

const UpdateProfil = ({ user }) => {
    const dispatch = useDispatch()

    const [bio, setBio] = useState('')
    const [updateForm, setUpdateForm] = useState(false)

    useEffect(() => {
        setBio(user.bio)
    }, [user])

    useEffect(() => {
        updateForm ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
    })

    const handleUpdates = e => {
        e.preventDefault()
        dispatch(updateBio(user._id, bio)).then(() => socket.emit('updateUsers'))
        setUpdateForm(false)
    }

    return (
        <>
            <Header>
                <UploadImg user={user} />
                <HGroup>
                    <Title>
                        {user.name} {user.surname}
                    </Title>
                    <Subtitle>@{user.username}</Subtitle>
                </HGroup>
            </Header>
            <InfoWrapper>
                <InfoContainer>
                    <InfoTitle>Informations personnelles</InfoTitle>
                    <InfoList>
                        <Info>Adresse Email : {user.email}</Info>
                        <Info>
                            <NavLink>Changer mot de passe</NavLink>
                        </Info>
                    </InfoList>
                </InfoContainer>
            </InfoWrapper>
            <InfoWrapper>
                <InfoContainer>
                    <InfoTitle>Biographie</InfoTitle>
                    <Info>{bio ? bio : "Vous n'avez pas encore de biographie."}</Info>
                    <Button onClick={() => setUpdateForm(!updateForm)}>Modifier</Button>
                </InfoContainer>
            </InfoWrapper>
            {updateForm && (
                <>
                    <Overlay onClick={() => setUpdateForm(false)} />
                    <UpdateContainer>
                        <UpdateTitle>Modifier biographie</UpdateTitle>
                        <Divider />
                        <Form onSubmit={handleUpdates}>
                            <TextArea
                                type='textarea'
                                id='bio'
                                label='Biographie'
                                error=''
                                value={bio}
                                onChange={e => setBio(e.target.value)}
                                maxLength='140'
                            />
                            <Button>Enregistrer</Button>
                        </Form>
                    </UpdateContainer>
                </>
            )}
        </>
    )
}

export default UpdateProfil
