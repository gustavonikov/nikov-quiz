import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

import database from '../db.json'

export default function Home() {
	const router = useRouter()

	const [name, setName] = useState('')

	function handleSubmit(ev) {
		ev.preventDefault()
		console.log(name)
		router.push(`/quiz?name=${name}`)
	}

	return (
		<QuizBackground backgroundImage={database.bg}>
			<Head>
				<title>NikovQuiz - Divirta-se!</title>
			</Head>
			<QuizContainer>
				<QuizLogo />
				<Widget>
					<Widget.Header>
						<h1>Shadow of the Colossus</h1>
					</Widget.Header>
					<Widget.Content>
						<form onSubmit={(ev) => handleSubmit(ev)}>
							<Input
								name="name" 
								placeholder="Digite seu nome :)" 
								value={name} 
								onChange={({ target }) => setName(target.value)}
								required
							/>
							<Button type="submit">
								JOGAR
							</Button>
						</form>
					</Widget.Content>
				</Widget>
				<Widget>
					<Widget.Header>
						<h1>Quiz da galera</h1>
					</Widget.Header>
					<Widget.Content>
						<p>Vários quiz!</p>
					</Widget.Content>
				</Widget>
			</QuizContainer>
			<GitHubCorner projectUrl='https://github.com/gustavonikov/nikov-quiz' />
		</QuizBackground>
	)
}
