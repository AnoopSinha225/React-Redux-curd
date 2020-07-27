import React, { Component } from 'react';
import Header from './component/header/header';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './component/Users/Users';
import Home from './component/Home';

class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/about" render={() => <h5>This is about us page </h5>} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
