import styled from 'styled-components'

const Widget = styled.div`
	margin-bottom: 24px;

	border-radius: 4px;

	box-shadow: 0 0 8px 0px ${({ theme }) => theme.colors.mainBg};

	overflow: hidden;

	background-color: ${({ theme }) => theme.colors.mainBg};

	h1, h2, h3 {
		font-size: 16px;
		font-weight: 700;
		line-height: 1;
		margin-bottom: 0;
	}

	p {
		font-size: 14px;
		font-weight: 400;
		line-height: 1;
	}
`

Widget.Header = styled.header`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	padding: 18px 32px;

	background-color: ${({ theme }) => theme.colors.primary};
	
	h1 {
		color: ${({ theme }) => theme.colors.cardsText};
	}
	
	* {
		margin: 0;
	}
`

Widget.Content = styled.div`
	form {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	
	padding: 24px 32px 32px 32px;

	p {
		line-height: 22px;
		letter-spacing: 1px;
	}

	& > *:first-child {
		margin-top: 0;
	}

	& > *:last-child {
		margin-bottom: 0;
	}

	ul {
		list-style: none;
		padding: 0;
	}


	@media screen and (max-width: 500px) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
		border-right: 1px solid ${({ theme }) => theme.colors.primary};
		border-left: 1px solid ${({ theme }) => theme.colors.primary};

		border-radius: 4px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
    }
`

Widget.Topic = styled.a`
	width: 100%;

	padding: 10px 15px;
	margin-bottom: 18px;

	color: ${({ theme }) => theme.colors.contrastText};
	background-color: ${({ theme }) => `${theme.colors.primary}40`};

	border-radius: ${({ theme }) => theme.borderRadius};
	
	display: block;

	cursor: pointer;
	outline: 0;
	text-decoration: none;
	transition: .3s;
	
	input {
		margin-right: 10px;

		cursor: pointer;
	}
`

export default Widget
