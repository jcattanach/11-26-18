import React, { Component } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import Article from './components/Article'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Article />
        <Article />
      </div>
    );
  }
}

export default App;
