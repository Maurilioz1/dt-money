import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --blue-light: #6933FF;       
        --blue: #5429CC;
        --green: #33CC95;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --background: #F0F2F5;;
        --input-background: #E7E9EE;
        --input-border: #D7D7D7;
        --shape: #FFFFFF;
    }

    * {
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .close-react-modal {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        background-color: transparent;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;