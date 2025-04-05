import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;
    border-radius: 15px;
    padding: 24px 24px 48px;

    @media screen and (min-width: 765px) {
        width: 80%;
        margin: 24px auto 48px;
        margin-inline: auto;

        /* --tw-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        background: var(--background-secondary); */
    }
`
