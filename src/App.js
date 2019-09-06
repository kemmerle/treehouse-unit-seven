import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

import apiKey from './config';

import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }

  componentDidMount() {
    this.performSearch()
  }

  performSearch = (searchQuery = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
         <div>
           <div className="container">
             <SearchForm performSearch={this.performSearch}/>
             <Nav performSearch={this.performSearch} />
             {
               (this.state.loading)
                 ? <h3>Loading...</h3>
                 :
                 <Switch>
                   <Route exact path="/" render={ () => <Redirect to={`/search/cats`}/>} />} />
                   <Route exact path="/search/:query" render={(props) => <PhotoContainer {...props} photos={this.state.photos} />} />
                 </Switch>
             }
           </div>
         </div>
       </BrowserRouter>
    )
  }
};

export default App;
