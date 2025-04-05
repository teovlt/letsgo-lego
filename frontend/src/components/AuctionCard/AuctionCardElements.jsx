import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(NavLink)`
    width: 100%;
    display: flex;
    row-gap: 16px;
    flex-direction: column;

    padding: 20px 24px 24px;
    border-radius: 10px;
    cursor: pointer;

    --tw-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background: var(--background-secondary);
`

export const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 32px;

    @media screen and (min-width: 765px) {
        justify-content: flex-start;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    gap: 32px;

    @media screen and (min-width: 765px) {
        justify-self: center;
        flex-direction: row;
    }
`

export const HGroup = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const SmallRow = styled.div`
    display: flex;
    column-gap: 32px;
    align-items: center;
`

export const Row = styled.div`
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 32px;

    padding: 16px 0;
    border-bottom: 0.5px solid var(--text-base-tertiary);

    @media screen and (min-width: 765px) {
        flex-basis: calc(50% - 16px);
    }
`

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: var(--text-base-primary);
`

export const Text = styled.p`
    color: ${props => (props.bold ? 'var(--text-base-primary)' : 'var(--text-base-tertiary)')};
`

export const Image = styled.img`
    width: 140px;
    aspect-ratio: 1/1;

    object-fit: cover;
    object-position: center;

    border-radius: 5px;
`

export const Label = styled.span`
    display: none;

    font-size: 14px;
    color: var(--text-base-primary);

    padding: 6px 12px;
    border-radius: 5px;
    background: var(--background-primary-disabled);

    @media screen and (min-width: 765px) {
        display: block;
    }
`

export const Button = styled.button`
    border: none;
    outline: none;

    flex: 1;
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
