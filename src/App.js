import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import DATA from "./data/mock.json";
// I wanted to use data from a json file as I'd seen in an example video, so I set the useState to refer to my data page (mock.json) and imported it above.
export default function App() {
  const [movies, setMovies] = useState(DATA);
// I also learned about deepCopies and React's immutable state, so each time this addReview function is used it is stringifying the current data, pushing the new review info, and then making a copy of all of that and setting it as the new movie state.
  const addReview = (review, index) => {
    const deepCopy = JSON.parse(JSON.stringify(movies));
    deepCopy[index].reviews.push(review);
    setMovies(deepCopy);
  };

  return (
    <>
    <Header />
    {/* This will display all the movies by mapping them. Passed down the addReview function and then props like key, movie, and index for using this data in the child components. Also used bootstrap div classes for my cards.*/}
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            addReview={addReview}
            movie={movie}
            index={index}
          />
        ))}
      </div>
    </>
  );
}