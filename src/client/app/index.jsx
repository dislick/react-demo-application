import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { render } from 'react-dom';
import Tags from './Tags/Tags.jsx';
import About from './About/About.jsx';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Tags}></Route>
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
