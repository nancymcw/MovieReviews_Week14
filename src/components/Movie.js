import React from "react";
import "./Movie.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import ReviewModal from "./ReviewModal";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    //I wanted a modal to pop up when you click the Add Review button after seeing it on other people's projects.
    //In this component the state ismodified according to whether or not the modal is open or not. So by default it is set to false, and when we want it to pop up it will be true.
    this.state = {
      modal: false,
    };
    console.log("This is props", props);
  }
 //And then functions to use for these cases later.
  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });
  render() {
    return (
      <div className="col">
        {/* Here I used the && so that if the modal state is true, the ReviewModal will pop up*/}
        {/* Also passed props into the ReviewModal component - including one for closing it to attach to the close button, an addReview function for submitting the review, and then reviews to refer to the previous reviews and the index. */}
        {this.state.modal && (
          <ReviewModal
            handleClose={this.closeModal}
            reviews={this.props.movie.reviews}
            addReview={this.props.addReview}
            index={this.props.index}
          />
        )}
        <div class="card">
          <img
            src={this.props.movie.image}
            className="card-img-top"
            id="movie-poster"
            alt={this.props.movie.title}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.movie.title}</h5>
            <p class="card-text">{this.props.movie.synopsis}</p>
            <br />
            {/* Here's the button that sets off the openModal function (sets modal state to true) */}
            <button 
            className="btn btn-primary" 
            onClick={this.openModal}>Add Review</button>
            </div></div>
      </div>
    );
  }
}