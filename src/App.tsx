import React from 'react';
import QuizService from './services/quiz.services';
import QuestionCard from './components/QuestionCard';
import AnswerCard from './components/AnswerCard';
import GameInfo from './components/GameInfo';
import Loading from './components/Loading';
import GameResult from './components/GameResult';
import {QuizDifficulty, QuizShuffleAnswers} from './models/quiz.model'
import { useState } from 'react';
import styled from 'styled-components';
import { CSSProperties } from 'react';

const NextBtn = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: #222;
  color: #fff;
  border: 0;
  cursor: pointer;
  transition: transform 0.4s ease;

  &:active {
    transform: scale(0.98);
  }
`;

const ResetBtn = styled.button`
  padding: 10px;
  border-radius: 5px;
  background: #222;
  color: #fff;
  border: 0;
  cursor: pointer;
  transition: transform 0.4s ease;

  &:active {
    transform: scale(0.98);
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  background: url('https://images.unsplash.com/photo-1554147090-e1221a04a025?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80');
  background-position: center;
  background-size: cover;

  & > h1 {
    font-size: 50px;
    font-weight: 900;
    position: absolute;
    top: 50px;
  }
`;

function App() {
  const [quizzes, setQuizzes] = useState<QuizShuffleAnswers[]>([]);
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [finishedGame, setFinishedGame] = useState<boolean>(false);
  const [showStateAnswer, setShowStateAnswer] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playingGame, setPlayingGame] = useState<boolean>(false);

  const startGame = async () => {
    setIsLoading(true);
    const quizzes: QuizShuffleAnswers[] = await QuizService.getQuizzes(10, QuizDifficulty.EASY);
    console.log(quizzes);
    setFinishedGame(false);
    setQuizzes(quizzes);
    setIsLoading(false);
    setPlayingGame(true);
    setQuizIdx(0);
    setScore(0);
  }

  const nextQuiz = () => {
    if(finishedGame) return;
    if(quizIdx === quizzes.length - 1) {
      return endGame();
    }
    const nextQuizIdx = quizIdx + 1;
    setShowStateAnswer(false);
    setQuizIdx(nextQuizIdx);
  } 

  const answerClick = (answer:string) => {
    const currQuiz = quizzes[quizIdx];
    if(answer === currQuiz.correct_answer) {
      setScore(score + 1);
    }

    if(quizIdx === quizzes.length - 1) {
      return endGame();
    }
    setShowStateAnswer(true)
    setTimeout(nextQuiz, 1000)
  }

  const endGame = () => {
    setFinishedGame(true);
    setPlayingGame(false);
  }

  const quizContainerStyle:CSSProperties = {
    width: '600px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  }

  const answersContainerStyle:CSSProperties = {
    width: '600px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }

  return (
    <AppContainer>
      <h1>Quiz app</h1>
      {
        finishedGame && !isLoading ? <GameResult score={score} totalQuizzes={quizzes.length}/> : null
      }
      {
        (!isLoading && !playingGame) ? (
          <ResetBtn onClick={startGame}>
            {finishedGame ? 'Play again' : 'Start Game'}       
          </ResetBtn>
        ) : null
      }
      { isLoading ? <Loading /> : null }
      {
        (!finishedGame && quizzes.length > 0) ? (
          <div className="quiz-container" style={quizContainerStyle}>
            <GameInfo score={score} currQuiz={quizIdx+1} totalQuiz={quizzes.length}/>
            <QuestionCard question={quizzes[quizIdx].question} />
            <div className="answer-container" style={answersContainerStyle}>
              {
                quizzes[quizIdx].answers.map((answer, idx) => 
                  <AnswerCard key={idx} 
                              answer={answer}
                              showState={showStateAnswer}
                              correct={answer === quizzes[quizIdx].correct_answer}
                              onAnswerClick={answerClick} />
                )
              }
            </div>
            {/* <button className="btn next-quiz-btn"
                    onClick={nextQuiz}
                    style={nextBtnStyle}>
              Next Quiz
            </button> */}
            <NextBtn onClick={nextQuiz}>
              Next Quiz
            </NextBtn>
          </div>
        ) : null
      }
      
    </AppContainer>
  );
}

export default App;
