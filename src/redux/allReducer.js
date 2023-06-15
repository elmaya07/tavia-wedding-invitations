import authReducer from './authReducer';
import themeReducer from './themeReducer';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    authReducer,
    themeReducer
});

export default allReducer;