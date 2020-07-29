import { combineReducers } from 'redux';

import labReducer, { LabReducer } from './lab/lab.reducer';

export default combineReducers ({
    lab: labReducer  
})