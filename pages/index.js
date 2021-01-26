import styled from 'styled-components'
import database from '../db.json'

import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.primary};
`

export const QuizContainer = styled.div`
	width: 100%;
	max-width: 350px;

	padding-top: 45px;
	margin: auto 10%;

	@media screen and (max-width: 500px) {
		margin: auto;
		padding: 15px;
	}
`

export default function Home() {
	return (
		<QuizBackground backgroundImage={database.bg}>
			<QuizContainer>
				<Widget>
					<Widget.Header>

					</Widget.Header>
					<Widget.Content>

					</Widget.Content>
				</Widget>
				<Widget>
					<Widget.Header>

					</Widget.Header>
					<Widget.Content>

					</Widget.Content>
				</Widget>
				<Footer />
			</QuizContainer>
			<GitHubCorner />
		</QuizBackground>
	)
}
