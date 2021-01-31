/* import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/Screens/Quiz'

export default function OthersPeopleQuiz({ externalDb }) {
    return (
        <ThemeProvider theme={externalDb.theme}>
            <QuizScreen
                externalQuestions={externalDb.questions}
                externalBg={externalDb.bg}
            />
        </ThemeProvider>
    )
}

export async function getServerSideProps(context) {
    const [quizName, githubUser] = context.query.id.split('___')

    try {
        const externalDb = await fetch(`https://${quizName}.${githubUser}.vercel.app/api/db`)
            .then((res) => {
                if (res.ok) return res.json()

                throw new Error('Falhar em obter os dados')
            })
            .then((res) => res)
            .catch((error) => console.log(error))

        return {
            props: {
                externalDb,
            },
        }
    } catch (error) {
        throw new Error(error)
    }
}
 */