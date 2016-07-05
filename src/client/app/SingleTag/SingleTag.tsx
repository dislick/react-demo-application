import * as React from 'react';
// import './SingleTag.scss';

export interface SingleTagProps {
  title: string,
  index?: number,
  removeTag?: (index: number) => void
}

export class SingleTag extends React.Component<SingleTagProps, {}> {
  constructor(props: SingleTagProps) {
    super(props);
  }

  removeTag() {
    this.props.removeTag(this.props.index);
  }

  searchForTag() {
    window.open(`https://www.google.ch/#q=${this.props.title}`);
  }

  render() {
    return (
      <div className="tag">
        <p onClick={this.searchForTag.bind(this)}><span>#</span>{this.props.title}</p>
        <span className="remove-symbol" onClick={this.removeTag.bind(this)}>×</span>
      </div>
    );
  }
}
