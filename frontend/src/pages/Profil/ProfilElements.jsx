import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Nav = styled.nav`
    overflow-x: scroll;
    white-space: nowrap;

    display: inline-flex;
    justify-content: flex-start;
    gap: 24px;

    scrollbar-width: none; // for Firefox

    &::-webkit-scrollbar {
        display: none; // for Chrome, Safari, and Opera
    }

    @media screen and (min-width: 765px) {
        gap: 32px;
    }
`

export const TabNavLink = styled(NavLink)`
    cursor: pointer;

    color: var(--text-base-primary);
    font-size: 16px;
    padding-block: 12px;
    white-space: nowrap;
    &.active {
        border-bottom: 1px solid var(--text-base-primary);
    }
`

export const NavButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    color: var(--text-base-primary);
    font-size: 16px;
    padding-block: 12px;
    white-space: nowrap;
    &.active {
        border-bottom: 1px solid var(--text-base-primary);
    }

    &:hover {
        color: var(--accent);
    }
`
