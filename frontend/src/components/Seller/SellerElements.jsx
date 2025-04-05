import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;

    padding: 32px 24px;
    border-radius: 10px;
    background: var(--background-primary-disabled);
`

export const Picture = styled.img`
    width: 120px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    border-radius: 60px;
`

export const HGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3px;
`

export const Name = styled.p`
    font-size: 16px;
    color: var(--text-base-primary);
`

const Caption = styled.p`
    font-size: 14px;
    color: var(--text-base-secondary);
`

export const Username = styled(Caption)``

export const Biographie = styled(Caption)``
