import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head';
import database from '../db.json';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		
		display: flex;
		flex-direction: column;

		font-family: 'Lato', sans-serif;
		word-spacing: 1.8px;
		
		color: ${({ theme }) => theme.colors.contrastText};
	}

	input, button {
		font-family: 'Lato', sans-serif;
	}

	html, body {
		min-height: 100vh;
	}

	#__next {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	a {
		text-decoration: none;
	}

	a, button {
		cursor: pointer;
	}

	.swal-modal {
		width: 255px;
		height: 150px;
		background-color: ${({ theme }) => `${theme.colors.darkBrown}`};

		border: 1px solid ${({ theme }) => `${theme.colors.secondary}70`};
	}

	.swal-content {
		margin-top: 10px;

		color: ${({ theme }) => `${theme.colors.cardsText}`};

		p {
			font-weight: 400;
		}
	}

	/* .swal-button.swal-button--confirm {
		background-color: ${({ theme }) => `${theme.colors.secondary}`};
		color: ${({ theme }) => `${theme.colors.cardsText}`};

		&:hover {
			background-color: ${({ theme }) => theme.colors.tertiary};
        	box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.cardsText};
		}
	} */
`

const { theme } = database

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
        		<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
				<link rel="icon" type="image/png" href="/images/favicon.png"/>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
