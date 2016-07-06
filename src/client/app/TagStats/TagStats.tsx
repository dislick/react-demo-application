import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../Redux/state_interface';

interface TagStatsProps {
  tagStats?: {title: string, amount: number}[]
}

export default class TagStats extends React.Component<TagStatsProps, {}> {
  constructor(props: TagStatsProps) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.tagStats.map((tag, index) => {
          return <p key={index}>{tag.title}: {tag.amount}</p>
        })}
      </div>
    );
  }
}
