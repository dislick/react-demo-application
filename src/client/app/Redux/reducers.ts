import { combineReducers } from 'redux';
import tagsReducer from './tags';

const tagReducers = combineReducers({
  tagsReducer,
});

export default tagReducers;
