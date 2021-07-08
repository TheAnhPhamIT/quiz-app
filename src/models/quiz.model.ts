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

export enum QuizPackage {
    PACKAGE_10 = 10,
    PACKAGE_20 = 20
}

export const getAllQuizDifficulty = ():{code: QuizDifficulty, text:string}[] => {
    return [
        {
            code: QuizDifficulty.EASY,
            text: 'Easy'
        },
        {
            code: QuizDifficulty.MEDIUM,
            text: 'Medium'
        },
        {
            code: QuizDifficulty.HARD,
            text: 'Hard'
        }
    ]
}

export const getAllQuizPackages = ():{code: QuizPackage, text:string}[] => {
    return [
        {
            code: QuizPackage.PACKAGE_10,
            text: '10 quizzes'
        },
        {
            code: QuizPackage.PACKAGE_20,
            text: '20 quizzes'
        }
    ]
}
