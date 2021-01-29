import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import swal from '@sweetalert/with-react'

import Button from '../src/components/Button'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

import database from '../db.json'
import { useRouter } from 'next/router'

function QuestionWidget({ question, questionIndex, onSubmit, addResult }) {
    const [selectedAlternative, setSelectedAlternative] = useState(undefined)
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
    const [inputCheckedId, setInputCheckedId] = useState('')
    const isCorrect = selectedAlternative === question.answer

    function answerAlert(text, symbol) {
        swal(
            <h4>Você {text} &nbsp; {symbol}</h4>
        )
        const inputChecked = document.getElementById(inputCheckedId)
        inputChecked.checked = false
        setIsAnswerSubmitted(false)
    }

    return (
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
                    isCorrect && addResult(1)
                    onSubmit()
                    setIsAnswerSubmitted(true)
                }}>
                    {question.alternatives.map((alternative, index) => (
                        <Widget.Topic key={`alternative-${index}`} as="label" htmlFor={`alternative-${index}`}>
                            <input
                                id={`alternative-${index}`}
                                name={`question-${questionIndex}`}
                                type="radio"
                                onChange={() => {
                                    setInputCheckedId(`alternative-${index}`)
                                    setSelectedAlternative(index)
                                }}
                                required
                            />
                            {alternative}
                        </Widget.Topic>
                    ))}
                    <Button type="submit">
                        Confirmar
                    </Button>
                    {isAnswerSubmitted && isCorrect && answerAlert('acertou', ':)')}
                    {isAnswerSubmitted && !isCorrect && answerAlert('errou', ':(')}
                </form>
            </Widget.Content>
        </Widget>
    )
}

const H1 = styled.h1`
    color: ${({ theme }) => `${theme.colors.mainBg}`};
    margin-left: 20px;

    font-size: 20px;

    cursor: pointer;

    transition: opacity .2s;

    &:hover {
        opacity: .7;
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

const ResultWidgetWrapper = styled.div`
    max-width: 350px;
    margin: 25px auto 10px;

    @media screen and (max-width: 600px) {
        width: 320px;

        margin-top: 165px;
    }
`

const Span = styled.span`
    color: ${({ theme }) => `${theme.colors.cardsText}`};
`

function ResultWidget({ results }) {
    const router = useRouter();

    const totalQuestions = database.questions.length
    const percentage = Number((results / totalQuestions).toFixed(2))
    let appropriateMessage

    if (percentage <= 0.33) {
        appropriateMessage = 'Sei que você pode fazer muito melhor, da próxima vez acertará todas!'
    }
    else if (percentage <= 0.66) {
        appropriateMessage = 'Você foi muito beem! Com certeza matou muitos Colossus haha'
    }
    else if (percentage <= 0.99) {
        appropriateMessage = 'Parabéens! Você é um expert em Shadow of The Colossus!'
    }
    else if (percentage === 1) {
        appropriateMessage = 'Perfeito! Com certeza já zerou o jogo várias vezes!'
    }

    return (
        <>
            <H1 onClick={() => router.push('/')}>
                <AiFillHome size={28} className="icon-return" />
                Ir para página inicial
            </H1>
            <ResultWidgetWrapper>
                <Widget>
                    <Widget.Header>
                        <h1>Seu resultado</h1>
                    </Widget.Header>

                    <Widget.Content>
                        <p>Hey{ },</p>
                        <p style={{ textUnderlinePosition: 'under', textDecoration: 'underline' }}>
                            Você acertou <Span>{results}</Span> de {totalQuestions} perguntas <br />
                        </p>
                        <span>{appropriateMessage}</span>
                        <p>
                            Obrigado por participar do quiz, convide seus amigos e volte sempre!
                    </p>
                        <img
                            style={{
                                width: "100%",
                                height: "320px",
                                objectFit: "cover",
                                borderRadius: '4px',
                            }}
                            src="https://i.pinimg.com/564x/c5/86/c8/c586c8c9fceff41abda4c45bdca85ee4.jpg"
                            alt="Shadow of the Colossus"
                        />
                    </Widget.Content>
                </Widget>
            </ResultWidgetWrapper>
        </>
    )
}

export default function QuizPage() {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [results, setResults] = useState(0)

    const question = database.questions[questionIndex]
    const nextQuestion = questionIndex + 1

    function handleSubmit() {
        if (questionIndex < database.questions.length && nextQuestion < database.questions.length) {
            setTimeout(() => setQuestionIndex(nextQuestion), 1400)
        } else {
            setTimeout(() => setShowResult(true), 1400)
        }
    }

    function addResult(result) {
        setResults(results + result)
    }

    return (
        <QuizBackground backgroundImage={database.bg}>
            {
                showResult ?
                    <ResultWidget results={results} />
                    :
                    (
                        <QuizContainer>
                            <QuizLogo />
                            <QuestionWidget
                                question={question}
                                questionIndex={questionIndex}
                                onSubmit={handleSubmit}
                                addResult={addResult}
                            />
                        </QuizContainer>
                    )
            }
            <GitHubCorner projectUrl='https://github.com/gustavonikov/nikov-quiz' />
        </QuizBackground>
    )
}

QuestionWidget.propTypes = {
    questionIndex: PropTypes.number.isRequired,
    question: PropTypes.object.isRequired,
}
