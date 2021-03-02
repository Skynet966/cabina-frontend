import styled, { createGlobalStyle } from 'styled-components';

export const AppContainer = styled.section``;

export const theme = {
	Header: '#0f3057',
	HeaderText: '#e7e7de',
	Body: '#e7e7de',
	BodyText: '#505050',
	Footer: '#0f3057',
	FooterText: '#d9d9d9',
	FooterTextBg: '#00587a',
	FooterLineFX: '#008891',
	ActiveLink: '#008891',
	MutedText: '#6c757d',
	LineFX: '#00587a',
	Shadow: '#008891'
};

export const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior:smooth;
    }
    body{
        background: ${({ theme }) => theme.Body};
        font-family: 'Courgette', cursive;
        font-size:16px;
        font-weight:400;
        overflow-x:hidden;
        margin:0;
    }
    /* selection for text */
    ::selection{
        background-color:${({ theme }) => theme.ActiveLink};
        color: white;
    }
     //Scroll bar Global Style
    /* width */
    ::-webkit-scrollbar {
        width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background:${({ theme }) => theme.Body};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #97989b;
        border-radius: 1em;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #323335;
    }
     h1,h2,h3,h4,h5,h6{
        font-family: 'Courgette', cursive;
        font-weight: 700;
        margin: 0 0 15px;
        color: ${({ theme }) => theme.BodyText}
    }
    h1{
        font-size: 32px;
    }
    h2{
        font-size: 25px;
    }
    h3{
        font-size: 20px;
    }
    h4{
        font-size: 16px;
    }
    h5{
        font-size: 12px;
    }
    h6{
        font-size: 8px;
    }

    p{
        line-height: 22px;
        margin: 0 0 20px;
        color: ${({ theme }) => theme.BodyText}
    }
    a{
        color: ${({ theme }) => theme.HeaderText};
        text-decoration: none;
        outline:none;
        transition: color 0.3s ease-in;
        &:hover,:focus{
            color: ${({ theme }) => theme.ActiveLink};
        } 
    }
    .active__link {
	    color: ${({ theme }) => theme.ActiveLink};
	    font-weight: 700;
    }
`;
