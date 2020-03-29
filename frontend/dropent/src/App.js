import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Shop from './components/Page_Shop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation/>
        </div>
        <div style={{backgroundColor: '#E2EBEB'}}>
          <Switch>
            <Route exact path="/" component={Shop} />
            <Route exact path="/home" component={Shop} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
