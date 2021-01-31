import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

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
		
		router.push(`/quiz?name=${name}`)
	}

	function formatExternalLink(link) {
		const [quizName, githubUser] = link.replace(/\//g, '')
			.replace('https:', '')
			.replace('.vercel.app', '')
			.split('.')

		const [quizFirstLetter, ...quizLetters] = quizName

		const formattedQuizName = `${quizFirstLetter.toUpperCase()}${quizLetters.join('')}`

		return `${formattedQuizName} de ${githubUser}`
	}

	return (
		<QuizBackground backgroundImage={database.bg}>
			<Head>
				<title>NikovQuiz - Divirta-se!</title>
			</Head>
			<QuizContainer 
				as={motion.section} 
				variants={{
					show: { opacity: 1, y: '0' },
					hidden: { opacity: 0, y: '100%' }
				}}
				initial="hidden"
				animate="show"
				transition={{
					duration: .7,
					delay: 0
				}}
			>
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
						<h1>Quizes da galera</h1>
					</Widget.Header>
					<Widget.Content>
						<ul>
							{database.external.map((linkExterno, index) => (
								<li key={`quiz-${index}`}>
									<Widget.Topic href={linkExterno}>
										{formatExternalLink(linkExterno)}
									</Widget.Topic>
								</li>
							))}
						</ul>
					</Widget.Content>
				</Widget>
			</QuizContainer>
			<GitHubCorner projectUrl='https://github.com/gustavonikov/nikov-quiz' />
		</QuizBackground>
	)
}
