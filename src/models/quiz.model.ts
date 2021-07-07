export interface Quiz {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface QuizShuffleAnswers extends Quiz {
    answers: string[]
}

export enum QuizDifficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}