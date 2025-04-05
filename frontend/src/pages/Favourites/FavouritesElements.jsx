import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
`

export const CtaHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 16px;
    padding: 0 24px;
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

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Nav = styled.nav`
    overflow-x: scroll;
    white-space: nowrap;

    padding: 0 24px;
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

export const TabNavLinks = styled.button`
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
`

export const FavContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
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
