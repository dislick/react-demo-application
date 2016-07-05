import * as React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import Tags from './Tags/Tags';
import About from './About/About';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Tags} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
