import React from "react";
import { Modal, Button } from "react-bootstrap";
import Stars from "./Stars";
import "./Movie.css";

//Right away need to set the state to empty values so they can be altered later. 
export default class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 0,
      review: "",
      name: "",
    };
  }
//This is for filling out the form, my friend helped me understand altering event targets in this way. Setting state to key value pairs that change with the event (the form changing) - I set names for the Name form and Review text box and it changes the value.
  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
//Function to handle the save review/submit button including using addReview passed down through props all the way from App, the grandparent component, if you will, haha. The first part is the review object (parameter for addReview) and second part is the index which is the second parameter for the addReview function.
  handleSubmit = () => {
    this.props.addReview(
      {
        stars: this.state.stars,
        review: this.state.review,
        name: this.state.name
      },
      this.props.index
    );
    //LOGGING FOR TESTING BELOW
    const newReview = {
    stars: this.state.stars,
    review: this.state.review,
    name: this.state.name,
  };
    console.log("new review", newReview)
    console.log("Previous reviews", this.props.reviews)

  };
//Function to change state for the star rating changing.
setStarRating = (newRating) => {
  this.setState({ stars: newRating})
}

  render() {
    return (
      <>
      {/* Got a lot of the modal skeleton code from the bootstrap documents, and used the handleClose function from inherited props for the onHide setting */}
        <Modal show={true} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input 
            type="text" 
            name="name"
            className="form-control" 
            placeholder="Your Name"
            // Here we refer to this box as what will be the value for the name part of the review object
            value={this.state.review.name}
            // And then use event changes/the form change handler I explained earlier.
            // The same thing goes for the textarea for the review text.
            onChange={this.handleFormChange} />
            <textarea
              className="form-control"
              placeholder="Write your review..."
              name="review"
              value={this.state.review.review}
              onChange={this.handleFormChange}
            />
            <br />
            <div id='stars-div'>
              Rate the movie:
              <br />
              <Stars ratingChanged={(newRating) => this.setStarRating(newRating)}
              value={this.state.stars} />
            </div>
            <div>
{/*Here is the table displaying the review data, I used what we did in the week 14 lab to map out the review name, text, and stars through a table*/}
                <h4>Previous Reviews & Ratings:</h4>
              <table>
                <thead>
                  <tr>
                    <td>Name:</td>
                    <td>Review:</td>
                    <td>Rating:</td>
                  </tr>
                </thead>
                <tbody>
              
                {this.props.reviews.map((review, index) => {
                  return (
                    <tr key={index}>
                  <td>{review.name}</td>
                  <td>{review.review}</td>
                  <td>{review.stars}</td>
                  </tr>
                  )
                })}
                
              </tbody>
              </table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* And then the buttons using handleClose (set modal to false) and handleSubmit (using addReview from App.js) */}
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Review
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
