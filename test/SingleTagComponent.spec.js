import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import SingleTag from '../src/client/app/SingleTag/SingleTag.jsx';

describe('SingleTag', function() {
  it('outputs the title into a <p> tag', function() {
    var component = shallow(<SingleTag title="Hello" />);
    expect(component.find('.tag p').text()).to.equal('#Hello');
  });

  it('should call the removeTag() function on click', function() {
    var onClick = sinon.spy();
    var component = shallow(<SingleTag title="Hello" removeTag={onClick} />);
    component.find('span.remove-symbol').simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
