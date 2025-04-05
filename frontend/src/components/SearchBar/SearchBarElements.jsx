import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../Icon'

export const SearchContainer = styled.div`
    order: 1;
    display: flex;
    flex-basis: 100%;

    border-radius: 5px;
    padding-inline: 0 8px;
    color: var(--text-base-secondary);
    background: var(--background-secondary);

    position: relative;

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

export const IconBtn = styled(Icon)`
    cursor: pointer;
    padding: 5px;

    &:hover {
        background: var(--background-secondary-hover);
        border-radius: 30px;
    }
`

export const SearchIcon = styled(Icon)`
    padding: 5px;
`

export const SearchResults = styled.div`
    position: absolute;
    width: 100%;
    left: 0;
    top: 130%;
    z-index: 99;

    display: flex;
    flex-direction: column;

    padding-block: 16px;
    background: var(--background-secondary);
    box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
`

export const SearchResult = styled(NavLink)`
    font-size: 14px;
    padding: 8px 3em;
    color: var(--text-base-secondary);
    &:hover {
        color: var(--accent);
        background: var(--background-secondary-hover);
    }
`

export const SearchTitle = styled.h2`
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 8px 2em;
    color: var(--text-base-tertiary);
`
