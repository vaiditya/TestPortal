import { combineReducers } from 'redux';
import QuestionPaper from './Home'

const allReducers = combineReducers (
    {
        questionPaper:QuestionPaper
    }
)

export default allReducers;