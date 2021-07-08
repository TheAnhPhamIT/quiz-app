import React from 'react';
import styled from 'styled-components';

type AnswerProps = {
    answer: string;
    showState: boolean;
    correct: boolean;
    onAnswerClick: (answerEmit:string) => void
}

const AnswerCardContainer = styled.div`
        width: 296px;
        padding: 10px;
        text-align: center;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0; 0; 0; 0.4);
        box-sizing: border-box;
        margin: 10px 2px;
        color: #fff;
        cursor: pointer;
        border: 0;
        background: ${(props:{showState?:boolean, correct?:boolean}) => 
            props.showState ? props.correct ? '#3498db' : '#e74c3c' :  '#1abc9c'}; 
    `;

function AnswerCard(props: AnswerProps) {
    const handleClick = () => {
        props.onAnswerClick(props.answer);
    }

    const createMarkup = (htmlString: string) => {
        return {
            __html: htmlString
        }
    }

    return (
        <AnswerCardContainer showState={props.showState} correct={props.correct} onClick={handleClick}>
            <div dangerouslySetInnerHTML={createMarkup(props.answer)}></div>
        </AnswerCardContainer>
    )
}

export default AnswerCard;