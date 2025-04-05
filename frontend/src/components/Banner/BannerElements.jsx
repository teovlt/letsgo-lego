import styled from 'styled-components'
import { XMarkIcon } from '@heroicons/react/24/outline'

export const Container = styled.div`
    padding-block: 12px;
    background: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Message = styled.span`
    width: 80%;
    font-size: 16px;
    text-align: center;
    color: var(--text-base-quaternary);
`

export const XMark = styled(XMarkIcon)`
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 30px;
    padding: 5px;
    border-radius: 50px;
    color: var(--text-base-quaternary);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.15);
    }

    &:active {
        background: rgba(0, 0, 0, 0.25);
    }
`
