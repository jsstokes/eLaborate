import { combineReducers } from 'redux';

import labReducer from './lab/lab.reducer';

export default combineReducers ({
    lab: labReducer  
})