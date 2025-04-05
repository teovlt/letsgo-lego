import styled from 'styled-components'

export const Overlay = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--background-primary-hover);
`

export const ConfirmationContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);

    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;

    padding: 36px 24px;
    border-radius: 10px;
    background: var(--background-secondary);

    @media screen and (min-width: 765px) {
        width: 50%;
    }
`

export const ConfirmationTitle = styled.h2`
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: var(--text-base-primary);
`

export const ConfirmationSubtitle = styled.span`
    font-size: 14px;
    text-align: center;
    color: var(--text-base-secondary);
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
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
