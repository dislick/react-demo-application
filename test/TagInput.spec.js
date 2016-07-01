import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import TagInput from '../src/client/app/TagInput/TagInput.jsx';

describe('TagInput', function() {
  describe('#transformToHashtag()', function() {
    it('should join words together and capitalize the first letter', function() {
      var component = shallow(<TagInput />);

      expect(component.instance().transformToHashtag('hello world')).to.equal('HelloWorld');
      expect(component.instance().transformToHashtag('Some test String')).to.equal('SomeTestString');
      expect(component.instance().transformToHashtag('whysoserious')).to.equal('Whysoserious');
    });

    it('should handle unnecessary whitespace', function() {
      var component = shallow(<TagInput />);

      expect(component.instance().transformToHashtag('  how   are you')).to.equal('HowAreYou');
      expect(component.instance().transformToHashtag('this is a test    ')).to.equal('ThisIsATest');
    });
  });
});
