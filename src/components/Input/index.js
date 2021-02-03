import styled from 'styled-components'

const Input = styled.input`
    width: 260px;
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

    @media screen and (max-width: 600px) {
        width: 258px;
    }
`

export default Input
