import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/router'

const LoadingPage = styled.div`
    width: 100%;
    height: 100vw;

    background-color: #000;
    background-position: center;
    background-size: cover;

    position: relative;
`

const TitleAppearance = keyframes`
    0% {
        opacity: 0;
    }

    15% {
        opacity: .05;
    }

    30% {
        opacity: .2;
    }
    
    45% {
        opacity: .4;
    }

    60% {
        opacity: .6;
    }

    75% {
        opacity: .75;
    }

    90% {
        opacity: .9;
    }

    100% {
        opacity: 1;
    }
`

const LoaderTitle = styled.div`
    width: 70%;
    height: 250px;
    margin: 50px auto 0;
    opacity: 0;

    background-image: url('/images/main-background.jpg');
    background-size: cover;
    background-position: center;

    animation: ${TitleAppearance} linear 6s;

    @media screen and (max-width: 600px) {
        width: 90%;

        margin-top: 20px;
    }

    @media screen and (min-width: 1601px) {
        height: 350px;

        margin-top: 80px;
    }
`

const LoaderImage = styled.div`
    width: 350px;
    height: 400px;

    background-image: url('/images/background-loader-original.gif');
    background-size: cover;
    background-position: center;

    position: absolute;
    right: 0;
    bottom: 0;

    @media screen and (max-width: 600px) {
        width: 200px;
        height: 250px;
    }

    @media screen and (min-width: 1601px) {
        width: 400px;
        height: 450px;
    }
`

export default function Loader({ name }) {
    const router = useRouter()
   
    setTimeout(() => router.push(`/quiz?name=${name}`), 6 * 1000)

    return (
        <LoadingPage>
            <LoaderTitle />
            <LoaderImage />
        </LoadingPage>
    )
}
