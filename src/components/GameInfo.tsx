import React from "react";
import styled from "styled-components";
import CountDown from '../components/CountDown';

type GameInfoProps = {
    score: number;
    currQuiz: number;
    totalQuiz: number;
}

const GameInfoContainer = styled.div`
        display: flex;
        margin: 10px;
        justify-content: flex-end;

        div {
            margin: 0 5px;
        }
    `;

function GameInfo({score, currQuiz, totalQuiz}:GameInfoProps) {
    const handleCountDownFinished = () => {
        // do something
    }
    return (
        <GameInfoContainer>
            <div className="time-left">Time left: <CountDown from={50} to={0} onTimeout={handleCountDownFinished}/></div>
            <div className="score">Score: {score}</div>
            <div className="quizzes">Quizzes: {currQuiz}/{totalQuiz}</div>
        </GameInfoContainer>
    )
}

export default GameInfo;

