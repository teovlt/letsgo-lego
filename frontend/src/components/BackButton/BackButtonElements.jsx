import styled from 'styled-components'

export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    column-gap: 8px;

    color: var(--text-base-primary);
    font-weight: 700;
    font-size: 16px;

    @media screen and (min-width: 765px) {
        /* flex-basis: 100%; */
    }
`
