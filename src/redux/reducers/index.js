import { combineReducers } from 'redux';
import Category from './activeCategory';

const rootReducer = combineReducers({
    category: Category
});

export default rootReducer; 