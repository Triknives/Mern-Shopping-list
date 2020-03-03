import React, { Component } from 'react';
import { Container , ListGroup, ListGroupItem, Media, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getReviews, deleteReview } from '../actions/reviewActions';
import PropTypes from 'prop-types';

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
      <Media>
      {reviews.map(({_id, post}) => (
        <div>
          <Button
            className="remove-btn"
            color="danger"
            size="sm"
            onClick={this.onDeleteClick.bind(this, _id)}
            >
            </Button>
            {post}
        </div>
      ))}
      </Media>
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
