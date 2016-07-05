import * as React from 'react';
import { SingleTag, SingleTagProps } from '../SingleTag/SingleTag';
import './TagList.scss';

export interface TagListProps {
  tags: SingleTagProps[],
  removeTag: (index: number) => void
}

export default class TagList extends React.Component<TagListProps, {}> {
  constructor(props: TagListProps) {
    super(props);
  }

  render() {
    return (
      <div className="tag-container">
        {this.props.tags.map((tag, index) => {
          return <SingleTag key={index} index={index} title={tag.title} removeTag={this.props.removeTag.bind(this)} />
        })}
      </div>
    );
  }
}
