//setmystorage/App.js
import React, { Component } from 'react';
class App extends Component {
  //setMyStorage
  setMyStorage = () => {
    document.cookie = 'Year=2021';
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  };
  // return 
  render() {
    return (
      <div className='App'>
        <button type='button' onClick={this.setMyStorage}>Set my storage</button>
      </div>
    );
  }
}
export default App; // exported App;