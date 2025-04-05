import styled from 'styled-components'
import { Container as defaultContainer } from '../../components/Container'

export const Container = styled(defaultContainer)`
    --tw-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background: var(--background-secondary);
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    @media screen and (min-width: 1000px) {
        flex-flow: row wrap;
        align-items: flex-start;
        column-gap: 48px;
    }
`

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    @media screen and (min-width: 765px) {
        flex: 1;
    }
`

export const UploadImgLabel = styled.label`
    width: 100%;
    user-select: none;
    position: relative;

    &:hover::before {
        content: 'Importer une autre photo';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 12px;
        aspect-ratio: 4/3;
        background: var(--background-primary-hover);
        border-radius: 10px;

        font-size: 14px;
        color: var(--text-base-quaternary);
        text-decoration: underline;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media screen and (min-width: 765px) {
        flex: 1;
    }
`

export const UploadImgInput = styled.input`
    display: none;
`

export const Image = styled.img`
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    vertical-align: bottom;
`

export const ButtonSubmit = styled.button`
    border: none;
    outline: none;
    background-color: var(--background-primary);

    width: 100%;

    padding: 12px 24px;
    border-radius: 5px;
    color: var(--text-base-quaternary);
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: var(--background-primary-hover);
    }

    &:active {
        background-color: var(--background-primary-disabled);
    }
`

export const DivTypeEnchere = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 24px;

    select {
        border-radius: 5px;
        padding: 6px 12px;
        border: solid 1px var(--text-base-tertiary);
        color: var(--text-base-secondary);
        font-size: 14px;
        cursor: pointer;
    }

    span {
        display: flex;
        align-items: center;
        column-gap: 12px;
        border: solid 1px var(--text-base-tertiary);
        border-radius: 5px;
        padding: 6px 12px;
        color: var(--text-base-secondary);
        position: relative;
        font-size: 14px;
    }
`

export const Caption = styled.span`
    font-size: 14px;
    color: var(--text-base-secondary);

    a {
        color: var(--accent);
        text-decoration: underline;
    }
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;

    background: var(--background-primary-hover);
`

export const MoreInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    z-index: 51;

    padding: 56px 48px 36px;
    border-radius: 10px;

    color: var(--text-base-secondary);
    background: var(--background-secondary);
    h3 {
        padding: 12px 0 12px;
    }

    svg {
        position: absolute;

        border-radius: 15px;
        right: 9px;
        top: 9px;
        padding: 5px;
        cursor: pointer;

        &:hover {
            background-color: var(--background-secondary-hover);
        }
    }

    @media screen and (min-width: 765px) {
        width: 50%;
        row-gap: 10px;
        position: fixed;
        top: 30%;
        bottom: 30%;
    }
`
