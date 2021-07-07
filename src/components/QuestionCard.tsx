import React from 'react'
import { CSSProperties } from 'react';

const questionStyle:CSSProperties = {
    width: '100%',
    padding: '20px',
    background: '#1abc9c',
    color: '#fff',
    fontSize: '18px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
    boxSizing: 'border-box',
    marginBottom: '5px'
}

function QuestionCard(props:{question:string}) {
    const createMarkup = (htmlString: string) => {
        return {
            __html: htmlString
        }
    }

    return (
        <div className="question-title" style={questionStyle}>
            <div dangerouslySetInnerHTML={createMarkup(props.question)} /> 
        </div>
    )
}

export default QuestionCard