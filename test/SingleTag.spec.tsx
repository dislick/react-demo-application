import * as React from 'react';
import { expect } from 'chai';
import * as sinon from 'sinon';
import * as TestUtils from 'react-addons-test-utils';
import { SingleTag } from '../src/client/app/SingleTag/SingleTag';

describe('SingleTag', function() {
  it('outputs the title into a <p> tag', function() {
    const result: any = TestUtils.renderIntoDocument(
      <SingleTag title="Hello"/>
    );

    const p = TestUtils.findRenderedDOMComponentWithTag(result, 'p');
    expect(p.textContent).to.equal('#Hello');
  });

  it('should call the removeTag() function on click', function() {
    var onClick = sinon.spy();
    const result: any = TestUtils.renderIntoDocument(
      <SingleTag title="Hello" removeTag={onClick}/>
    );
    const remove = TestUtils.findRenderedDOMComponentWithClass(result, 'remove-symbol');

    TestUtils.Simulate.click(remove);
    expect(onClick.calledOnce).to.equal(true);
  });
});
