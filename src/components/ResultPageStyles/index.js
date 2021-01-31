import styled from 'styled-components'

export const H1 = styled.h1`
    color: ${({ theme }) => `${theme.colors.mainBg}`};
    margin-left: 20px;

    font-size: 20px;

    cursor: pointer;

    transition: opacity .2s;

    &:hover {
        opacity: .7;

        text-decoration: underline;
        text-underline-position: under;
    }

    .icon-return {
        margin-bottom: -5px;
        margin-right: 10px;
    }

    @media screen and (max-width: 500px) {
        margin-left: 10px;

        font-size: 14px;
        
        width: 150px;

        display: flex;

        -webkit-tap-highlight-color: transparent;
    }
`

export const ResultWidgetWrapper = styled.div`
    max-width: 350px;
    margin: 25px auto 10px;

    @media screen and (max-width: 600px) {
        width: 320px;

        margin-top: 165px;
    }
`

export const Span = styled.span`
    color: ${({ theme }) => `${theme.colors.cardsText}`};
`

export const StyledLink = styled.span`
    cursor: pointer;

    transition: opacity .2s;

    color: ${({ theme }) => `${theme.colors.cardsText}`};

&:hover {
    text-decoration: underline;
    text-underline-position: under;

    opacity: .7;
}
`
