import styled from 'styled-components'

const Button = styled.button`
    width: 283px;
    height: 36px;

    padding: 10px;

    font-size: 14px;
	font-weight: 700;
    letter-spacing: .15px;
   
    outline: none;
    border: none;

    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.cardsText};

    box-shadow: 0 0 3px 0 ${({ theme }) => theme.colors.secondary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.tertiary};
        box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.cardsText};
    }
`

export default Button