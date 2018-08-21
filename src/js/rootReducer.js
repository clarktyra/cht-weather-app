import { combineReducers } from 'redux';
import  navbarReducer  from './components/navbar/navbarReducer';

const rootReducer = combineReducers({
// add reducers
navbar: navbarReducer
});

export default rootReducer;
