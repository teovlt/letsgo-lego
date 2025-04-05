import styled from 'styled-components'
import Icon from '../../components/Icon'

export const SalePicture = styled.img`
    width: calc(100%);
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    vertical-align: bottom;
    border-radius: 10px;
`

export const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`

export const SaleTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: var(--text-base-primary);
`

export const Paragraph = styled.h2`
    font-size: 16px;
    font-weight: 400;
    text-align: ${props => (props.center ? 'center' : 'left')};
    color: var(--text-base-primary);
`

export const SaleInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`

export const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.center ? 'center' : 'flex-start')};
    row-gap: 16px;
`

export const Caption = styled.span`
    display: flex;
    column-gap: 5px;
    align-items: center;

    font-size: 15px;
    color: var(--text-base-secondary);

    a {
        color: var(--accent);
        text-decoration: underline;
    }
`

export const BoldCaption = styled.h3`
    font-size: 16px;
    line-height: 150%;
    font-weight: 700;

    display: flex;
    column-gap: 24px;
    flex-wrap: nowrap;
    align-items: center;
`

export const RoundIcon = styled(Icon)`
    padding: 5px;
    border-radius: 15px;
    fill: var(--text-base-quaternary);
    background: var(--background-primary);
`

export const LastBidContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    padding: 12px 24px;
    border-radius: 10px;
    background: var(--background-primary-disabled);
`

export const LastBidWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BiderInfoContainer = styled.div`
    display: flex;
    column-gap: 12px;
    align-items: center;
`

export const BiderInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
`

export const BiderPicture = styled.img`
    width: 52px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    border-radius: 26px;
`

export const PriceChips = styled.span`
    height: 32px;
    display: flex;
    column-gap: 8px;
    align-items: center;

    padding-inline: 16px;
    background: var(--background-secondary);
    border-radius: 16px;
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
    padding-block: ${props => (props.secondary ? '12px' : '16px')};
    border-radius: 5px;
    color: var(--text-base-quaternary);
    background: ${props => (props.destructive ? 'var(--destructive)' : 'var(--background-primary)')};
`

export const SmallButton = styled.button`
    border: none;
    outline: none;

    align-self: flex-start;
    display: flex;
    column-gap: 8px;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border-radius: 5px;
    padding-block: 6px;
    padding-inline: 8px 12px;
    color: var(--text-base-quaternary);
    background: ${props => (props.destructive ? 'var(--destructive)' : 'var(--background-primary)')};
`

export const Overlay = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--background-primary-hover);
`

export const BidFormContainer = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;

    background: var(--background-secondary);
    border-radius: 15px 15px 0 0;
    padding: 24px;
    padding-bottom: 48px;

    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 24px;

    @media screen and (min-width: 765px) {
        padding: 48px;

        position: fixed;
        top: 50%;
        bottom: auto;
        left: 50%;
        transform: translate(-50%, -50%);

        width: min(80%, 600px);
        row-gap: 32px;
        border-radius: 10px;
    }
`

export const BidFormTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
    color: var(--text-base-primary);
`

export const Divider = styled.span`
    width: 100%;
    border: 0.5px solid var(--text-base-tertiary);
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`
