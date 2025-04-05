import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Img = styled.img`
    width: 100%;
    border: 0px solid;
    padding: 14px;
`

export const Text = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 14px;
`

export const Titre = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 14px;
    padding-bottom: 10px;
`

export const DivBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

export const Link = styled(NavLink)`
    border: none;
    outline: none;
    background-color: black;
    border-radius: 10px;
    padding: 12px 24px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    width: 70%;
    text-align: center;

    &:hover {
        background-color: var(--background-primary-hover);
    }

    &:active {
        background-color: var(--background-primary-disabled);
    }

    @media screen and (min-width: 765px) {
        width: 50%;
    }
`
