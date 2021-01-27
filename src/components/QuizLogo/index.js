import styled from 'styled-components'

const QuizLogo = styled.div`
    width: 200px;
    height: 190px;

    margin: 0 auto;

    background-image: url('/logo.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 500px) {
        margin: 0;
    }
`

export default QuizLogo
