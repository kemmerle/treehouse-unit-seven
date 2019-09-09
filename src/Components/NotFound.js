import React from 'react';

//In this simple stateless component, I've simply rendered a div with an error
//message. I've imported this component into my PhotoContainer component; if
//no photos are returned in search, then this component renders instead with
//a friendly warning message.

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Your search did not return any results.</p>
    </div>
  )
}

export default NotFound;
