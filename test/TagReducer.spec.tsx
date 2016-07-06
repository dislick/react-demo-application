import { expect } from 'chai';
import tagReducer from '../src/client/app/Redux/tags';

describe('TagReducer', function() {
  it('should calculate ADD_TAG actions', function() {
    var state = tagReducer(undefined, { type: 'ADD_TAG', title: 'HelloWorld' });
    state = tagReducer(state, { type: 'ADD_TAG', title: 'HelloWorld2' });

    expect(state.tags[0].title).to.equal('HelloWorld');
    expect(state.tags[1].title).to.equal('HelloWorld2');
  });

  it('should calculate REMOVE_TAG actions', function() {
    var state = tagReducer(undefined, { type: 'REMOVE_TAG', index: 2 });
    var secondState = tagReducer(state, { type: 'ADD_TAG', title: 'Test' });
    secondState = tagReducer(secondState, { type: 'ADD_TAG', title: 'Test2' });
    secondState = tagReducer(secondState, { type: 'REMOVE_TAG', index: 1 });

    expect(state.tags.length).to.equal(0);
    expect(secondState.tags.length).to.equal(1);
    expect(secondState.tags[0].title).to.equal('Test');
  });

  it('should calculate tag statistics', function() {
    var state = tagReducer(undefined, { type: 'ADD_TAG', title: 'HelloWorld' });
    state = tagReducer(state, { type: 'ADD_TAG', title: 'HelloWorld' });
    state = tagReducer(state, { type: 'ADD_TAG', title: 'HelloWorld' });
    state = tagReducer(state, { type: 'ADD_TAG', title: 'HelloWorld2' });

    expect(state.tagStats[0]).to.deep.equal({ title: 'HelloWorld', amount: 3 });
    expect(state.tagStats[1]).to.deep.equal({ title: 'HelloWorld2', amount: 1 });
  });
});
