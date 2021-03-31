//setLocalStorage-setitem/App.js
import React, { Component } from 'react';
//localstorage.setItem;
class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month')
  };
  //return
  render() {
    return (
      <div className='App'>
        <button type='button' onClick={this.setLocalStorage}>Set local storage</button>
      </div>
    );
  }
}
export default App; //exported App;