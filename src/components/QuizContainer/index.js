import styled from 'styled-components'

const QuizContainer = styled.div`
	width: 100%;
	max-width: 350px;

	padding-top: 25px;
	margin: auto 10%;

	@media screen and (max-width: 600px) {
		margin: auto;
		padding: 15px;
	}

	@media screen and (min-width: 601px) and (max-width: 1600px) {
        max-width: 315px;

		margin: auto 15%;
    }
`
export default QuizContainer
