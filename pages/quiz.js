import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../src/components/Button'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

import database from '../db.json'

const QuestionWidget = ({ question, questionIndex, onSubmit }) => (
    <Widget>
        <Widget.Header>
            <h3>{`Pergunta ${questionIndex + 1} de ${database.questions.length}`}</h3>
        </Widget.Header>
        <img 
            src={`${question.image}`}
            alt={`${question.answer}`}
            style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
            }}
        />
        <Widget.Content>
            <h2>
                {`${question.title}`}
            </h2>
            <p>
                {`${question.description}`}
            </p>
            <form onSubmit={(ev) => {
                ev.preventDefault()

                onSubmit()
            }}>
                {question.alternatives.map((alternative, index) => (
                    <Widget.Topic key={index} as="label" htmlFor={`alternative-${index}`}>
                        <input 
                            id={`alternative-${index}`} 
                            name={`question-${questionIndex}`} 
                            type="radio"
                        />
                        {alternative}
                    </Widget.Topic>
                ))}
                <Button type="submit">
                    Confirmar
                </Button>
            </form>
        </Widget.Content>
    </Widget>	
)


export default function QuizPage() {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const question = database.questions[questionIndex]
    const nextQuestion = questionIndex + 1

    function handleSubmit() {
        if (questionIndex >= database.questions.length) {
            showResult(true)
        } else {
            setQuestionIndex(nextQuestion)
        }
    }

    return (
		<QuizBackground backgroundImage={database.bg}>
			<QuizContainer>
				<QuizLogo />
                <QuestionWidget 
                    question={question} 
                    questionIndex={questionIndex}  
                    onSubmit={handleSubmit}
                />
			</QuizContainer>
			<GitHubCorner projectUrl='https://github.com/gustavonikov/nikov-quiz' />
		</QuizBackground>
    )
}

QuestionWidget.propTypes = {
    questionIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
}
