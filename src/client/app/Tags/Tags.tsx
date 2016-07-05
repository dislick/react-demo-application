import * as React from 'react';
import TagInput from '../TagInput/TagInput';
import TagList from '../TagList/TagList';
import { SingleTagProps } from '../SingleTag/SingleTag';
import './Tags.scss';
import { Link } from 'react-router';

interface TagsState {
  tags: SingleTagProps[]
}

interface TagsProps {
  addTag: (title: string) => void
  removeTag: (index: number) => void
  reduxState: any
}

export default class Tags extends React.Component<TagsProps, TagsState> {
  constructor(props: TagsProps) {
    super(props);
  }

  addTag(title: string) {
    this.props.addTag(title);
  }

  removeTag(index: number) {
    this.props.removeTag(index);
  }

  render() {
    return (
      <div>
        <TagInput addTag={this.addTag.bind(this)} />
        <TagList tags={this.props.reduxState.tags} removeTag={this.removeTag.bind(this)} />
        <Link to="/about" className="about-link">About</Link>
      </div>
    );
  }
}
