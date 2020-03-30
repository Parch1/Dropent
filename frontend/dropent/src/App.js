import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Routing
import { Link, Redirect,} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as routes from './constants/routes';

// Pages
import Navigation from './components/Navigation';
import Shop from './components/Page_Shop';
import Alerts from './components/Page_Alerts';
import Donate from './components/Page_Donate';

// Authentication
import { firebase, auth } from './firebase';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { UnauthenticatedHomeContent, AuthenticatedHomeContent } from './Page_Home';


const AuthContext = React.createContext({ authUser: null });

class Home extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {({ authUser }) =>
          <div>
            <h1>Welcome</h1>
            {!authUser && <UnauthenticatedHomeContent />}
            {authUser && <AuthenticatedHomeContent authUser={authUser} />}
            <div className="Leaf">
              <img src={ require('./images/drop.gif') } style={{marginTop:'40px'}}></img>
            </div>
          </div>}
      </AuthContext.Consumer>
    );
  }
}

class AuthProvider extends React.Component {
  state = {
    authUser: null,
  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <AuthContext.Provider value={{ authUser: this.state.authUser }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div className="App">
            <Navigation />
  			    <div style={{backgroundColor: '#E2EBEB'}}>
              <Switch>
                <Route exact path={routes.HOME_PATH} component={Home} />
                <Route exact path={routes.SIGN_UP_PATH} component={SignUp} />
                <Route exact path={routes.SIGN_IN_PATH} component={SignIn} />
                <Route exact path={routes.SIGN_OUT_PATH} component={SignOut} />
                <Route exact path="/" component={Shop}/>
                <Route exact path="/shop" component={Shop}/>
                <Route exact path="/saved" component={Alerts}/>
                <Route exact path="/donate" component={Donate}/>
              </Switch>
            </div>
		      </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
