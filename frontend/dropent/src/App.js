import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Shop from './components/Page_Shop';
import Alerts from './components/Page_Alerts';
import Donate from './components/Page_Donate';

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
            <Route exact path="/" component={Shop}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/saved" component={Alerts}/>
            <Route exact path="/donate" component={Donate}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
