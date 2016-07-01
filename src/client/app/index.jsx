import React from 'react';
import { render } from 'react-dom';
import Tags from './Tags/Tags.jsx';

class App extends React.Component {
  render() {
    return (
      <Tags />
    );
  }
}

render(<App />, document.getElementById('app'));
