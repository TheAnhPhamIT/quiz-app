import styled from "styled-components";

type GameResultProps = {
    totalQuizzes: number;
    score: number;
}

const GameResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 200px;
    border: 1px solid gray;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    text-transform: uppercase;
    margin: 20px;
    font-size: 15px;
    background: #34495e;
    color: #fff;

    & > div {
        margin: 5px;
    }
`
function GameResult(props:GameResultProps) {
    return (
        <GameResultContainer>
            <div className="score">Your Score: {props.score}</div>
            <div className="total-quizzes">Total quizzes: {props.totalQuizzes}</div>
        </GameResultContainer>
    )
}

export default GameResult;