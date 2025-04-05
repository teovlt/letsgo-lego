import styled from 'styled-components'
import { Container } from '../../components/Container'

export const HomeContainer = styled(Container)`
    background: none;
    box-shadow: none;
`

export const Section = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 24px;
`

export const HGroup = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

export const SectionTitle = styled.h2`
    font-weight: 400;
    font-size: 20px;
    color: var(--text-base-primary);
`

export const SectionSubTitle = styled.h3`
    font-weight: 400;
    font-size: 16px;
    color: var(--text-base-secondary);
`

export const ProductsContainer = styled.div`
    width: calc(100% + 48px);
    margin-inline: -24px;
`

export const ProductsSlider = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    column-gap: 16px;

    padding: 12px 24px 36px;
    overflow-x: scroll;

    scrollbar-width: none; // for Firefox

    &::-webkit-scrollbar {
        display: none; // for Chrome, Safari, and Opera
    }
`
