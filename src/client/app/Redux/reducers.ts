import { combineReducers } from 'redux';
import tagsReducer from './tags';
import tagStatsReducer from './tagStats';

const tagReducers = combineReducers({
  tagsReducer,
});

export default tagReducers;
