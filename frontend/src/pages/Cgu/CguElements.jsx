import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Italic = styled.p`
    font-style: italic;
    color: var(--text-base-secondary);
`
export const Title = styled.h1`
    font-weight: 400;
    font-size: 20px;
    color: var(--text-base-primary);
    margin-top: 24px;
`
export const Section = styled.div`
    padding-block: 14px 10px;

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
    font-size: 24px;
    color: var(--text-base-primary);
`
export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: var(--text-base-secondary);

    li {
        list-style: inside;
        margin-left: 24px;
    }
`
export const Link = styled(NavLink)`
    color: black;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
