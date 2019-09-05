import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import apiKey from './config';

import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';

const App = () => (
  <BrowserRouter>
    <div>
      < SearchForm />
      < Nav />
      <Route path="/" component={PhotoContainer}/>
    </div>
  </BrowserRouter>
);

export default App;
