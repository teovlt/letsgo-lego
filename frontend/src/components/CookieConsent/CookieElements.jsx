import styled from 'styled-components'

export const Container = styled.div`
    background: var(--background-primary-hover);
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    //padding: 24px;

    @media screen and (max-width: 900px) {
        place-items: end center;
    }
`

export const Wrapper = styled.div`
    background-color: white;
    border-radius: 10px 10px 0 0;
    padding: 56px 48px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;

    row-gap: 40px;

    @media screen and (min-width: 900px) {
        max-width: 50%;
        border-radius: 10px;
    }
`

export const Para = styled.p`
    text-align: left;
    color: var(--text-base-secondary);

    h2 {
        padding-bottom: 8px;
        color: var(--text-base-primary);
    }
`

export const Text = styled.p`
    text-align: center;
`

export const DivButton = styled.div`
    width: 100%;
    display: flex;
    gap: 24px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const Button = styled.button`
    border: none;
    outline: none;
    background-color: black;
    border-radius: 10px;
    flex: 1;
    padding: 12px 24px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: var(--background-primary-hover);
    }

    &:active {
        background-color: var(--background-primary-disabled);
    }
`

export const Img = styled.img`
    width: 18%;
`
