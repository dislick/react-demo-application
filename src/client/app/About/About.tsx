import * as React from 'react';
import './About.scss';
import { Link } from 'react-router';

export default class About extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <h1>created by Patrick Muff</h1>
        <h2>this is only here to demostrate react-router</h2>
        <h5>also try refreshing the page</h5>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}
