import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Properties from './components/Properties';
import AddProperty from './components/AddProperty';
import LogIn from './components/LogIn';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Properties" component={Properties} />
          <Route exact path="/AddProperty" component={AddProperty} />
          <Route exact path="/LogIn" component={LogIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
