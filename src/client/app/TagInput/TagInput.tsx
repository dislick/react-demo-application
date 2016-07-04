import * as React from 'react';
import './TagInput.scss';

export default class TagInput extends React.Component<{addTag: (tagName: string) => void}, {inputValue: string}> {
  constructor(props: any) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleChange(event: any) {
    this.setState({ inputValue: event.target.value });
  }

  transformToHashtag(inputText: string) {
    return inputText.split(' ').map(tag => {
      if (!tag[0]) return;
      return tag[0].toUpperCase() + tag.substring(1)
    }).join('');
  }

  handleEnter(event: any) {
    if (event.key === 'Enter' && this.state.inputValue) {
      this.props.addTag(this.transformToHashtag(this.state.inputValue));
      event.target.value = '';
    }
  }

  render() {
    return (
      <input type="text" className="tag-input" onChange={this.handleChange.bind(this)} onKeyPress={this.handleEnter.bind(this)} placeholder="Type here..."></input>
    );
  }
}
