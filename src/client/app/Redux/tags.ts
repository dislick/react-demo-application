import * as _ from 'lodash';
import { State, Action } from './state_interface';

interface TagAction extends Action {
  title: string,
  index: number,
}

const tagsReducer = (state: State = { tags: [] }, action: TagAction): State => {
  let newState = _.clone(state);

  switch (action.type) {
    case 'ADD_TAG':
      newState.tags.push({ title: action.title });
      break;
    case 'REMOVE_TAG':
      newState.tags.splice(action.index, 1);
      break;
  }

  return newState;
};

export default tagsReducer;
