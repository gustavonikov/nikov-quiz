import { createGlobalStyle, ThemeProvider } from 'styled-components'
import database from '../db.json';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		/* New styles */
		display: flex;
		flex-direction: column;
		font-family: 'Lato', sans-serif;
		// Leaves white at the beginning
		color: ${({ theme }) => theme.colors.contrastText};
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
`

const theme = database.theme

export default function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
