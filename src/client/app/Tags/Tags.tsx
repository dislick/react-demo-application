import * as React from 'react';
import TagInput from '../TagInput/TagInput';
import TagList from '../TagList/TagList';
import { SingleTagProps } from '../SingleTag/SingleTag';
import './Tags.scss';
import { Link } from 'react-router';

interface TagsProps {
  addTag: (title: string) => void
  removeTag: (index: number) => void
  reduxState: any
}

export default class Tags extends React.Component<TagsProps, {}> {
  constructor(props: TagsProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <TagInput addTag={this.props.addTag} />
        <TagList tags={this.props.reduxState.tags} removeTag={this.props.removeTag} />
        <Link to="/about" className="about-link">About</Link>
      </div>
    );
  }
}
