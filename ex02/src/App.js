//getcookie,localstorage,sessionstorage/App.js
import React, { Component } from 'react';
class App extends Component {
  //setMyStorage
  setMyStorage = () => {
    document.cookie = 'Year=2021';
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  };
  //getMyStorage
  getMyStorage = () => {
  let myCookieData = document.cookie
  .split("; ")
  .find((row) => row.startsWith("Year="))
  .split("=")[1];
  let myLocalStorageData = localStorage.getItem('Paragon');
  let mySessionStorageData = sessionStorage.getItem('frontend');
  console.log(myCookieData, myLocalStorageData, mySessionStorageData)
  };
//return 
render() {
  return (
    <div className='App'>
      <button type='button' onClick={this.setMyStorage}>Set my storage</button>
      <button type='button' onClick={this.getMyStorage}>Get my storage</button>
    </div>
  );
}
}
export default App; //exported App;