import * as React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { TagsContainer } from './Redux/containers';
import About from './About/About';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Redux/reducers';

let store = createStore(reducers);

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={TagsContainer} />
          <Route path="/about" component={About} />
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
