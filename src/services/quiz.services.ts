import { Quiz, QuizDifficulty, QuizPackage, QuizShuffleAnswers } from '../models/quiz.model'
import { shuffleArray } from '../utils';

class QuizService {
    baseUrl: string;
    constructor() {
        this.baseUrl = 'https://opentdb.com/api.php';
    }

    async getQuizzes(amount:QuizPackage, difficulty: QuizDifficulty):Promise<QuizShuffleAnswers[]> {
        const endpoint = `${this.baseUrl}?amount=${amount}&difficulty=${difficulty}&type=multiple`;
        const resData = await (await fetch(endpoint)).json();
        const results: Quiz[] = resData.results as Quiz[]

        return results.map((quiz: Quiz): QuizShuffleAnswers => {
            return {
                ...quiz,
                answers: shuffleArray([quiz.correct_answer, ...quiz.incorrect_answers])
            };
        })
    }
}

export default new QuizService();