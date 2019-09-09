import React from 'react';

//In this simple stateless component, I render one li element that
//contains a single image. The image url is handed down as props by
//the PhotoContainer component. 

const Photo = (props) => {
  return(
    <li>
      <img src={props.url} alt=""/>
    </li>
  )
}

export default Photo;
