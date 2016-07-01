import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import TagInput from '../src/client/app/TagInput/TagInput.jsx';

describe('TagInput', function() {
  describe('#transformToHashtag()', function() {
    it('should join words together and capitalize the first letter', function() {
      var component = shallow(<TagInput />);
      var output = component.instance().transformToHashtag('hello world');
      expect(output).to.equal('HelloWorld');
    });
  });
});
