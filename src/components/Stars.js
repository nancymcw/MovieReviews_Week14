import ReactStars from "react-stars";
import React from "react";
//used ReactStars after seeing them online so I installed react-stars and imported them to this component. 

export default function Stars({ ratingChanged, value }) {
  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={"#ffd700"}
      value={value}
    />
    //the website I got them from had these built-in props to add to them, I also had to add value={value} so that they'd work with the values of the movie ratings.
  );
}
