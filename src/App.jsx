import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/Navbar';
import Properties from './components/Properties';
import AddProperty from './components/AddProperty';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Properties} />
        </Switch>
        <Switch>
          <Route exact path="/" component={AddProperty} />
        </Switch>
      </div>
    );
  }
}

export default App;
