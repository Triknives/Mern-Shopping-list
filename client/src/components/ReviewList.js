import React, { Component } from 'react';
import {   Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle , Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getReviews, deleteReview } from '../actions/reviewActions';
import PropTypes from 'prop-types';

const reviewStyling = {
   margin: '.5vh auto',
   display:'inline_block',
   width: '79%',
   flexWrap: 'wrap',
   justifyContent:'center',
   border:'2px grey solid',
}

const cardStyling = {
  margin:'0',
}

const reviewBodyStyling = {
  padding:'1vh',
  backgroundColor:'#324087',
}
const textStyling = {
  marginLeft: '-20px',
  marginTop:'-25px',
  color: 'white',
  fontWeight: '600',
}
const listBody = {
  backgroundColor: '#6a85de',
}

const reviewText = {
  color: 'yellow',
  fontWeight: '600',
}

class ReviewList extends Component {
  componentDidMount(){
    this.props.getReviews();
  }
  onDeleteClick = (id) => {
    this.props.deleteReview(id);
  };

  render() {

    const { reviews } = this.props.review;
    return(
      <div style = {reviewStyling}>
      {reviews.map(({_id, post}) => (
        <Card style = {reviewBodyStyling}>
          <div style = {reviewText}>
            <h5>Card title</h5>
            <h6>Card subtitle</h6>
          </div>
            <CardBody>
              <div style ={textStyling}>
              {post}
              </div>
          </CardBody>
          <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={this.onDeleteClick.bind(this, _id)}
          >
          </Button>
        </Card>
      ))}
    </div>
    );
  }
}
ReviewList.propTypes = {
  getReviews: PropTypes.func.isRequired,
  review: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  review: state.review
});

export default connect(mapStateToProps, { getReviews, deleteReview })(ReviewList);
