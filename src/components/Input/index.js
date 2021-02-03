import styled from 'styled-components'

const Input = styled.input`
    width: 283px;
    height: 40px;

    padding: 8px 16px;
    margin-top: 8px;
    margin-bottom: 24px;

    font-size: 14px;
	font-weight: 400;
    letter-spacing: .15px;
   
    outline: none;
    border: none;

    border: 1px solid ${({ theme }) => theme.colors.contrastText};
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.contrastText};

    @media screen and (min-width: 601px) and (max-width: 1600px) {
        width: 273px;
    }
`

export default Input
