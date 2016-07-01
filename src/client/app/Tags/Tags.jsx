import React from 'react';
import TagInput from '../TagInput/TagInput.jsx';
import TagList from '../TagList/TagList.jsx';

export default class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [{ title: 'VotePatrickMuffForPresident' }]
    }
  }

  addTag(title) {
    this.setState({
      tags: this.state.tags.concat([{ title }])
    });
  }

  removeTag(index) {
    this.state.tags.splice(index, 1);
    this.setState({
      tags: this.state.tags
    });
  }

  render() {
    return (
      <div>
        <TagInput addTag={this.addTag.bind(this)} />
        <TagList tags={this.state.tags} removeTag={this.removeTag.bind(this)} />
      </div>
    );
  }
}
