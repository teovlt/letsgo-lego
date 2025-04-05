import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.footer`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    row-gap: 32px;

    padding: 24px;
    color: var(--text-base-quaternary);
    background: var(--background-primary);

    @media screen and (max-width: 765px) {
        flex-direction: column;
    }
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`

export const SectionTitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
`

export const SectionLinks = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const Item = styled.li``

export const Link = styled(NavLink)`
    color: currentColor;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`

export const Credentials = styled.h4`
    /* flex-basis: 100%; */
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
`
