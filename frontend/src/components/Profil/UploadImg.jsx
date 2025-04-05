import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadPicture } from '../../redux/actions/user.action'
import { FileInput, ProfilPicture, UploadImgLabel } from './ProfilElements'

const UploadImg = ({ user }) => {
    const dispatch = useDispatch()
    const [picture, setPicture] = useState({ src: '', id: 0 })

    useEffect(() => {
        setPicture({ src: user.picture, id: 0 })
    }, [user])

    const handleSubmit = async event => {
        event.preventDefault()
        const data = new FormData()
        data.append('file', event.target.files[0])

        const res = await dispatch(uploadPicture(data, user._id))
        setPicture({ src: res.payload, id: picture.id + 1 })
    }

    return (
        <form onChange={handleSubmit}>
            <UploadImgLabel>
                <ProfilPicture src={`${import.meta.env.BASE_URL}${picture.src}?${picture.id}`} alt='profil' />
                <FileInput type='file' name='file' id='file' accept='.jpg, .jpeg, .png' />
            </UploadImgLabel>
        </form>
    )
}

export default UploadImg
