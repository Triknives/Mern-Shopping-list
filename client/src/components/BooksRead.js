import React, { Component } from 'react';
import { Container , ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCompletedBooks, deleteCompletedBook } from '../actions/completedBooksActions';
import BooksModal from './BooksModal';
import PropTypes from 'prop-types';

const listBody = {
  opacity: '1',
  color: 'white',
  fontWeight: '600',
  fontSize:'1rem',
}

const tGroup = {
  width: '32%',
  backgroundColor: 'black',
  opacity:'.75',
  margin: '1vh',
  padding:'1vh',
}

const groupWidth = {
    float:'left',
}

class BooksRead extends Component {
  componentDidMount(){
    this.props.getCompletedBooks();
  }
  onDeleteClick = (id) => {
    this.props.deleteCompletedBook(id);
  };
  render() {

    const { completedBooks } = this.props.completedBook;
    
    return(

      <div style = {tGroup}>
          {completedBooks.map(({_id, title, author, completedDate}) => (
          <ul style = {listBody}>
              <li>
              <Button color= "danger" onClick={this.onDeleteClick.bind(this, _id)}>
                  &times;
                </Button>
              <strong>Title:</strong> {title}
              <em>Author:</em> {author}
              <em>Date Finished:</em> {completedDate}
              </li>
          </ul>
          ))}
      <BooksModal/>
      </div>
      );
    }
  }
BooksRead.propTypes = {
  getCompletedBooks: PropTypes.func.isRequired,
  completedBook: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  completedBook: state.completedBook
});

export default connect(mapStateToProps, { getCompletedBooks, deleteCompletedBook })(BooksRead);
