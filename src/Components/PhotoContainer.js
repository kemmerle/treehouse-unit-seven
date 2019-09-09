//Here I import React and the two components that PhotoContainer is responsible
//for rendering.

import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = (props) => {
  //Before my conditional, I first assign the photo props to a variable for
  //readability, and I also declare a photoArray variable.
    let photoData = props.photos;
    let photoArray;

  //In this conditional, I specify that if the length of the photoData variable
  //is greater than zero, then the photoData array should be mapped over to create
  //Photo components with specific props: a key prop, a url prop, and an alt prop.
  //Then photoArray is assigned to this series of Photo components.
  //If the photoData array is empty (or the length is equal to 0), then the
  //NotFound component is assigned to the photoArray and displayed.
    if (photoData.length > 0) {
        photoArray = photoData.map(photo =>
          <Photo
            key={photo.id}
            url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            alt=""/>
          )
    } else {
        photoArray = <NotFound />
    }

    //Here I isolate the pathname from the url, and then I use the slice method to
    //remove the '/search/' part of the path and return simply the query, which
    //I then use as my page title.
    let path = window.location.pathname
    let pageTitle = path.slice(8)

    return (
        <div className="photo-container">
          {/* Here I render the pageTitle and the photoArray variables, which
            I've created above.*/}
            <h2>{pageTitle}</h2>
            <ul>{photoArray}</ul>
        </div>
    );
}

export default PhotoContainer;
