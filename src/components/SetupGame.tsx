import React from "react";
import styled from "styled-components";
import { GameTime } from "../models/game.model";
import { QuizDifficulty, QuizPackage } from "../models/quiz.model";

interface ILevel {
    code: QuizDifficulty;
    text: string;
}

interface IQuizPackage {
    code: QuizPackage;
    text: string
}

interface IGameTime {
    code: GameTime;
    text: string;
}

type SetupGameProps = {
    levels: ILevel[];
    quizPackages: IQuizPackage[];
    gameTimes: IGameTime[];
    onConfirmClick: () => void;
    onChangeLevel: (level: QuizDifficulty) => void;
    onChangePackage: (quizPackage: QuizPackage) => void;
    onChangeGameTime: (gameTime: GameTime) => void;
}

const SetupGameContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #60a3bc;
    width: 400px;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-weight: 600;

    & > h3 {
        margin-top: 0;
    }

    & > .input-wrap {
        margin: 5px;
        display: grid;
        grid-template-columns: 35% 65%;
        align-items: center;

        & > select {
            padding: 3px 5px;
            font-size: inherit;
            font-family: inherit;
            border-radius: 5px;
            background: #60a3bc;
            color: #fff;
            border: 2px solid #3c6382;
            transition: 0.3s ease

            &:focus {
                outline: none;
                background: #3c6382;
            }
        }
    }

    & > .confirm-btn {
        background: #3c6382;
        margin-top: 10px;
        border-radius: 3px;
        padding: 5px;
        color: #fff;
        text-transform: uppercase;
        border: 1px solid #3c6382;
        cursor: pointer;
        transition: transform 0.4s ease;

        &:focus {
            transform: scale(0.98)
        }
    }
`

function SetupGame(props: SetupGameProps) {

    const onChangeLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const level = e.currentTarget.value as QuizDifficulty;
        props.onChangeLevel(level)
    }

    const onChangePackage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const packageSelected = +e.currentTarget.value as QuizPackage;
        props.onChangePackage(packageSelected)
    }

    const onChangeGameTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const timeSelected = +e.currentTarget.value as GameTime;
        props.onChangeGameTime(timeSelected)
    }

    return (
        <SetupGameContainer>
            <h3>Setting Game Before You Play</h3>
            <div className="select-level input-wrap">
                <label htmlFor="level">Select level: </label>
                <select className="level" onChange={onChangeLevel}>
                    {
                        props.levels.map(level => 
                            <option key={level.code} value={level.code}>
                                {level.text}
                            </option>
                        )
                    }
                </select>
            </div>
            <div className="select-package input-wrap">
                <label htmlFor="package">Select package: </label>
                <select className="package" onChange={onChangePackage}>
                    {
                        props.quizPackages.map(packageItem => 
                            <option key={packageItem.code} value={packageItem.code}>
                                {packageItem.text}
                            </option>
                        )
                    }
                </select>
            </div>
            <div className="select-package input-wrap">
                <label htmlFor="time">Select time: </label>
                <select className="time" onChange={onChangeGameTime}>
                    {
                        props.gameTimes.map(time => 
                            <option key={time.code} value={time.code}>
                                {time.text}
                            </option>
                        )
                    }
                </select>
            </div>
            <button className="confirm-btn" onClick={props.onConfirmClick}>I'm ready</button>
        </SetupGameContainer>
    )
}

export default SetupGame;