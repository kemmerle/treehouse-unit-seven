import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import apiKey from './config';

import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          < SearchForm apiKey={apiKey}  />
          < Nav />

          <Switch>
            <Route exact path="/" render={() => <Redirect to ="/cats" /> } />
            <Route path="/cats"  render={() => <PhotoContainer tag={'cats'} apiKey={apiKey} key={1} /> } />
            <Route path="/dogs" render={() => <PhotoContainer tag={'dogs'} apiKey={apiKey} key={2} /> } />
            <Route path="/computers" render={() => <PhotoContainer tag={'computers'} apiKey={apiKey} key={3} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
