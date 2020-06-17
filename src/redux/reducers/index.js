import {combineReducers} from 'redux';
import getPhonesReducer from './getPhonesReducer';

const allReducers = combineReducers({
    getPhones: getPhonesReducer
});

export default allReducers;