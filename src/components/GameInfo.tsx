import React from "react";
import styled from "styled-components";

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

function GameInfo(props:GameInfoProps) {
    return (
        <GameInfoContainer>
            <div className="score">Score: {props.score}</div>
            <div className="quizzes">Quizzes: {props.currQuiz}/{props.totalQuiz}</div>
        </GameInfoContainer>
    )
}

export default GameInfo;

