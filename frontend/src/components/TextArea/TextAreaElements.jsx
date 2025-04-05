import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 5px;
`

export const Wrapper = styled.div`
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    row-gap: 3px;

    svg {
        fill: var(--text-base-secondary);
        position: absolute;
        top: 50%;
        right: 14px;
        transform: translateY(-50%);
        padding: 5px;
        transition: all 0.2s;
        border-radius: 50px;
        cursor: pointer;

        &:hover {
            background: rgba(0, 0, 0, 0.15);
        }

        &:active,
        &:focus {
            background: rgba(0, 0, 0, 0.25);
        }
    }
`

export const Area = styled.textarea`
    resize: none;
    width: 100%;
    padding: 12px;
    outline: none;
    border: 1px solid ${props => (props.error ? 'var(--destructive)' : 'var(--text-base-tertiary)')};
    border-radius: 5px;
    overflow: hidden;

    font-size: 16px;
    font-family: 'Helvetica Neue', sans-serif;
    color: var(--text-base-primary);

    &::placeholder {
        user-select: none;
    }

    &:focus {
        outline: 2px solid ${props => (props.error ? 'var(--destructive)' : 'var(--accent)')};
        outline-offset: -1px;
    }

    &:focus ~ label {
        color: ${props => (props.error ? 'var(--destructive)' : 'var(--accent)')};
    }

    &:not(:focus):not(:placeholder-shown) ~ label {
        color: ${props => (props.error ? 'var(--destructive)' : 'var(--text-base-tertiary)')};
    }
`

export const Label = styled.label`
    position: absolute;
    /* transform: translateY(-50%); */
    color: var(--text-base-tertiary);
    top: 13px;
    left: 13px;
    font-size: 16px;
    user-select: none;
    cursor: text;
    transition: all 0.1s;

    textarea:not(:placeholder-shown) + &,
    textarea:focus + & {
        transform: translateY(-50%);
        top: -1px;
        left: 12px;
        padding: 3px;

        font-size: 12px;
        background: var(--background-secondary);
    }
`

export const CharacterCounter = styled.span`
    font-size: 14px;
    color: var(--text-base-tertiary);
    align-self: flex-end;
`

export const ErrorLabel = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    align-content: flex-start;
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
