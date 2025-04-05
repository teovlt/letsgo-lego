import styled, { keyframes } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled(NavLink)`
    width: 160px;
    height: 335px;

    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    row-gap: 12px;

    padding: 12px 16px 16px;
    border-radius: 15px;
    --tw-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background: var(--background-secondary);

    @media screen and (min-width: 765px) {
        width: 256px;
        height: 360px;
        padding: 20px 24px 24px;
    }

    &:hover {
        --tw-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.12);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
`

export const Wrapper = styled.div`
    width: 100%;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    row-gap: 5px;
`

export const Label = styled.span`
    font-size: 14px;
    color: var(--text-base-primary);

    padding: 3px 6px;
    border-radius: 5px;
    background: var(--background-primary-disabled);
`

export const Image = styled.img`
    width: 100%;
    height: 88px;

    object-fit: cover;
    object-position: center;
    border-radius: 10px;

    @media screen and (min-width: 765px) {
        height: 138px;
    }
`

export const Text = styled.h2`
    font-weight: 400;
    font-size: ${props => (props.title ? '16px' : '14px')};
    color: var(--text-base-primary);
`

export const Caption = styled.p`
    font-size: 14px;
    color: ${props => (props.sub ? 'var(--text-base-tertiary)' : 'var(--text-base-secondary)')};
`

// Chargement

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingCircle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid var(--background-primary-disabled);
    border-top-color: var(--accent);
    animation: ${rotate} 1s linear infinite;
`
