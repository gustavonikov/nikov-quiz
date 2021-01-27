import styled from 'styled-components'

const Widget = styled.div`
	margin-bottom: 24px;

	border-radius: 6px;

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
`

export default Widget
