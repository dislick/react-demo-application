import * as cloneDeep from 'lodash/cloneDeep';
import * as orderBy from 'lodash/orderBy';
import * as values from 'lodash/values';
import * as groupBy from 'lodash/groupBy';
import { State, Action } from './state_interface';

interface TagAction extends Action {
  title: string,
  index: number,
}

const tagsReducer = (state: State = { tags: [], tagStats: [] }, action: TagAction): State => {
  let newState = cloneDeep(state);

  switch (action.type) {
    case 'ADD_TAG':
      newState.tags.push({ title: action.title });
      break;
    case 'REMOVE_TAG':
      newState.tags.splice(action.index, 1);
      break;
  }

  newState.tagStats = orderBy(values(groupBy(newState.tags, 'title'))
    .map((statArray: { title: string }[]) => {
      return { title: statArray[0].title, amount: statArray.length };
  }), ['amount'], ['desc']);

  return newState;
};

export default tagsReducer;
