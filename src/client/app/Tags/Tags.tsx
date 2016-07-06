import * as React from 'react';
import TagInput from '../TagInput/TagInput';
import TagList from '../TagList/TagList';
import { SingleTagProps } from '../SingleTag/SingleTag';
import { TagStatsContainer } from '../Redux/containers';
import './Tags.scss';
import { Link } from 'react-router';
import { State } from '../Redux/state_interface';

interface TagsProps {
  addTag: (title: string) => void
  removeTag: (index: number) => void
  tags: SingleTagProps[]
}

export default class Tags extends React.Component<TagsProps, {}> {
  constructor(props: TagsProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <TagInput addTag={this.props.addTag} />
        <TagList tags={this.props.tags} removeTag={this.props.removeTag} />
        <TagStatsContainer />
        <Link to="/about" className="about-link">About</Link>
      </div>
    );
  }
}
