import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --accent: #6558F5;
        --valid: #52b788;
        --destructive: #EB3D4D;

        --background-primary: #121212;
        --background-primary-hover: rgba(18, 18, 18, 0.72);
        --background-primary-disabled: rgba(18, 18, 18, 0.12);
        --background-secondary: #ffffff;
        --background-secondary-hover: rgba(18, 18, 18, 0.06);
        --background-secondary-disabled: #ffffff;

        --text-base-primary: #121212;
        --text-base-secondary: #545454;
        --text-base-tertiary: #999999;
        --text-base-quaternary: #fafafa;

        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
    }

    *, ::before, ::after {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }

    html {
        background: #f9f9f9;
        height: 100vh;
    }
    
    body {
        font-family: 'Helvetica Neue', sans-serif;
        height: 100%;
    }
    
    /* Hide scrollbar for Chrome, Safari and Opera */
    body::-webkit-scrollbar {
        display: none;
    }
    
    #root {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`

export default GlobalStyle
