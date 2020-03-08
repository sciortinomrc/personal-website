import React, { Component } from 'react';
import './App.css';
import Header from './Header/Nav';
import Main from './Main/Main';
import Bottom from './Bottom/Bottom';
import './Main/Animations.css';

class App extends Component{

  render(){

    return (
      <div>
        <Header/> 
        <Main />
        <Bottom />
      </div>
    );
  }
  
}
export default App;
