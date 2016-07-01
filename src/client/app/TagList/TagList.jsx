import React from 'react';
import SingleTag from '../SingleTag/SingleTag.jsx';
import './TagList.scss';

export default class TagList extends React.Component {
  constructor(props) {
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
