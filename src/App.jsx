import React from 'react';
import './app.css';
import Navbar from './components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
