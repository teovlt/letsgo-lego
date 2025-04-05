import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Icon from '../Icon'

export const Navbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 32px;
    row-gap: 16px;

    /* position: relative; */
    padding: 16px 24px;
    color: var(--text-base-quaternary);
    background: var(--background-primary);
`

export const Logo = styled(NavLink)`
    color: currentColor;
    font-size: 26px;
    font-weight: 800;
    text-align: center;

    span {
        font-size: 20px;
        font-weight: 300;
        vertical-align: bottom;
    }

    @media screen and (max-width: 350px) {
        flex-basis: 100%;
        order: -1;
    }
`

export const MainNav = styled.ul`
    display: ${props => props.display};
    flex-direction: column;
    color: var(--text-base-secondary);

    position: absolute;
    top: 64px;
    left: 0;
    z-index: 10;
    width: 100%;
    height: calc(100vh - 64px);
    overflow-y: hidden;

    background: var(--background-secondary);

    @media screen and (min-width: 765px) {
        position: static;
        display: flex !important;
        flex-direction: row;
        column-gap: 32px;

        height: auto;
        flex-basis: 100%;
        color: var(--text-base-quaternary);
        background: none;
    }
`

export const NavLi = styled.li``

export const NavigationLink = styled(NavLink)`
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* font-size: 16px; */
    color: currentColor;
    border-bottom: 0.5px solid var(--text-base-tertiary);

    @media screen and (min-width: 765px) {
        font-size: 14px;
        padding: 0;
        border: none !important;

        svg {
            display: none;
        }
    }
`

export const Link = styled(NavigationLink)`
    display: ${props => props.display};
    justify-content: flex-start;
    column-gap: 12px;

    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 11;

    color: var(--text-base-secondary);
    border-bottom: none;
    border-top: 0.5px solid var(--text-base-tertiary);

    @media screen and (min-width: 765px) {
        border: none;
        display: flex !important;
        width: auto;
        position: static;
        color: currentColor;
    }
`

export const SearchBox = styled.div`
    order: 1;
    flex-basis: 100%;
    display: flex;
    padding-inline: 0 8px;
    color: var(--text-base-secondary);
    background: var(--background-secondary);
    border-radius: 5px;

    @media screen and (min-width: 765px) {
        order: 0;
        flex: 1 0 0;
    }
`

export const SearchInput = styled.input`
    outline: none;
    border: none;

    background: none;
    color: currentColor;

    width: 100%;
    padding-inline: 24px 12px;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
`

export const IconsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 12px;
`

export const IconLink = styled(NavLink)`
    cursor: pointer;
    padding: 5px;

    svg {
        vertical-align: bottom;
    }
`

export const NavBarToggle = styled.span`
    height: 20px;
    cursor: pointer;

    @media screen and (min-width: 765px) {
        display: none;
    }
`
