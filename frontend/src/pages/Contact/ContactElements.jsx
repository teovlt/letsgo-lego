import styled from 'styled-components'

export const Hgroup = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 28px;
`

export const ButtonSubmit = styled.button`
    border: none;
    outline: none;
    background-color: var(--background-primary);
    border-radius: 10px;
    flex: 1;
    padding: 12px 24px;
    color: var(--text-base-quaternary);
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: var(--background-primary-hover);
    }

    &:active {
        background-color: var(--background-primary-disabled);
    }
`

export const DivButton = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`
export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    column-gap: 10px;
`
