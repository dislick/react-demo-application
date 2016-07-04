import * as React from 'react';
import TagInput from '../TagInput/TagInput';
import TagList from '../TagList/TagList';
import { SingleTagProps } from '../SingleTag/SingleTag';
import './Tags.scss';
import { Link } from 'react-router';

interface TagsState {
  tags: SingleTagProps[]
}

export default class Tags extends React.Component<{}, TagsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tags: [{ title: 'PatrickForPresident' }]
    }
  }

  addTag(title: string) {
    this.setState({
      tags: this.state.tags.concat([{ title }])
    });
  }

  removeTag(index: number) {
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
        <Link to="/about" className="about-link">About</Link>
      </div>
    );
  }
}
