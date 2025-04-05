import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
`

export const CtaHeader = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`

export const HGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
`

export const Title = styled.h1`
    font-family: 'Playfair Display';
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -3%;
    line-height: 130%;
`

export const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: var(--text-base-secondary);
`

export const ProfilPicture = styled.img`
    width: 120px;
    aspect-ratio: 1/1;
    border-radius: 120px;
    object-fit: cover;
    object-position: center;
`

export const UploadImgLabel = styled.label`
    display: flex;
    position: relative;
    user-select: none;

    &:hover::before {
        content: 'Changer photo de profil';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 12px;
        background: var(--background-primary-hover);
        border-radius: 120px;

        font-size: 14px;
        color: var(--text-base-quaternary);
        text-decoration: underline;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

export const FileInput = styled.input`
    display: none;
`

export const InfoWrapper = styled.div`
    width: 100%;
    padding: 24px;
    margin-inline: auto;

    display: flex;
    column-gap: 16px;
    align-items: center;

    border-radius: 10px;
    --tw-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background: var(--background-secondary);
`

export const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`

export const InfoTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: var(--text-base-primary);
`

export const InfoList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const Info = styled.li`
    font-size: 16px;
    color: var(--text-base-secondary);

    a {
        color: var(--text-base-primary);
        text-decoration: underline;
    }
`

export const Button = styled.button`
    border: none;
    outline: none;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    font-size: 16px;
    padding-block: 16px;
    border-radius: 5px;
    color: ${props =>
        !props.destructive
            ? !props.secondary
                ? 'var(--text-base-quaternary)'
                : 'var(--text-base-primary)'
            : !props.secondary
            ? 'var(--text-base-quaternary)'
            : 'var(--destructive)'};
    background: ${props =>
        !props.destructive
            ? !props.secondary
                ? 'var(--background-primary)'
                : 'transparent'
            : !props.secondary
            ? 'var(--destructive)'
            : 'transparent'};
    border: ${props =>
        props.secondary
            ? props.destructive
                ? '1.5px solid var(--destructive)'
                : '1.5px solid var(--background-primary)'
            : ''};
`

export const Overlay = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--background-primary-hover);
`

export const UpdateContainer = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;

    background: var(--background-secondary);
    border-radius: 15px 15px 0 0;
    padding: 24px;
    padding-bottom: 48px;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;

    @media screen and (min-width: 765px) {
        padding: 48px;

        position: fixed;
        top: 50%;
        bottom: auto;
        left: 50%;
        transform: translate(-50%, -50%);

        width: min(80%, 600px);
        row-gap: 32px;
        border-radius: 10px;
    }
`

export const UpdateTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: var(--text-base-primary);
`

export const Divider = styled.span`
    width: 100%;
    border: 0.5px solid var(--text-base-tertiary);
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`

export const AuctionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
`
