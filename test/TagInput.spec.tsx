import * as React from 'react';
import { expect } from 'chai';
import * as sinon from 'sinon';
import * as TestUtils from 'react-addons-test-utils';
import TagInput from '../src/client/app/TagInput/TagInput';

describe('TagInput', function() {
  describe('#transformToHashtag()', function() {
    it('should join words together and capitalize the first letter', function() {
      var tagInput = new TagInput({});
      expect(tagInput.transformToHashtag('hello world')).to.equal('HelloWorld');
      expect(tagInput.transformToHashtag('Some test String')).to.equal('SomeTestString');
      expect(tagInput.transformToHashtag('whysoserious')).to.equal('Whysoserious');
    });

    it('should handle unnecessary whitespace', function() {
      var tagInput = new TagInput({});
      expect(tagInput.transformToHashtag('  how   are you')).to.equal('HowAreYou');
      expect(tagInput.transformToHashtag('this is a test    ')).to.equal('ThisIsATest');
    });

    it('handleChange', function() {
      const result: any = TestUtils.renderIntoDocument(
        <TagInput />
      );
      result.setState = sinon.spy();

      // const inputElement: any = TestUtils.findRenderedDOMComponentWithTag(result, 'input');
      // inputElement.value = 'wat';
      var event = {
        target: {
          value: 'wat'
        }
      };
      result.handleChange(event);

      expect(result.setState.calledWith({ inputValue: 'wat' })).to.equal(true);
    });
  });
});
