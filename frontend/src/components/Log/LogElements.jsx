import { NavLink } from 'react-router-dom'
import { Container } from '../Container'
import styled from 'styled-components'

export const LogContainer = styled(Container)`
    background: var(--background-secondary);
    --tw-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background: var(--background-secondary);

    border-radius: 0;
    height: 100vh;

    @media screen and (min-width: 765px) {
        position: absolute;
        height: auto;
        width: 400px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export const Title = styled.h1`
    font-family: 'Playfair Display';
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -3%;
    line-height: 130%;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 48px;
    align-items: flex-start;
    justify-content: flex-start;
`

export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 24px;
`

export const Button = styled.button`
    /* position: absolute;
    bottom: 36px; */

    width: 100%;
    border: none;
    cursor: pointer;
    padding: 16px;
    border-radius: 50px;
    background: var(--background-primary);
    color: var(--text-base-quaternary);
    font-size: 16px;
    font-weight: 700;
`

export const Link = styled(NavLink)`
    color: ${props => (props.primary ? 'var(--accent)' : 'var(--text-base-primary)')};
    font-weight: ${props => props.primary && '700'};
    text-decoration: underline;
`

export const Caption = styled.span`
    align-self: center;

    font-size: 16px;
    color: var(--text-base-secondary);
`
