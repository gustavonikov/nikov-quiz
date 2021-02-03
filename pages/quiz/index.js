import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { AiFillHome } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'
import { CgCloseO } from 'react-icons/cg'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import swal from '@sweetalert/with-react'

import Button from '../../src/components/Button'
import GitHubCorner from '../../src/components/GitHubCorner'
import QuizBackground from '../../src/components/QuizBackground'
import QuizContainer from '../../src/components/QuizContainer'
import QuizLogo from '../../src/components/QuizLogo'
import Widget from '../../src/components/Widget'
import Link from '../../src/components/Link'
import { H1, ResultWidgetWrapper, Span, StyledLink } from '../../src/components/ResultPageStyles'

import database from '../../db.json'

function QuestionWidget({ question, questionIndex, onSubmit, addResult, name }) {
    const [selectedAlternative, setSelectedAlternative] = useState(undefined)
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)
    const [inputCheckedId, setInputCheckedId] = useState('')
    const isCorrect = selectedAlternative === question.answer

    function answerNotification(text) {
        swal({
            buttons: false,
            timer: 1700,
            content: (
                <h4>
                    Resposta {text} &nbsp;
                    {
                        text === 'correta' ?
                            (
                                <>
                                    <FaCheck
                                        size={25}
                                        color={database.theme.colors.success}
                                        style={{ marginBottom: '-5px' }}
                                    />
                                    <p style={{ marginTop: '25px' }}>
                                        Muito bem :&#41; {name}!
                                    </p>
                                </>
                            )
                            :
                            (
                                <>
                                    <CgCloseO
                                        size={27}
                                        color={database.theme.colors.wrong}
                                        style={{ marginBottom: '-8px' }}
                                    />
                                    <p style={{ marginTop: '23px' }}>
                                        Não foi dessa vez, {name} :&#40; 
                                    </p>
                                </>
                            )
                    }
                </h4>
            )
        }

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
                    height: '180px',
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
                    {isAnswerSubmitted && isCorrect && answerNotification('correta')}
                    {isAnswerSubmitted && !isCorrect && answerNotification('errada')}
                </form>
            </Widget.Content>
        </Widget>
    )
}

function ResultWidget({ results, name }) {
    const totalQuestions = database.questions.length
    const percentage = Number((results / totalQuestions).toFixed(2))
    let appropriateMessage

    if (percentage <= 0.33) {
        appropriateMessage = 'Sei que você pode fazer muito melhor, da próxima vez acertará todas!'
    }
    else if (percentage <= 0.5) {
        appropriateMessage = 'Você foi beem! Só tá um pouco enferrujado né? haha'
    }
    else if (percentage <= 0.75) {
        appropriateMessage = 'Você foi ótimo! Já deve ter matado muitos Colossus xD'
    }
    else if (percentage <= 0.99) {
        appropriateMessage = 'Parabéens! Você é um expert em Shadow of The Colossus!'
    }
    else if (percentage === 1) {
        appropriateMessage = 'Perfeito! Com certeza já zerou o jogo várias vezes!'
    }

    return (
        <>
            <Link href="/">
                <H1>
                    <AiFillHome size={28} className="icon-return" />
                    Ir para página inicial
                </H1>
            </Link>
            <ResultWidgetWrapper
                as={motion.div}
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
                <Widget>
                    <Widget.Header>
                        <h1>Seu resultado</h1>
                    </Widget.Header>

                    <Widget.Content>
                        <p>Hey, {name}!</p>
                        <p style={{ textUnderlinePosition: 'under', textDecoration: 'underline' }}>
                            Você acertou <Span>{results}</Span> de {totalQuestions} perguntas <br />
                        </p>
                        <span>{appropriateMessage}</span>
                        <p>
                            Obrigado por participar do quiz, mostra pros teus amigos e volte sempre!
                        </p>
                        <img
                            style={{
                                width: "100%",
                                height: "290px",
                                objectFit: "fill",
                                borderRadius: '4px',
                            }}
                            src="https://i.pinimg.com/564x/d5/5c/b8/d55cb8f125c8fdcb43d29030c0a98f21.jpg"
                            alt="Shadow of the Colossus"
                        />
                        <p>
                            E ah, não se esqueça que há outros quizzes muito divertidos da Imersão React da {' '}
                            <Link href="https://www.alura.com.br/">
                                <StyledLink color={database.theme.colors.contrastText}>Alura</StyledLink>
                            </Link> em nossa <Link href="/"><StyledLink yellow>página inicial</StyledLink></Link> para você checar!</p>
                    </Widget.Content>
                </Widget>
            </ResultWidgetWrapper>
        </>
    )
}

export default function QuizPage() {
    const router = useRouter()
    const { name } = router.query

    const [questionIndex, setQuestionIndex] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [results, setResults] = useState(0)

    const question = database.questions[questionIndex]
    const nextQuestion = questionIndex + 1

    function handleSubmit() {
        if (questionIndex < database.questions.length && nextQuestion < database.questions.length) {
            setTimeout(() => setQuestionIndex(nextQuestion), 1500)
        } else {
            setTimeout(() => setShowResult(true), 1500)
        }
    }

    function addResult(result) {
        setResults(results + result)
    }

    return (
        <QuizBackground backgroundImage={database.bg}>
            {
                showResult ?
                    <ResultWidget results={results} name={name} />
                    :
                    (
                        <QuizContainer
                            as={motion.div}
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
                            <Link href="/">
                                <QuizLogo />
                            </Link>
                            <QuestionWidget
                                question={question}
                                questionIndex={questionIndex}
                                onSubmit={handleSubmit}
                                addResult={addResult}
                                name={name}
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
    onSubmit: PropTypes.func.isRequired,
    addResult: PropTypes.func.isRequired,
}
