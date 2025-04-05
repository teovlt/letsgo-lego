import React, { useContext, useEffect, useState } from 'react'
import {
    ButtonSubmit,
    Container,
    DivTypeEnchere,
    Form,
    UploadImgLabel,
    UploadImgInput,
    Image,
    Caption,
    FormWrapper,
    Overlay,
    MoreInfoContainer,
} from './SellElements'
import Icon from '../../components/Icon'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import axios from 'axios'
import { UidContext } from '../../components/AppContext'
import Log from '../../components/Log'
import { useSelector } from 'react-redux'
import Confirmation from '../../components/Confirmation'
import { socket } from '../../io/socket.config'
import BackButton from '../../components/BackButton'

function Sell() {
    const navigate = useNavigate()
    const uid = useContext(UidContext)

    // Accéder à l'état 'user'
    const userData = useSelector(state => state.user)

    const [file, setFile] = useState()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [startPrice, setStartPrice] = useState('')
    const [reservePrice, setReservePrice] = useState('')
    const [image, setImage] = useState({ src: './uploads/auction/default.jpg', id: 0 })

    const [nameError, setNameError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [startPriceError, setStartPriceError] = useState('')
    const [reservePriceError, setReservePriceError] = useState('')

    const [category, setCategory] = useState('PACK')
    const [type, setType] = useState('TREND_DOWN')

    const [displayConfirm, setDisplayConfirm] = useState(false)
    const toggleDisplayConfirm = event => {
        event.preventDefault()
        try {
            verify()
            setFile(event.target.file.files[0])
            setDisplayConfirm(true)
        } catch (err) {
            // console.log(err)
        }
    }

    const [displayInfo, setDisplayInfo] = useState(false)
    const toggleDisplayInfo = () => {
        setDisplayInfo(!displayInfo)
    }
    useEffect(() => {
        displayInfo ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
    }, [displayInfo])

    useEffect(() => {
        switch (category) {
            case 'PACK':
                setType('TREND_DOWN')
                break
            case 'CLASSIC_SET':
                setType('TREND_DOWN')
                break
            case 'RARE_SET':
                setType('TREND_UP')
                break
            case 'RARE_ITEM':
                setType('TREND_UP')
                break
            case 'ORIGINAL_CREATION':
                setType('TREND_UP')
                break
        }
    }, [category])

    const handleSubmitTempImage = event => {
        event.preventDefault()
        try {
            const data = new FormData()
            data.append('userId', userData._id)
            data.append('file', event.target.files[0])

            axios({
                method: 'post',
                url: `${import.meta.env.VITE_API_URL}api/auction/upload/temp`,
                data: data,
            }).then(res => {
                res.data.status && setImage({ src: res.data.image, id: image.id + 1 })
            })
        } catch (err) {
            // console.log(err)
        }
    }

    const handleSubmit = () => {
        try {
            axios({
                method: 'post',
                url: `${import.meta.env.VITE_API_URL}api/auction/post`,
                data: {
                    sellerId: userData._id,
                    name,
                    description,
                    category,
                    type,
                    startPrice,
                    reservePrice,
                },
            })
                .then(res => {
                    if (res.data.errors) console.log(res.data.errors)
                    else {
                        const data = new FormData()
                        data.append('file', file)

                        axios({
                            method: 'post',
                            url: `${import.meta.env.VITE_API_URL}api/auction/${res.data._id}/upload`,
                            data: data,
                        }).then(res => {
                            socket.emit('createAuction')
                            window.location = '/dashboard/ventes'
                        })
                    }
                })
                .catch(err => console.log(err))
        } catch (err) {
            // console.log(err)
        }
    }

    const verify = () => {
        setNameError('')
        setDescriptionError('')
        setStartPriceError('')
        setReservePriceError('')
        if (
            !name ||
            !description ||
            !startPrice ||
            (type === 'TREND_DOWN' && !reservePrice) ||
            Math.sign(startPrice) <= 0 ||
            (type === 'TREND_DOWN' && Math.sign(reservePrice) <= 0) ||
            (type === 'TREND_DOWN' && reservePrice >= startPrice)
        ) {
            !name && setNameError('Veuillez indiquer le titre de la vente')
            !description && setDescriptionError('Veuillez renseigner une description du produit')
            !startPrice && setStartPriceError('Veuillez indiquer le prix de départ de la vente')
            Math.sign(startPrice) <= 0 && setStartPriceError('Prix incorrecte, nul ou négatif')
            type === 'TREND_DOWN' &&
                !reservePrice &&
                setReservePriceError('Veuillez indiquer le prix de réserve de la vente')
            type === 'TREND_DOWN' &&
                Math.sign(reservePrice) <= 0 &&
                setReservePriceError('Prix incorrecte, nul ou négatif')
            type === 'TREND_DOWN' &&
                reservePrice >= startPrice &&
                setReservePriceError('Prix incorrecte, supérieur ou égal au prix de départ')

            throw new Error()
        }
    }

    return (
        <>
            {uid ? (
                <>
                    <Navbar />
                    <Container>
                        <BackButton icon='ArrowLeft' label='Retour' onClick={() => navigate(-1)} />

                        <Form onSubmit={toggleDisplayConfirm} autoComplete='off'>
                            <UploadImgLabel onChange={handleSubmitTempImage}>
                                <Image src={`${import.meta.env.BASE_URL}${image.src}?${image.id}`} alt='produit' />
                                <UploadImgInput type='file' id='file' name='file' accept='.jpg, .jpeg, .png' />
                            </UploadImgLabel>

                            <FormWrapper>
                                <Input
                                    type='text'
                                    id='name'
                                    name='name'
                                    label='Titre'
                                    error={nameError}
                                    value={name}
                                    maxLength={50}
                                    onChange={e => setName(e.target.value)}
                                />
                                <TextArea
                                    type='text'
                                    id='desc'
                                    name='desc'
                                    label='Description'
                                    error={descriptionError}
                                    value={description}
                                    maxLength='300'
                                    onChange={e => setDescription(e.target.value)}
                                />

                                <DivTypeEnchere>
                                    <select name='category' onChange={e => setCategory(e.target.value)}>
                                        <option value='PACK'>Ensemble de pièces</option>
                                        <option value='CLASSIC_SET'>Sets classiques</option>
                                        <option value='RARE_SET'>Sets rares</option>
                                        <option value='RARE_ITEM'>Pièces de collection</option>
                                        <option value='ORIGINAL_CREATION'>Créations originales</option>
                                    </select>
                                    <span>
                                        <Icon
                                            name={
                                                (type === 'TREND_UP' && 'AscendingArrow') ||
                                                (type === 'TREND_DOWN' && 'DescendingArrow')
                                            }
                                            width='20'
                                            height='20'
                                            fill='var(--text-base-secondary)'
                                        />
                                        {(type === 'TREND_UP' && 'Montante') ||
                                            (type === 'TREND_DOWN' && 'Descendante')}
                                    </span>
                                </DivTypeEnchere>

                                <Caption>
                                    Le type d'enchère dépend de la catégorie de produit choisie.{' '}
                                    <NavLink onClick={() => toggleDisplayInfo()}>En savoir plus</NavLink>
                                </Caption>

                                <Input
                                    type='number'
                                    id='startPrice'
                                    name='startPrice'
                                    label='Prix de départ'
                                    error={startPriceError}
                                    value={String(startPrice)}
                                    onChange={e => setStartPrice(e.target.value === '' ? '' : parseInt(e.target.value))}
                                />

                                {type === 'TREND_DOWN' && (
                                    <Input
                                        type='number'
                                        id='reservePrice'
                                        name='reservePrice'
                                        label='Prix de réserve'
                                        error={reservePriceError}
                                        value={String(reservePrice)}
                                        onChange={e =>
                                            setReservePrice(e.target.value === '' ? '' : parseInt(e.target.value))
                                        }
                                    />
                                )}
                                <ButtonSubmit>Créer la vente</ButtonSubmit>
                            </FormWrapper>
                        </Form>
                        {displayInfo && (
                            <>
                                <Overlay onClick={() => toggleDisplayInfo()} />
                                <MoreInfoContainer>
                                    <Icon name='XMark' width='30' height='30' onClick={() => toggleDisplayInfo()} />
                                    <h3>Enchères montantes : </h3>utilisées pour vendre des créations artistiques ou des
                                    pièces de collection, et les acheteurs proposent des offres de plus en plus élevées
                                    jusqu'à ce que le temps imparti soit écoulé, et celui qui a la meilleure offre
                                    remporte l'enchère.
                                    <h3>Enchère descendantes : </h3>
                                    utilisées pour vendre des articles comme des packs de legos, où le prix de départ
                                    est élevé et diminue au fil du temps, et l'enchère est remportée lorsqu'un acheteur
                                    trouve le prix acceptable et l'achète immédiatement.
                                </MoreInfoContainer>
                            </>
                        )}
                    </Container>
                    <Footer />
                    {displayConfirm && (
                        <Confirmation
                            title={`Souhaitez vous vraiment créer la vente "${name}"`}
                            subtitle='Vous ne pourrez plus modifier les informations après cette étape'
                            cta='Valider la vente'
                            toggleDisplay={() => setDisplayConfirm(false)}
                            action={() => handleSubmit()}
                        />
                    )}
                </>
            ) : (
                <Log signin={true} signup={false} />
            )}
        </>
    )
}

export default Sell
