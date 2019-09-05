import React, { Component } from 'react';

import Photo from './Photo';

class PhotoContainer extends Component {

  render() {
    return (
      <div className="photo-container">
        <ul>
          <li> < Photo /> </li>
          <li> < Photo /> </li>
          <li> < Photo /> </li>
          <li> < Photo /> </li>
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;
