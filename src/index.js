//index.js is the entry file into my app. First, I import React and ReactDOM;
//the render() method imported with ReactDOM will create my React components for me.
//It is perhaps the most critical function in the app.

//Then I import my css file, so that I can style all of my components, and I import
//my App component, the central container for my application.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Here I call the render() method, so that the ReactDOM package can create my
//React components. I have also specified that these components should be attached
//to the html element with the id 'root'.  
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
