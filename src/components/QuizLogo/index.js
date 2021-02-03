import styled, { keyframes } from 'styled-components'

const upAndDown = keyframes`
    0%, 50%, 100% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(6px);
    }

    75% {
        transform: translateY(-6px)
    }
` 

const QuizLogo = styled.div`
    width: 200px;
    height: 190px;

    margin: 0 auto;

    background-image: url('/images/logo.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    animation: ${upAndDown} linear 3s infinite;

    @media screen and (max-width: 600px) {
        margin: 0;
    }

    @media screen and (min-width: 601px) and (max-width: 1600px) {
        width: 180px;
        height: 150px;
    }
`

export default QuizLogo
