import styled from 'styled-components'

const Button = styled.button`
    width: 100%;
    height: 38px;

    padding: 10px;
    margin-top: 2px;

    font-size: 14px;
	font-weight: 700;
    letter-spacing: 1.25px;
   
    outline: none;
    border: none;

    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.cardsText};

    box-shadow: 0 0 2px 0 ${({ theme }) => theme.colors.secondary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.tertiary};
        box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.cardsText};
    }
    
    @media screen and (min-width: 601px) and (max-width: 1600px) {
        height: 34px;
    }
`

export default Button
