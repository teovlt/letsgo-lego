import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 5px;
`

export const Container = styled.label`
    display: inline-flex;
    align-items: center;
    column-gap: 12px;
    font-size: 16px;
    color: var(--text-base-primary);
    user-select: none;
    cursor: pointer;

    a {
        display: inline-block;
        color: var(--accent);
        text-decoration: underline;
    }
`

export const CheckboxInput = styled.input`
    display: none;
`

export const Checkmark = styled.span`
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: var(--background-primary-disabled);
    position: relative;

    label input:checked ~ & {
        background: var(--background-primary);
    }

    &::after {
        content: '';
        position: absolute;
        display: none;
    }

    label input:checked ~ &::after {
        display: block;
    }

    label &::after {
        left: 50%;
        top: 45%;
        width: 6px;
        height: 12px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: translate(-50%, -50%) rotate(45deg);
    }
`

export const ErrorLabel = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    color: var(--destructive);

    svg {
        width: 20px;
        flex-shrink: 0;
    }
`

export const ErrorMessage = styled.span`
    font-size: 14px;
`
