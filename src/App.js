//The App component is my main container for my application. I begin by importing
//React and the React Router library (BrowserRouter) along with its components
//Redirect, Route, and Switch. I will explain their uses below.
import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

//Here I import axios, a Promise-based HTTP client for the browser and node.js
//that will allow me to make an API call to the Flicker API. axios has some
//built-in methods that allow me to manipulate data much more easily than if I
//were to use the fetch() method, for example. I also import my API key, which
//I've put in the config.js file, which I've specified that git should ignore.
import axios from 'axios';
import apiKey from './config';

//Here I import the different components of my application.
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //Here, I set the photos property to an empty array; this is where I will store the images
      //from the API call to Flickr.
      photos: [],
      //Here I set the loading property to a boolean; unless the photos are downloaded
      //from Flickr, the component will be 'loading'.
      loading: true
    }
  }

  componentDidMount() {
    //Here I set the url's path to the variable path.
    let path = window.location.pathname

   //In this conditional, I meant to deal with a bug I noticed when I nagivated
   //to the root route. Because I take the search query directly from the url path,
   //the app is unable to take a query from the root route, even if it redirects to
   //a path like '/search/swans'. So here, I simply tell the app to perform a search
   //with the query 'swans' on component mount when a user navigates to
   //the root path.
    if (path === '/') {
      this.performSearch('swans')
    } else {
      this.performSearch(path.slice(8))
    }
  }

  performSearch = (searchQuery) => {
    //Here I use the axios HTTP client to make a call to the Flickr API (note that
    //I've used string interpolation to insert my search query and API key). Once
    //I've received a response, then the photos property in state is set to the
    //photos returned from Flickr and the loading property is set to 'false'.
    //If the API call fails, then an error is logged to the console.
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
    //Here I create my Router environment and load my components to the page.
    //First I load my SearchForm and Nav components and give them both the
    //performSearch() method as prop.

    //Then I create a conditional statement: if the loading property returns as
    //true, the page will render the 'Loading...' message; if the loading property
    //is false, then the page renders the routes and their specified components.

    //In my root path, I've redirected to the path
    //'/search/swans' (my first Nav link). For all other search paths (/search/:query)
    //I have rendered the PhotoContainer with all available props. Note that the
    //colon in front of query allows me to create dynamic routes.
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
                   <Route exact path="/" render={ () => <Redirect to={`/search/swans`}/>} />} />
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
